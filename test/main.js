
let gamePage;
let optionPage;
window.addEventListener('load',function(){
    // for write the game title letter by letter
   welcomePragraph();

   //start button move to start game
    let startBtn=this.document.getElementById('start');
    startBtn.addEventListener('click',function(){
      gamePage=window.open('gamePage.html','_self');
    })

    //option page for check sound if need
    let optionBtn=this.document.getElementById('option');
    optionBtn.addEventListener('click',function(){
        optionPage=window.open('option.html','_self');
      })
})


const welcomePragraph=function(){
    let welcomeTitle=this.document.querySelector('p');
    let title='Welcome To Bird Hunting Game';
    let i=0;
    let intervalId=this.setInterval(()=>{
        if(i<title.length){
            welcomeTitle.innerHTML+=`${title[i]}`;
            i++;
        }
        else 
        {this.clearInterval(intervalId);}
    },100);
    
    
}