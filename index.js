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
let flag=document.querySelector('#new');
let newflag=document.querySelector('#newflag');
let maincontainer=document.querySelector('#maincontainer');
let cancel=document.querySelector('#cancel');
let flagcreate=document.querySelector('#flagcreate');
let inflag1=document.querySelector('#inflag1');
let inflag2=document.querySelector('#inflag2');
let rolesel=document.querySelector('#rolesel');
let analy=document.querySelector('#analy');
let totalspan=document.querySelector('#totalspan');

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
    ana.style.backgroundColor='rgb(241, 241, 243)';
    ana.style.color='black';

    mid.style.display='none';
    features.style.display='flex';
    analy.style.display='none';

    slidecircle.addEventListener('input',function(){
        per.textContent=slidecircle.value+'%';
    })

    circle.addEventListener('click',function(){
    circlediv.style.justifyContent='flex-start';
    circlediv.style.backgroundColor='silver';
    on.textContent='Off';
    on.style.backgroundColor='rgba(255, 0, 0, 0.158)';

    })

   

   flag.addEventListener('click',function(){
   newflag.style.display='flex';
   maincontainer.style.filter='blur(1px)';
   })

cancel.addEventListener('click',function(){
      newflag.style.display='none';
       maincontainer.style.filter='blur(0px)';
})

flagcreate.addEventListener('click',function(){


features.innerHTML+=`<div class="featuresbox" id="featuresbox">

<div class="featureboxtop">

<div class="nam">${inflag1.value}</div>
<div class="featureallbut">

    <div class="circlediv" id="circlediv">
        <div class="circle" id="circle"></div>
    </div>

    <div class="on" id="on">ON</div>
    <div class="delete" id="del" onclick="deletebox(this)">Delete</div>

</div>

</div>    

<div class="featurelast">
<div class="nam2">${inflag2.value}</div>
<div class="perchan">Rollout Perchantage</div>

<div class="sliders">


    <input type="range" class="slidecircle" id="slidecircle"  min="0" max="100" value="25">
   

<div class="per" id="per">0%</div>
<div class="perp">Role:${rolesel.value}</div>
</div>
</div>
</div>`
 
totalspan.textContent=parseInt(totalspan.textContent)+1;
})

})
function deletebox(e){
    e.parentElement.parentElement.parentElement.remove();
}


ana.addEventListener('click',function(){
    analy.style.display='flex';
    features.style.display='none';
    ana.style.width='100%';
    ana.style.height='40px';
    ana.style.border='none';
    ana.style.display='flex';
    ana.style.alignItems='center';
    ana.style.color='white';
    ana.style.backgroundColor='rgb(26, 59, 208)';
    adash.style.backgroundColor='rgb(241, 241, 243)';
     adash.style.color='black';
    mid.style.display='none';
})