let signs=document.querySelector('#sign');
let admin=document.querySelector('#admin');
let adminleft=document.querySelector('#adminleft');
let adminright=document.querySelector('#adminright');
let welcome=document.querySelector('#welcome');
let navbar=document.querySelector('#navbar');
let mid=document.querySelector('#mid');
let adash=document.querySelector('#adash');
let ana=document.querySelector('#ana');
let use=document.querySelector('#use');
let features=document.querySelector('#features');
let featuresbox=document.querySelector('#featuresbox');
let slider=document.querySelector('#slider');
let slidecircle=document.querySelector('#slidecircle');
let per=document.querySelector('#per');
let on=document.querySelector('#on');
let del=document.querySelector('#del');
let circlediv=document.querySelector('#circlediv');
let circle=document.querySelector('#circle');

signs.addEventListener('click',function(){
    admin.style.display='flex';
    adminleft.style.display='flex';
    adminright.style.display='flex';
    navbar.style.display='flex';
    welcome.style.display='none';
    mid.style.display='flex';
})

adash.addEventListener('click',function(){
    adash.style.width='100%';
    adash.style.height='40px';
    adash.style.border='none';
    adash.style.display='flex';
    adash.style.alignItems='center';
    adash.style.color='white';
    adash.style.backgroundColor='rgb(26, 59, 208)';
    mid.style.display='none';
    features.style.display='flex';

    slidecircle.addEventListener('input',function(){
        per.textContent=slidecircle.value+'%';
    })

    circle.addEventListener('click',function(){
    circlediv.style.justifyContent='flex-start';
    circlediv.style.backgroundColor='silver';
    on.textContent='Off';
    on.style.backgroundColor='rgba(255, 0, 0, 0.158)';

    })

   del.addEventListener('click',function(){
    featuresbox.remove();
   }) 
})
