(function(){var d=document,de=d.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=!matchMedia('(pointer:coarse)').matches;
de.classList.add('js');
var sp=d.createElement('div');sp.id='sp';sp.setAttribute('aria-hidden','true');d.body.appendChild(sp);
var hd=d.querySelector('.hd');
function onS(){var h=de.scrollHeight-innerHeight,y=scrollY;sp.style.transform='scaleX('+(h>0?y/h:0)+')';if(hd)hd.classList.toggle('sc',y>8);if(cta)cta.classList.toggle('on',y>innerHeight*.7)}
var cta=null,ar=de.lang==='ar';
if(!d.querySelector('#fields')&&!d.querySelector('[data-cta]')){}
var tgt=d.querySelector('#fields')||d.querySelector('form')||d.querySelector('a[href*="wa.me"]');
if(tgt&&!/\/pay\//.test(location.pathname)){cta=d.createElement('a');cta.id='cta';cta.href=tgt.tagName==='A'&&tgt.href.indexOf('wa.me')>-1?tgt.href:'#'+(tgt.id||'fields');cta.textContent=ar?'احصل على فكرتك الأولى المجانية':'Get a free first concept';d.body.appendChild(cta)}
addEventListener('scroll',onS,{passive:true});onS();
if(rm)return;
var els=d.querySelectorAll('main .sec>*,main .band>*,main .grid>*,.who,.pay');els.forEach(function(e,i){e.classList.add('bv');e.style.transitionDelay=(i%4)*70+'ms'});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('bin');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add('bin')});
/* rotating field line in hero */
var hand=d.querySelector('.hero .hand');
if(hand&&location.pathname.replace(/\/$/,'')===''||hand&&location.pathname==='/ar/'){var L=ar?['مواقع للمطاعم','مواقع للفنادق','مواقع للمصورين','مواقع للمدربين']:['websites for restaurants','websites for hotels','websites for photographers','websites for coaches'],base=hand.textContent;hand.textContent='';var sp2=d.createElement('span');sp2.className='rot';sp2.textContent=L[0];hand.appendChild(sp2);var k=0;setInterval(function(){sp2.classList.add('out');setTimeout(function(){k=(k+1)%L.length;sp2.textContent=L[k];sp2.classList.remove('out')},350)},2600)}
if(fine){
var g=d.createElement('div');g.id='glow';g.setAttribute('aria-hidden','true');d.body.appendChild(g);var gx=0,gy=0,tx=0,ty=0,raf=0;
function lp(){gx+=(tx-gx)*.14;gy+=(ty-gy)*.14;g.style.transform='translate('+gx+'px,'+gy+'px)';raf=(Math.abs(tx-gx)+Math.abs(ty-gy)>.5)?requestAnimationFrame(lp):0}
addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;g.classList.add('on');if(!raf)raf=requestAnimationFrame(lp)},{passive:true});
d.querySelectorAll('.btn,.zb').forEach(function(b){b.classList.add('mag');b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.18,y=(e.clientY-r.top-r.height/2)*.28;b.style.transform='translate('+x+'px,'+y+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
}
})();
(function(){var d=document;
function wrap(){var h=d.querySelector('main .hero');if(h&&!h.closest('.hb')){var w=d.createElement('div');w.className='hb';h.parentNode.insertBefore(w,h);w.appendChild(h)}}
wrap();
var tabs=d.querySelectorAll('.ftab');if(tabs.length&&window.FOLD){var sub=d.getElementById('fsub'),ln=d.getElementById('flink'),pn=d.getElementById('fp');
function pick(i,f){tabs.forEach(function(t,j){t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1});sub.textContent=FOLD[i][0];ln.href=FOLD[i][1];pn.setAttribute('aria-labelledby','ft'+i);if(f)tabs[i].focus()}
tabs.forEach(function(t,i){t.addEventListener('click',function(){pick(i)});t.addEventListener('keydown',function(e){var n=tabs.length,rtl=d.dir==='rtl'||d.documentElement.dir==='rtl',k=e.key,x=-1;if(k==='ArrowRight')x=(i+(rtl?-1:1)+n)%n;else if(k==='ArrowLeft')x=(i+(rtl?1:-1)+n)%n;else if(k==='Home')x=0;else if(k==='End')x=n-1;if(x>-1){e.preventDefault();pick(x,1)}})});}
})();
