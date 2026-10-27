const services=[
{id:'x',name:'X',desc:'社交媒体 · 即时通讯',icon:'𝕏',price:'2.80',region:'美国 / US',cat:'social',badge:'热门',hot:true},
{id:'openai',name:'OpenAI',desc:'开发工具 · AI 平台',icon:'◎',price:'4.50',region:'美国 / US',cat:'dev',badge:'示例'},
{id:'google',name:'Google',desc:'账户服务 · 邮箱',icon:'G',price:'3.20',region:'英国 / UK',cat:'popular',badge:'热门',hot:true},
{id:'telegram',name:'Telegram',desc:'通讯工具 · 社交媒体',icon:'➤',price:'2.40',region:'德国 / DE',cat:'chat',badge:'热门',hot:true},
{id:'discord',name:'Discord',desc:'社群 · 游戏通讯',icon:'◉',price:'1.80',region:'法国 / FR',cat:'chat',badge:'示例'},
{id:'meta',name:'Meta',desc:'社交媒体 · 账户服务',icon:'∞',price:'2.10',region:'西班牙 / ES',cat:'social',badge:'示例'},
{id:'github',name:'GitHub',desc:'开发工具 · 代码托管',icon:'⌘',price:'2.60',region:'加拿大 / CA',cat:'dev',badge:'示例'},
{id:'microsoft',name:'Microsoft',desc:'账户服务 · 开发工具',icon:'⊞',price:'2.20',region:'荷兰 / NL',cat:'popular',badge:'示例'}];
function render(filter='all'){const grid=document.getElementById('serviceGrid');grid.innerHTML=services.filter(s=>filter==='all'||(filter==='popular'&&s.hot)||s.cat===filter).map(s=>`<article class="service" onclick="openOrder('${s.id}')"><div class="service-top"><div class="service-icon ${s.id}">${s.icon}</div><span class="badge ${s.hot?'hot':''}">${s.badge}</span></div><h3>${s.name}</h3><div class="desc">${s.desc}</div><div class="service-bottom"><div class="price">¥${s.price}<small> / 示例</small></div><div class="region">${s.region}</div></div><button class="purchase" type="button">查看演示&nbsp; ↗</button></article>`).join('')}
render();
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});
function openModal(html){document.getElementById('modal').innerHTML=html;document.getElementById('modalBg').classList.add('open')}
window.closeModal=()=>document.getElementById('modalBg').classList.remove('open');
window.openOrder=id=>{const s=services.find(x=>x.id===id);openModal(`<div class="modal-head"><h3>静态演示 · ${s.name}</h3><button class="close" onclick="closeModal()">×</button></div><p>这里展示服务目录与示例价格。此页面没有接入短信供应商或订单系统。</p><div class="orderbox"><div class="orderline"><span>目录服务</span><strong>${s.name}</strong></div><div class="orderline"><span>示例地区</span><strong>${s.region}</strong></div><div class="orderline"><span>展示价格</span><strong>¥${s.price}</strong></div></div><div class="notice">演示站不会分配号码、发送短信、生成验证码或收取费用。请勿将此页面用于真实账户注册。</div><button class="primary" onclick="closeModal()">知道了</button>`)};
window.openAuth=()=>openModal(`<div class="modal-head"><h3>演示版说明</h3><button class="close" onclick="closeModal()">×</button></div><p>这是静态展示页，暂不提供注册、登录或管理员后台。页面不会收集你输入的账户信息。</p><div class="notice">真实短信、订单和账户功能尚未接通。</div><button class="primary" onclick="closeModal()">关闭</button>`);
document.querySelectorAll('.login,.signup').forEach(b=>b.onclick=()=>window.openAuth());

