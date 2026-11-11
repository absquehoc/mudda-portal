/* MUDDA data layer: Supabase client, login gate, loaders, writers. Uses only the public anon key; Row Level Security enforces access. */
const CFG = window.MUDDA_CONFIG || {};
const sb = (window.supabase && CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY)
  ? supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;
let me = null, draft = null, staff = [], allProfiles = [];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ROLE = {main_admin:['Main Admin','मुख्य प्रशासक'],office_admin:['Office Administrator','कार्यालय प्रशासक'],senior_advocate:['Senior Advocate','वरिष्ठ अधिवक्ता'],advocate:['Advocate','अधिवक्ता'],associate_advocate:['Associate Advocate','सहयोगी अधिवक्ता'],legal_intern:['Legal Intern','कानुनी इन्टर्न'],legal_assistant:['Legal Assistant','कानुनी सहायक'],accountant:['Accountant','लेखापाल'],office_staff:['Office Staff','कार्यालय कर्मचारी']};
const roleName = r => (ROLE[r] || [r, r])[lang === 'ne' ? 1 : 0];
const isAdmin = () => !!me && ['main_admin','office_admin'].includes(me.role);
function toastRaw(m){const e=$('#toast');e.textContent=m;e.hidden=false;clearTimeout(toast.id);toast.id=setTimeout(()=>e.hidden=true,4500);}
const errMsg = e => toastRaw(e.message || String(e));

function authScreen(html){let a=$('#auth');if(!a){a=document.createElement('div');a.id='auth';document.body.append(a);}
  a.hidden=false;a.innerHTML=`<div class="dlg auth"><img src="assets/logo.svg" class="logo" alt="Firm">${html}</div>`;return a;}

function loginScreen() {
  return new Promise(res => {
    let isSignup = false;

    const a = authScreen(`
      <div class="body form">
        <h2 id="authTitle">Welcome Back</h2>
        <p id="authSubtitle">Login to your Firm account</p>

        <div id="nameBox" hidden>
          <label>Full Name</label>
          <input id="an" type="text" autocomplete="name">
        </div>

        <div>
          <label>Email</label>
          <input id="ae" type="email" autocomplete="username">
        </div>

        <div>
          <label>Password</label>
            <div style="position:relative; display:flex; align-items:center;">
              <input id="ap" type="password"
                autocomplete="current-password"
              style="width:100%; padding-right:45px;">

           <button type="button" id="togglePassword"
             aria-label="Show password"
             style="position:absolute; right:10px; border:0; background:none; cursor:pointer;">
             <i data-lucide="eye"></i>
              </button>
                 </div>
                    </div>

        <div id="confirmBox" hidden>
          <label>Confirm Password</label>
          <input id="ac" type="password"
            autocomplete="new-password">
        </div>

        <div id="rememberBox">
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
          <input id="remember" type="checkbox" checked
          style="width:auto; margin:0;">
          <span>Remember me</span>
        </label>
        </div>

        <p id="am"></p>
      </div>

      <footer style="display:flex;flex-direction:column;gap:12px">
        <button class="btn pri" id="submitAuth">Login</button>
        <button class="btn" id="switchAuth" type="button">
          Don't have an account? Sign Up
        </button>
      </footer>
    `);

    const $a = id => a.querySelector('#' + id);
    const msg = m => $a('am').textContent = m;
      // Show / Hide Password
$a('togglePassword').onclick = () => {
  const password = $a('ap');
  const visible = password.type === 'password';

  password.type = visible ? 'text' : 'password';

  $a('togglePassword').innerHTML = visible
    ? '<i data-lucide="eye-off"></i>'
    : '<i data-lucide="eye"></i>';

  $a('togglePassword').setAttribute(
    'aria-label',
    visible ? 'Hide password' : 'Show password'
  );

  lucide.createIcons();
};

lucide.createIcons();
    function showMode(signup) {
      isSignup = signup;

      $a('authTitle').textContent =
        signup ? 'Create Your Account' : 'Welcome Back';

      $a('authSubtitle').textContent =
        signup ? 'Request access to MUDDA' : 'Login to your MUDDA account';

      $a('nameBox').hidden = !signup;
      $a('confirmBox').hidden = !signup;
      $a('rememberBox').hidden = signup;

      $a('ap').autocomplete =
        signup ? 'new-password' : 'current-password';

      $a('submitAuth').textContent =
        signup ? 'Create Account' : 'Login';

      $a('switchAuth').textContent =
        signup ? 'Already have an account? Login' :
        "Don't have an account? Sign Up";

      msg('');
    }

    $a('switchAuth').onclick = () => {
      showMode(!isSignup);
    };

    $a('submitAuth').onclick = async () => {
      const email = $a('ae').value.trim();
      const password = $a('ap').value;

      if (!email || !password) {
        return msg('Please enter email and password.');
      }

      $a('submitAuth').disabled = true;

      try {
        if (isSignup) {
          const name = $a('an').value.trim();
          const confirm = $a('ac').value;

          if (!name) return msg('Please enter your full name.');
          if (password.length < 8)
            return msg('Password must be at least 8 characters.');
          if (password !== confirm)
            return msg('Passwords do not match.');

          const { error } = await sb.auth.signUp({
            email,
            password,
            options: {
              data: { full_name: name }
            }
          });

          if (error) throw error;

          msg('Registration submitted. Please check your email if confirmation is required. Your account will be available after Main Admin approval.');
        } else {
          const { error } = await sb.auth.signInWithPassword({
            email,
            password
          });

          if (error) throw error;

          // Supabase persists the login session in browser storage.
          // Remember me is a UI preference; session persistence
          // is managed by the Supabase client.
          res();
        }
      } catch (e) {
        msg(e.message || 'Something went wrong.');
      } finally {
        $a('submitAuth').disabled = false;
      }
    };

    showMode(false);
  });
}
async function gate(){
  if(!sb){authScreen(`<div class="body"><p>${t('setup_msg')}</p></div>`);return new Promise(()=>{});}
  for(;;){
    const {data:{session}}=await sb.auth.getSession();
    if(!session){await loginScreen();continue;}
    const {data}=await sb.from('profiles').select('*').eq('id',session.user.id).maybeSingle();
    if(data && data.approval==='approved'){me=data;$('#auth').hidden=true;return;}
    await pendingScreen();
  }
}
async function loadAll(){
  const today=new Date().toISOString().slice(0,10), soon=new Date(Date.now()+14*864e5).toISOString().slice(0,10);
  const q=p=>p.then(r=>{if(r.error)throw r.error;return r.data||[];});
  try{
    const [cs,ts,hs,lg,pf]=await Promise.all([
      q(sb.from('cases').select('id,case_no,title,category,file_no,faat_no,status,next_hearing,hearing_time,remarks,lead_lawyer,client:clients(name),court:courts(name),lawyer:profiles!cases_lead_lawyer_fkey(full_name),case_updates(title,description,created_at)').order('case_no')),
      q(sb.from('tasks').select('title,deadline,priority,status,case:cases(case_no),assignee:profiles!tasks_assignee_fkey(full_name)').neq('status','completed').order('deadline')),
      q(sb.from('hearings').select('hearing_date,wares_details,case:cases(case_no,client:clients(name),court:courts(name))').eq('kind','tarekh').eq('hearing_date',today)),
      isAdmin()&&me.role==='main_admin'?q(sb.from('audit_logs').select('action,table_name,at').order('at',{ascending:false}).limit(8)):[],
      q(sb.from('profiles').select('id,full_name,email,role,approval').order('created_at'))]);
    cases=cs.map(c=>({id:c.id,no:esc(c.case_no),title:esc(c.title),client:esc(c.client?.name),court:esc(c.court?.name),cat:esc(c.category),file:esc(c.file_no),faat:esc(c.faat_no),
      lawyer:esc(c.lawyer?.full_name),lawyer_id:c.lead_lawyer,status:c.status,next:c.next_hearing||'',time:esc(c.hearing_time),remarks:esc(c.remarks),
      updates:(c.case_updates||[]).sort((a,b)=>b.created_at.localeCompare(a.created_at)).map(u=>({title:esc(u.title),desc:esc(u.description),when:new Date(u.created_at).toLocaleString()}))}));
    work=ts.map(x=>[esc(x.title),esc(x.case?.case_no)||'—',esc(x.assignee?.full_name)||'—',x.deadline||'—',x.priority,x.status]);
    dead=ts.filter(x=>x.deadline&&x.deadline>=today&&x.deadline<=soon).map(x=>[esc(x.title),esc(x.case?.case_no)||'—',x.deadline]);
    tarekh=hs.map(h=>[esc(h.case?.case_no)||'—',esc(h.case?.client?.name),esc(h.case?.court?.name),h.hearing_date,esc(h.wares_details)||'—']);
    acts=lg.map(l=>[esc(l.action+' · '+l.table_name),new Date(l.at).toLocaleString()]);
    allProfiles=pf; staff=pf.filter(p=>p.approval==='approved');
    appr=pf.filter(p=>p.approval==='pending').map(p=>[esc(p.full_name),esc(p.email)]);
  }catch(e){errMsg(e);}
}
async function ref(table,name){name=(name||'').trim();if(!name)return null;
  const f=await sb.from(table).select('id').eq('name',name).maybeSingle();if(f.data)return f.data.id;
  const i=await sb.from(table).insert(table==='clients'?{name,created_by:me.id}:{name}).select('id').single();if(i.error)throw i.error;return i.data.id;}
async function saveCase(c,v){try{
  const row={case_no:(v.no||'').trim()||null,title:v.title.trim(),category:v.cat||null,file_no:v.file||null,faat_no:v.faat||null,status:v.status,next_hearing:v.next||null,remarks:v.remarks||null,lead_lawyer:v.lawyer_id||null};
  row.client_id=await ref('clients',v.client);row.court_id=await ref('courts',v.court);
  const r=c.id?await sb.from('cases').update(row).eq('id',c.id):await sb.from('cases').insert({...row,created_by:me.id});
  if(r.error)throw r.error;draft=null;await loadAll();return true;}catch(e){errMsg(e);return false;}}
async function archiveCase(c){if(!c.id)return false;const r=await sb.from('cases').update({status:'archived'}).eq('id',c.id);if(r.error){errMsg(r.error);return false;}await loadAll();return true;}
async function addUpdate(c,title,desc){const r=await sb.from('case_updates').insert({case_id:c.id,title,description:desc,created_by:me.id});if(r.error)errMsg(r.error);else await loadAll();}
async function setProfile(id,f,v){const r=await sb.from('profiles').update({[f]:v}).eq('id',id);if(r.error)errMsg(r.error);else{toast('ok_save');await loadAll();render();}}
