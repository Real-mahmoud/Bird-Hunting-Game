window.addEventListener('load',()=>{

    gameOver();
    gameOverSound();
    let playAgainBtn=document.getElementById('playAgain');
    let goToStartbtn=document.getElementById('startpage');

    playAgainBtn.addEventListener('click',()=>{
        window.open('gamePage.html','_self');
    });
    goToStartbtn.addEventListener('click',()=>{
        window.open('index.html','_self');
    });
});

const gameOverSound=function(){
    let over=this.document.createElement('audio');
    over.src="Audios/gameOver.mp3";
    over.autoplay=true;
    
    this.document.body.appendChild(over);
} 


const gameOver=function(){
    let welcomeTitle=this.document.querySelector('p');
    let title='GAME OVER';
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