window.score=1;

window.addEventListener('load',()=>{

   
    
    scorePage();
    CongratulationSound();
    let keepPlayBtn=document.getElementById('keepPlay');
    let goToStartbtn=document.getElementById('start-page');

    keepPlayBtn.addEventListener('click',()=>{
        let currentScore = parseInt(localStorage.getItem('score')) || 0;
        currentScore++;  // Increase score
        localStorage.setItem('score', currentScore); 
        window.open('gamePage.html','_self');
    });
    goToStartbtn.addEventListener('click',()=>{
        localStorage.setItem('score', 1);
        window.open('index.html','_self');
    });
});

const CongratulationSound=function(){
    let congrats=this.document.createElement('audio');
    congrats.src="Audios/Congratulations.mp3";
    congrats.autoplay=true;
    
    this.document.body.appendChild(congrats);
} 


const scorePage=function(){
    let CongratulationTitle=this.document.querySelector('pre');
    let currentScore = localStorage.getItem('score') || 1; // Get stored score
    let title = `CONGRATULATION HERO! 
    YOUR SCORE(${currentScore}) `; // Uses the score in the text
    
    let i=0;
    let intervalId=this.setInterval(()=>{
        if(i<title.length){
            CongratulationTitle.innerHTML+=`${title[i]}`;
            i++;
        }
        else 
        {this.clearInterval(intervalId);}
    },100);
}