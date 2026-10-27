const crypto = require('node:crypto');
const readline = require('node:readline');
if (!process.stdin.isTTY || !process.stdin.setRawMode) {
  console.error('请在交互式终端运行此脚本。');
  process.exit(1);
}
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
let current = '';
const answers = [];
function prompt(label) {
  process.stdout.write(label);
  process.stdin.setRawMode(true);
  process.stdin.resume();
  const onData = chunk => {
    const key = chunk.toString('utf8');
    if (key === '\u0003') { process.stdout.write('\n已取消。\n'); process.exit(1); }
    if (key === '\r' || key === '\n') {
      process.stdin.off('data', onData);
      process.stdin.setRawMode(false);
      process.stdout.write('\n');
      answers.push(current); current = '';
      if (answers.length < 2) prompt('再次输入管理员密码：');
      else finish();
      return;
    }
    if (key === '\u007f' || key === '\b') { current = current.slice(0, -1); process.stdout.write('\b \b'); return; }
    if (key >= ' ') { current += key; process.stdout.write('*'); }
  };
  process.stdin.on('data', onData);
}
function finish() {
  rl.close();
  const [a,b] = answers;
  if (a.length < 14 || a !== b) { console.error('密码至少 14 位，且两次输入必须一致。'); process.exit(1); }
  const salt = crypto.randomBytes(16).toString('hex');
  process.stdout.write(`${salt}:${crypto.scryptSync(a, salt, 64).toString('hex')}\n`);
}
prompt('设置管理员密码（至少 14 位；输入时不显示字符）：');

