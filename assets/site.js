const m=document.querySelector('.menu'),l=document.querySelector('.links');if(m&&l)m.addEventListener('click',()=>{const o=l.classList.toggle('open');m.setAttribute('aria-expanded',o?'true':'false')});document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const f=document.querySelector('#contact-form');
if(f){
const btn=f.querySelector('button[type=submit]'),st=f.querySelector('.status'),label=btn.textContent;let busy=false;
const show=(msg,bad)=>{st.textContent=msg;st.style.color=bad?'#9b1c1c':'';};
const done=()=>{busy=false;btn.disabled=false;btn.textContent=label;};
f.addEventListener('submit',async e=>{
e.preventDefault();
if(busy)return;
if(!f.checkValidity()){f.reportValidity();return;}
busy=true;btn.disabled=true;btn.textContent='Sending…';show('');
const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),20000);
try{
const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'},signal:ctl.signal});
let d={};try{d=await r.json();}catch(_){}
if(r.ok&&d.ok!==false){
try{sessionStorage.setItem('civicfin-sent','1');}catch(_){}
btn.textContent='Sent';show('Thanks — message sent.');
location.assign('thanks.html');return;
}
const detail=Array.isArray(d.errors)&&d.errors.length?' ('+d.errors.map(x=>x.message).filter(Boolean).join('; ')+')':'';
show('Sorry, your message was not sent'+detail+'. Your details are still here, so please check them and try again.',true);done();
}catch(err){
show(err.name==='AbortError'?'Sorry, the message took too long to send and may not have gone through. Your details are still here, so please try again.':'Sorry, your message was not sent — please check your connection. Your details are still here, so please try again.',true);done();
}finally{clearTimeout(timer);}
});
window.addEventListener('pageshow',ev=>{if(ev.persisted)done();});
}
if(document.body.dataset.page==='thanks'){let ok=true;try{ok=sessionStorage.getItem('civicfin-sent')==='1';}catch(_){}if(!ok)location.replace('contact.html');}

