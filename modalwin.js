'use strict'

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnclosemodal=document.querySelector('.close-modal');
const btnopenmodal=document.querySelectorAll('.showmodal');

const closemodal=function(){
    modal.classList.add('hide');
    overlay.classList.add('hide');

}
for(let i=0;i<btnopenmodal.length;i++)
    btnopenmodal[i].addEventListener('click',function(){
        console.log('button clicked');
        modal.classList.remove('hide');
        overlay.classList.remove('hide');
    });

    btnclosemodal.addEventListener('click',closemodal);
    overlay.addEventListener('click',closemodal);

    document.addEventListener('keydown',function(e){
       // console.log(e.key);

        if(e.key==='Escape' && !modal.classList.contains('hide')){
            closemodal();
        }
    })