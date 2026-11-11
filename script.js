/* MUDDA UI. Data comes from Supabase via db.js. No credentials are stored here. */
// ---------- 1. TRANSLATIONS: key: [English, नेपाली] ----------
const K = {
 g_main:['MAIN','मुख्य'],g_court:['COURT MANAGEMENT','अदालत व्यवस्थापन'],g_corp:['CORPORATE MANAGEMENT','कर्पोरेट व्यवस्थापन'],
 g_legal:['LEGAL RESOURCES','कानुनी स्रोतहरू'],g_office:['OFFICE MANAGEMENT','कार्यालय व्यवस्थापन'],g_system:['SYSTEM','प्रणाली'],
 nav_dashboard:['Dashboard','ड्यासबोर्ड'],nav_workspace:['My Workspace','मेरो कार्यक्षेत्र'],nav_notifications:['Notifications','सूचनाहरू'],
 nav_cases:['Cases','मुद्दाहरू'],nav_supreme:['Supreme Court','सर्वोच्च अदालत'],nav_high:['High Courts','उच्च अदालतहरू'],nav_district:['District Courts','जिल्ला अदालतहरू'],
 nav_pesi:["Today's Pesi",'आजको पेशी'],nav_tarekh:['Tarekh','तारेख'],nav_history:['Hearing History','पेशी इतिहास'],nav_judgments:['Judgments','फैसलाहरू'],
 nav_companies:['Companies','कम्पनीहरू'],nav_ocr:['OCR Management','कम्पनी रजिस्ट्रार कार्यालय व्यवस्थापन'],nav_doi:['DOI / Industry Management','उद्योग विभाग / उद्योग व्यवस्थापन'],nav_compdocs:['Company Documents','कम्पनी कागजातहरू'],
 nav_precedents:['Precedents','नजिरहरू'],nav_legaldocs:['Legal Documents','कानुनी कागजातहरू'],nav_library:['Document Library','कागजात पुस्तकालय'],
 nav_tasks:['Tasks','कार्यहरू'],nav_meetings:['Meetings','बैठकहरू'],nav_messages:['Messages','सन्देशहरू'],nav_staff:['Staff Management','कर्मचारी व्यवस्थापन'],nav_logs:['Activity Logs','गतिविधि लगहरू'],
 nav_settings:['Settings','सेटिङहरू'],nav_perms:['User Permissions','प्रयोगकर्ता अनुमतिहरू'],nav_help:['Help and Support','सहायता तथा सहयोग'],
 search_ph:['Search cases…','मुद्दा खोज्नुहोस्…'],collapse:['Toggle menu','मेनु खोल्ने/बन्द गर्ने'],admin_name:['',''],role_admin:['Main Admin','मुख्य प्रशासक'],
 backend:['This module is not built yet.','यो मोड्युल अझै बनेको छैन।'],
 empty:['No records found.','कुनै विवरण फेला परेन।'],
 s_total:['Total Cases','कुल मुद्दा'],s_ongoing:['Ongoing Cases','चलिरहेका मुद्दा'],s_done:['Completed Cases','फैसला भएका मुद्दा'],s_wd:['Withdrawn Cases','फिर्ता भएका मुद्दा'],
 s_comp:['Total Companies','कुल कम्पनी'],s_tasks:['Pending Tasks','बाँकी कार्य'],s_hear:["Today's Hearings",'आजको पेशी'],s_dead:['Upcoming Deadlines','आगामी म्याद'],
 d_pesi:["Today's Pesi",'आजको पेशी'],d_tarekh:["Today's Tarekh",'आजको तारेख'],d_work:['Work to Do','गर्नुपर्ने काम'],d_dead:['Upcoming Deadlines','आगामी म्याद'],d_act:['Recent Activities','हालका गतिविधि'],d_appr:['Pending Approvals','स्वीकृति बाँकी'],
 f_no:['Case Number','मुद्दा नम्बर'],f_title:['Case Title','मुद्दाको शीर्षक'],f_client:['Client / Party','पक्ष / पक्षकार'],f_court:['Court','अदालत'],f_cat:['Case Category','मुद्दाको वर्ग'],
 f_file:['File Number','फाइल नम्बर'],f_faat:['Faat Number','फाँट नम्बर'],f_lawyer:['Assigned Lawyer','तोकिएका कानुन व्यवसायी'],f_time:['Hearing Time','पेशी समय'],f_status:['Status','स्थिति'],
 f_next:['Next Hearing Date','अर्को पेशी मिति'],f_remarks:['Remarks','कैफियत'],f_action:['Action','कार्य'],f_tdate:['Tarekh Date','तारेख मिति'],f_wares:['Wares Details','वारेस विवरण'],f_staff:['Responsible Staff','जिम्मेवार कर्मचारी'],
 f_task:['Task Title','कार्यको शीर्षक'],f_dead:['Deadline','म्याद'],f_prio:['Priority','प्राथमिकता'],f_name:['Name','नाम'],f_req:['Request','अनुरोध'],f_what:['Activity','गतिविधि'],f_when:['When','कहिले'],
 st_ongoing:['Ongoing','चलिरहेको'],st_completed:['Completed / Decided','फैसला भएको'],st_withdrawn:['Withdrawn / Client Left','फिर्ता / क्लाइन्ट छाडेको'],st_pending:['Pending','बाँकी'],st_archived:['Archived','अभिलेखमा'],
 p_high:['High','उच्च'],p_med:['Medium','मध्यम'],p_low:['Low','न्यून'],
 all:['All statuses','सबै स्थिति'],sort:['Sort: Case Number','क्रम: मुद्दा नम्बर'],sort2:['Sort: Next Hearing','क्रम: अर्को पेशी'],
 add:['Add New Case','नयाँ मुद्दा थप्नुहोस्'],edit:['Edit Record','विवरण सम्पादन गर्नुहोस्'],view:['View Details','विवरण हेर्नुहोस्'],save:['Save Changes','सुरक्षित गर्नुहोस्'],cancel:['Cancel','रद्द गर्नुहोस्'],
 archive:['Archive','अभिलेखमा राख्नुहोस्'],close:['Close','बन्द गर्नुहोस्'],search:['Search','खोज्नुहोस्'],prev:['Previous','अघिल्लो'],next:['Next','अर्को'],records:['records','विवरणहरू'],
 confirm_arch:['Archive this case? It will be marked Archived.','के तपाईं यो मुद्दालाई अभिलेखमा राख्न चाहनुहुन्छ?'],
 ok_save:['Changes saved.','परिवर्तन सुरक्षित भयो।'],ok_arch:['Case archived.','मुद्दा अभिलेखमा राखियो।'],
 err_req:['Case title is required.','मुद्दाको शीर्षक आवश्यक छ।'],err_auth:['Login and permissions require the Supabase backend.','लगइन र अनुमतिका लागि Supabase ब्याकइन्ड आवश्यक छ।'],
 offline:['No internet connection. Changes are not synced.','इन्टरनेट जडान छैन। परिवर्तनहरू सिंक भएका छैनन्।'],
 t_over:['Overview','सारांश'],t_parties:['Parties','पक्षहरू'],t_daily:['Daily Updates','दैनिक अद्यावधिक'],t_hh:['Hearing History','पेशी इतिहास'],t_th:['Tarekh History','तारेख इतिहास'],
 t_judg:['Judgments','फैसलाहरू'],t_docs:['Documents','कागजातहरू'],t_tasks:['Tasks','कार्यहरू'],t_log:['Activity Log','गतिविधि लग'],
 u_title:['Update title','अद्यावधिक शीर्षक'],u_desc:['Description','विवरण'],u_add:['Add Update','अद्यावधिक थप्नुहोस्'],u_by:['Added by','थप्ने'],
 view_title:['Case Details','मुद्दाको विवरण'],added:['Update added.','अद्यावधिक थपियो।'],
 auth_login:['Log in','लगइन'],auth_signup:['Request staff access','कर्मचारी पहुँच अनुरोध'],email:['Email','इमेल'],password:['Password','पासवर्ड'],signout:['Sign out','साइन आउट'],
 pending_msg:['Your account is waiting for Main Admin approval.','तपाईंको खाता मुख्य प्रशासकको स्वीकृतिको प्रतीक्षामा छ।'],
 setup_msg:['Supabase is not configured. Add your project URL and anon key to www/config.js.','Supabase कन्फिगर गरिएको छैन। www/config.js मा आफ्नो प्रोजेक्ट URL र anon key राख्नुहोस्।'],
 auth_name_first:['Enter your full name, then press the button again.','आफ्नो पूरा नाम लेख्नुहोस्, अनि फेरि बटन थिच्नुहोस्।'],auth_check_mail:['Check your email to confirm, then log in.','इमेल जाँचेर पुष्टि गर्नुहोस्, अनि लगइन गर्नुहोस्।'],
 f_email:['Email','इमेल'],f_role:['Role','भूमिका'],err_perm:['Only the Main Admin can manage staff.','कर्मचारी व्यवस्थापन मुख्य प्रशासकले मात्र गर्न सक्छन्।'],
 ap_approved:['Approved','स्वीकृत'],ap_rejected:['Rejected','अस्वीकृत'],ap_suspended:['Suspended','निलम्बित']
};
const T = {en:{},ne:{}}; for (const k in K){T.en[k]=K[k][0];T.ne[k]=K[k][1];}
let lang = (()=>{try{return localStorage.getItem('mudda_lang')||'en'}catch(e){return 'en'}})();
const t = k => T[lang][k] ?? T.en[k] ?? k;
const $ = s => document.querySelector(s);

// ---------- 2. NAVIGATION ----------
const NAV = [
 ['g_main',[['dashboard','layout-dashboard'],['workspace','briefcase'],['notifications','bell']]],
 ['g_court',[['cases','scale'],['supreme','landmark'],['high','building-2'],['district','building'],['pesi','calendar-check'],['tarekh','calendar-clock'],['history','history'],['judgments','gavel']]],
 ['g_corp',[['companies','factory'],['ocr','file-check'],['doi','badge-check'],['compdocs','folder-open']]],
 ['g_legal',[['precedents','book-open'],['legaldocs','file-text'],['library','library']]],
 ['g_office',[['tasks','list-checks'],['meetings','users'],['messages','mail'],['staff','user-cog'],['logs','scroll-text']]],
 ['g_system',[['settings','settings'],['perms','shield-check'],['help','life-buoy']]]
];
const shut = new Set();
function renderNav(){
 $('#nav').innerHTML = NAV.map(([g,items])=>`<div class="grp ${shut.has(g)?'shut':''}"><button data-g="${g}">${t(g)}<i data-lucide="chevron-down"></i></button><ul>${items.map(([id,ic])=>`<li><a href="#${id}" class="${id===page?'on':''}"><i data-lucide="${ic}"></i>${t('nav_'+id)}</a></li>`).join('')}</ul></div>`).join('');
 $('#nav').querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{shut.has(b.dataset.g)?shut.delete(b.dataset.g):shut.add(b.dataset.g);renderNav();});
 $('#nav').querySelectorAll('a').forEach(a=>a.onclick=()=>document.body.classList.remove('open'));
}

// ---------- 3. STATE (filled from Supabase by loadAll in db.js) ----------
let cases=[],tarekh=[],work=[],dead=[],acts=[],appr=[];

// ---------- 4. HELPERS ----------
const badge = s => `<span class="badge s-${s}">${t('st_'+s)}</span>`;
const tbl = (heads,rows) => rows.length ? `<div class="scroll"><table><thead><tr>${heads.map(h=>`<th>${t(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : `<div class="empty"><i data-lucide="inbox"></i><p>${t('empty')}</p></div>`;
const panel = (k,body) => `<section class="panel"><h2>${t(k)}</h2>${body}</section>`;
function toast(m){const e=$('#toast');e.textContent=t(m);e.hidden=false;clearTimeout(toast.id);toast.id=setTimeout(()=>e.hidden=true,3200);}
const icons = () => window.lucide && lucide.createIcons();

// ---------- 5. PAGES ----------
let page = (location.hash||'#dashboard').slice(1), q='', filt='', sortBy='no', pg=1;
const PER = 5;
function dashboard(){
 const n = x => cases.filter(c=>c.status===x).length, today=new Date().toISOString().slice(0,10);
 const todays = cases.filter(c=>c.status==='ongoing'&&c.next===today);
 const st=[['s_total',cases.length],['s_ongoing',n('ongoing')],['s_done',n('completed')],['s_wd',n('withdrawn')],['s_tasks',work.length],['s_hear',todays.length],['s_dead',dead.length]];
 const pesi = todays.map(c=>[c.no||'—',c.client,c.court,c.faat,c.lawyer,c.time||'—',badge(c.status),`<button class="btn sm" data-open="${c.id}" title="${t('view')}"><i data-lucide="eye"></i></button>`]);
 return `<div class="stats">${st.map(([k,v])=>`<div><b>${v}</b><span>${t(k)}</span></div>`).join('')}</div>
 ${panel('d_pesi',tbl(['f_no','f_client','f_court','f_faat','f_lawyer','f_time','f_status','f_action'],pesi))}
 ${panel('d_tarekh',tbl(['f_no','f_client','f_court','f_tdate','f_wares'],tarekh))}
 <div class="grid">${panel('d_work',tbl(['f_task','f_no','f_staff','f_dead','f_prio','f_status'],work.map(w=>[w[0],w[1],w[2],w[3],t('p_'+w[4]),t('st_'+w[5])])))}
 ${panel('d_dead',tbl(['f_task','f_no','f_dead'],dead))}${panel('d_act',tbl(['f_what','f_when'],acts))}${panel('d_appr',tbl(['f_name','f_req'],appr))}</div>`;
}
function staffPage(){
 if(!me||me.role!=='main_admin') return `<div class="panel"><div class="empty"><i data-lucide="shield-check"></i><p>${t('err_perm')}</p></div></div>`;
 const sel=(p,f,vals,lab)=>`<select data-pr="${p.id}" data-f="${f}" ${p.id===me.id?'disabled':''}>${vals.map(v=>`<option value="${v}" ${p[f]===v?'selected':''}>${lab(v)}</option>`).join('')}</select>`;
 const rows=allProfiles.map(p=>[esc(p.full_name),esc(p.email),sel(p,'role',Object.keys(ROLE),roleName),sel(p,'approval',['pending','approved','rejected','suspended'],v=>t(v==='pending'?'st_pending':'ap_'+v))]);
 return panel('nav_staff',tbl(['f_name','f_email','f_role','f_status'],rows));
}
function casesPage(){
 let rows = cases.filter(c=>(!filt||c.status===filt)&&(!q||Object.values(c).join(' ').toLowerCase().includes(q.toLowerCase())));
 rows.sort((a,b)=>sortBy==='no'?a.no.localeCompare(b.no):(a.next||'9').localeCompare(b.next||'9'));
 const pages = Math.max(1,Math.ceil(rows.length/PER)); pg=Math.min(pg,pages);
 const part = rows.slice((pg-1)*PER,pg*PER).map(c=>[c.no||'—',c.title,c.client,c.court,c.lawyer,badge(c.status),c.next||'—',
  `<button class="btn sm" data-open="${c.id}" title="${t('view')}" aria-label="${t('view')}"><i data-lucide="eye"></i></button><button class="btn sm" data-open="${c.id}" data-edit="1" title="${t('edit')}" aria-label="${t('edit')}"><i data-lucide="pencil"></i></button>`]);
 const opts = ['ongoing','completed','withdrawn','pending','archived'].map(s=>`<option value="${s}" ${filt===s?'selected':''}>${t('st_'+s)}</option>`).join('');
 return `<section class="panel"><div class="bar">
  <input id="cq" value="${q}" placeholder="${t('search_ph')}"><select id="cf"><option value="">${t('all')}</option>${opts}</select>
  <select id="cs"><option value="no">${t('sort')}</option><option value="next" ${sortBy==='next'?'selected':''}>${t('sort2')}</option></select>
  <button class="btn pri sp" id="addCase">${t('add')}</button></div>
  ${tbl(['f_no','f_title','f_client','f_court','f_lawyer','f_status','f_next','f_action'],part)}
  <div class="pager"><span>${rows.length} ${t('records')}</span><span><button class="btn sm" id="pp" ${pg<2?'disabled':''}>${t('prev')}</button> ${pg}/${pages} <button class="btn sm" id="pn" ${pg>=pages?'disabled':''}>${t('next')}</button></span></div></section>`;
}
const stub = () => `<div class="panel"><div class="empty"><i data-lucide="database"></i><h2>${t('nav_'+page)}</h2><p>${t('backend')}</p></div></div>`;
const PAGES = {dashboard, cases:casesPage, pesi:casesPage, staff:staffPage, perms:staffPage};

function render(){
 document.documentElement.lang = lang==='ne'?'ne':'en';
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
 document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=t(e.dataset.i18nPh));
 document.querySelectorAll('[data-i18n-title]').forEach(e=>e.title=t(e.dataset.i18nTitle));
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===lang));
 $('#pageTitle').textContent=t('nav_'+page); $('#crumb').textContent='MUDDA / '+t('nav_'+page);
 $('#offline').textContent=t('offline');
 if(me){$('.who b').textContent=me.full_name||me.email;$('.who small').textContent=roleName(me.role);$('.av').textContent=(me.full_name||me.email||'?').trim().slice(0,2).toUpperCase();}
 renderNav(); $('#view').innerHTML=(PAGES[page]||stub)(); bind(); icons();
}
function bind(){
 document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openCase(b.dataset.open,!!b.dataset.edit));
 const on=(id,ev,fn)=>{const e=$(id);if(e)e[ev]=fn;};
 on('#cq','oninput',e=>{q=e.target.value;pg=1;keepFocus('#cq');}); on('#cf','onchange',e=>{filt=e.target.value;pg=1;render();});
 on('#cs','onchange',e=>{sortBy=e.target.value;render();}); on('#pp','onclick',()=>{pg--;render();}); on('#pn','onclick',()=>{pg++;render();});
 on('#addCase','onclick',()=>{draft={id:null,no:'',title:'',client:'',court:'',cat:'',file:'',faat:'',lawyer:'',lawyer_id:null,status:'pending',next:'',time:'',remarks:'',updates:[]};openCase(null,true);});
 document.querySelectorAll('[data-pr]').forEach(e=>e.onchange=()=>setProfile(e.dataset.pr,e.dataset.f,e.value));
}
function keepFocus(sel){const p=$(sel).selectionStart;render();const e=$(sel);e.focus();e.setSelectionRange(p,p);}

// ---------- 6. CASE DETAIL MODAL (read-only by default; pencil enables editing) ----------
const FIELDS=[['title','f_title','text',1],['no','f_no','text'],['client','f_client','text'],['court','f_court','text'],['cat','f_cat','text'],['file','f_file','text'],['faat','f_faat','text'],['lawyer','f_lawyer','staff'],['status','f_status','select'],['next','f_next','date'],['remarks','f_remarks','area',1]];
const TABS=['t_over','t_parties','t_daily','t_hh','t_th','t_judg','t_docs','t_tasks','t_log'];
function openCase(no,editing=false,tab='t_over'){
 const c=no===null?draft:cases.find(x=>x.id===no), m=$('#modal'); m.hidden=false;
 const ro=editing?'':'readonly';
 const field=([k,l,ty,full])=>`<div class="${full?'full':''}"><label>${t(l)}</label>`+(ty==='select'?`<select data-k="${k}" ${editing?'':'disabled'}>${['ongoing','completed','withdrawn','pending','archived'].map(s=>`<option value="${s}" ${c.status===s?'selected':''}>${t('st_'+s)}</option>`).join('')}</select>`:ty==='staff'?`<select data-k="lawyer_id" ${editing&&isAdmin()?'':'disabled'}><option value="">—</option>${staff.map(p=>`<option value="${p.id}" ${c.lawyer_id===p.id?'selected':''}>${esc(p.full_name)}</option>`).join('')}</select>`:ty==='area'?`<textarea data-k="${k}" rows="2" ${ro}>${c[k]}</textarea>`:`<input data-k="${k}" type="${ty}" value="${c[k]}" ${ro}>`)+'</div>';
 let body = tab==='t_over'?`<div class="form">${FIELDS.map(field).join('')}</div>`
  : tab==='t_daily'?`${c.updates.map(u=>`<div class="entry"><b>${u.title}</b><br>${u.desc}<br><small>${u.when} · </small></div>`).join('')||`<div class="empty">${t('empty')}</div>`}<div class="form"><div class="full"><label>${t('u_title')}</label><input id="ut"></div><div class="full"><label>${t('u_desc')}</label><textarea id="ud" rows="2"></textarea></div></div><p><button class="btn" id="addUp">${t('u_add')}</button></p>`
  : `<div class="empty"><i data-lucide="database"></i><p>${t('backend')}</p></div>`;
 m.innerHTML=`<div class="dlg"><header><h2>${t('view_title')}: ${c.no}</h2><button class="btn sm" id="x" aria-label="${t('close')}"><i data-lucide="x"></i></button></header>
 <div class="body"><div class="tabs">${TABS.map(x=>`<button data-t="${x}" class="${x===tab?'on':''}">${t(x)}</button>`).join('')}</div>${body}</div>
 <footer>${editing?`<button class="btn" id="arch">${t('archive')}</button><button class="btn" id="cx">${t('cancel')}</button><button class="btn pri" id="sv">${t('save')}</button>`:`<button class="btn" id="ed"><i data-lucide="pencil"></i> ${t('edit')}</button><button class="btn pri" id="x2">${t('close')}</button>`}</footer></div>`;
 const g=id=>m.querySelector(id);
 m.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>openCase(no,editing,b.dataset.t));
 g('#x').onclick=closeModal; (g('#x2')||{}).onclick=closeModal; (g('#ed')||{}).onclick=()=>openCase(no,true,tab);
 (g('#cx')||{}).onclick=()=>{if(!c.id){draft=null;closeModal();}else openCase(no,false,tab);}; // Cancel discards edits and returns to read-only
 if(g('#sv'))g('#sv').onclick=()=>{const v={};m.querySelectorAll('[data-k]').forEach(e=>v[e.dataset.k]=e.value);
  if(!v.title||!v.title.trim())return toast('err_req'); saveCase(c,v).then(ok=>{if(ok){toast('ok_save');closeModal();render();}});};
 if(g('#arch'))g('#arch').onclick=()=>{if(confirm(t('confirm_arch'))) archiveCase(c).then(ok=>{if(ok){toast('ok_arch');closeModal();render();}});};
 if(g('#addUp'))g('#addUp').onclick=()=>{const ti=g('#ut').value.trim();if(!ti)return toast('err_req');if(!c.id)return;addUpdate(c,ti,g('#ud').value).then(()=>{toast('added');openCase(no,editing,'t_daily');});};
 icons();
}
const closeModal=()=>{$('#modal').hidden=true;};

// ---------- 7. GLOBAL EVENTS ----------
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;try{localStorage.setItem('mudda_lang',lang)}catch(e){}render();});
window.onhashchange=()=>{page=(location.hash||'#dashboard').slice(1);render();};
$('#menuBtn').onclick=()=>document.body.classList.toggle(innerWidth>900?'collapsed':'open');
$('#scrim').onclick=()=>document.body.classList.remove('open');
$('#bell').onclick=()=>location.hash='notifications';
$('#profile').onclick=()=>{if(confirm(t('signout')+'?'))sb.auth.signOut().then(()=>location.reload());};
$('#gsearch').onkeydown=e=>{if(e.key==='Enter'){q=e.target.value;pg=1;location.hash==='#cases'?render():location.hash='cases';}};
$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal();};
const net=()=>{$('#offline').hidden=navigator.onLine;};
addEventListener('online',net);addEventListener('offline',net);net();
gate().then(async()=>{await loadAll();render();});
