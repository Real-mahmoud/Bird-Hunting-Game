

window.addEventListener('load', function () {

  workMusic();

  //1- moving mouse
  //------------------------------------------------
  this.document.addEventListener('mousemove',(aim)=>{
    let mouseAim=document.getElementById('cursor');
    const weapon = document.getElementById("gun");
    mouseAim.style.left=aim.pageX-15+'px'; // -15 to be exactly at the mouse pointer (got it by try)
    mouseAim.style.top=aim.pageY -15+'px'; 
  //--------------------------------------
   
  //2-rotate weapon according to mouse postion (i rotate the img to work will)
  //---------------------------
  // Get weapon's position
    weaponRect = weapon.getBoundingClientRect();
    weaponX = weaponRect.left + weaponRect.width / 2;
    weaponY = weaponRect.top + weaponRect.height;

    // Calculate angle between weapon and mouse
    const deltaX = aim.pageX - weaponX;
    const deltaY = aim.pageY - weaponY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Rotate the weapon
    weapon.style.transform = `rotate(${angle}deg)`;
    //------------------------------------------
  });


  //3- when shot bullets move
  //-----------------------------------
 
  
  this.document.addEventListener('click',function(event){
    clickCounter++;

    let ammoDiv=document.querySelector('.ammoDiv');
    let ammo=ammoDiv.querySelectorAll('img');
    console.log(ammo);
    ammo[clickCounter-1].style.display='none';   // i tryed .remove() but wrong coz it delete the element at all so when it try to remove the img 4 the array has 2 index only so it give undefined
    
    //if he shoot 5 times and he didnt click on the bird it will game over page
    if(clickCounter==5 && !birdClicked){
      let gameOver=window.open('gameOver.html','_self');
    }

    //if he still under 6 shoots and he clicked the bird it goes to score page
    else if (clickCounter<6 && birdClicked) {
      clearInterval(birdIntervalId);// stop bird move
      bird.src="images/eagleDie.gif" ;// but another img
      bird.style.width='200px';
      //hide the another img after 2 sec
      setTimeout(() => {
        bird.style.display='none';
      },2000);
  
      setTimeout(()=>{
        
        let scoreWidnow=window.open('score.html','_self');
      },2000)
      
    }
  shootBullet(event.pageX,event.pageY);

  // click settings
  let setting=document.getElementById('setting');
  setting.addEventListener('click',function(){
    let optionPage=window.open('option.html','_self');
  })
  })  
 //--------------------------------------
  


  //4- set default postion for bird move ,then move
  bird.style.position = "absolute";
  bird.style.left = '-200px' ;
  bird.style.top = '0px';
  let birdIntervalId=setInterval(moveBird, 50); // Move every 50ms


 //5-when bird die
 //-------------------------------
 bird.addEventListener('click',function(){
    birdClicked=true;
 })  
});
