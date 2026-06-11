/* ===========================================================
   ANIKO — shared chrome behaviours for portfolio pages.
   Safe to include on any page; every hook is guarded.
   Page-specific rendering (cards, filters, lightbox) lives per file.
   =========================================================== */
(function(){
  function init(){
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // scroll progress bar + nav scroll-morph
    var nav = document.getElementById('nav');
    var bar = document.getElementById('scrollbar');
    function onScroll(){
      if(nav) nav.classList.toggle('scrolled', window.scrollY > 20);
      if(bar){ var h=document.documentElement, max=h.scrollHeight-h.clientHeight; bar.style.transform='scaleX('+(max>0?h.scrollTop/max:0)+')'; }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});

    // mobile nav
    var burger = document.getElementById('burger');
    var menu = document.getElementById('navmobile');
    if(burger && menu){
      burger.setAttribute('aria-controls','navmobile');
      function closeMenu(){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
      burger.addEventListener('click', function(){ var o=menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
      menu.addEventListener('click', function(e){ if(e.target.closest('a')) closeMenu(); });
      document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMenu(); });
    }

    // placeholder "#" links shouldn't jump
    document.querySelectorAll('a[href="#"]').forEach(function(a){
      a.addEventListener('click', function(e){ e.preventDefault(); });
    });

    // custom cursor (fine pointer only)
    if(window.matchMedia('(pointer:fine)').matches && !reduced){
      var dot=document.createElement('div'); dot.className='cursor-dot'; dot.setAttribute('aria-hidden','true');
      document.body.appendChild(dot);
      var cx=innerWidth/2, cy=innerHeight/2, tx=cx, ty=cy, shown=false, scale=1;
      document.addEventListener('mousemove', function(e){ tx=e.clientX; ty=e.clientY; if(!shown){ cx=tx; cy=ty; dot.classList.add('on'); shown=true; } }, {passive:true});
      document.addEventListener('mouseleave', function(){ dot.classList.remove('on'); shown=false; });
      document.addEventListener('mouseover', function(e){ var hit=e.target.closest('a,button,[role=button],input,textarea,label'); scale=hit?2:1; dot.classList.toggle('grow', !!hit); });
      (function loop(){ cx+=(tx-cx)*.22; cy+=(ty-cy)*.22; dot.style.transform='translate('+(cx-6.5)+'px,'+(cy-6.5)+'px) scale('+scale+')'; requestAnimationFrame(loop); })();
    }

    // reveal-on-scroll + hand-drawn underline/ellipse draw
    var targets = document.querySelectorAll('.m,.u-draw,.ellipse');
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(es){
        es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
      }, {threshold:.14, rootMargin:'0px 0px -30px 0px'});
      targets.forEach(function(el){ io.observe(el); });
    } else {
      targets.forEach(function(el){ el.classList.add('in'); });
    }
    // release persistent entrance clip-path so out-of-box children aren't clipped
    document.addEventListener('animationend', function(e){
      if(e.animationName==='revealIn' || e.animationName==='winkIn'){
        e.target.style.setProperty('clip-path','none','important');
      }
    });

    // contact form (mailto fallback)
    var form = document.getElementById('contact-form');
    if(form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        if(!this.reportValidity()) return;
        var g = function(n){ var el=this.querySelector('[name='+n+']'); return el ? (el.value||'').trim() : ''; }.bind(this);
        var body = encodeURIComponent('Name: '+g('fn')+'\nCompany: '+g('co')+'\nEmail: '+g('em')+'\n\n'+g('msg'));
        window.location.href = 'mailto:anachikhiashvili22@gmail.com?subject='+encodeURIComponent('Portfolio inquiry from '+g('fn'))+'&body='+body;
      });
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
