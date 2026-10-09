// Add keyboard closing without replacing or duplicating the contact form handler.
(() => {
  const menu=document.querySelector('.menu'), links=document.querySelector('.links');
  if(!menu||!links)return;
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&links.classList.contains('open')){
      links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();
    }
  });
})();
