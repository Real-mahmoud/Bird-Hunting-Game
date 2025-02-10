let bird = document.getElementById('bird');
let weaponRect;
let weaponX;
let weaponY;
let clickCounter=0;
let birdClicked=false;

// music 
const workMusic=function(){
    let gameMusic=this.document.createElement('audio');
    gameMusic.src="Audios/gameMusic.mp3";
    gameMusic.autoplay=true;
    gameMusic.loop=true;
    this.document.body.appendChild(gameMusic);
} 

//bird movement
const moveBird= function () {
    let currentX = parseInt(bird.style.left) ;
    let currentY = parseInt(bird.style.top) ;

    currentX += 20; // Moves the bird to the right

    if (currentX > window.innerWidth) { // Reset when it reaches screen width
        currentX = -200; // Reset position (off-screen to make it smooth)
        currentY = Math.random() * (window.innerHeight - 500); // Random Y position
    }

    bird.style.left = currentX + "px";
    bird.style.top = currentY + "px";
}

//bullet
const shootBullet=function (aimX,aimY){

  let bullet=document.createElement('img');
  bullet.src="images/bullet.png" ;
  bullet.classList.add("bullet");// make class for the bullet img to style
  document.body.appendChild(bullet);

  // set the first position for it
  bullet.style.position = "absolute";
  bullet.style.left=weaponX-50+'px'; // -50 and -400 i got them by try to make the bullet be close to the beginning of the weapon
  bullet.style.top=weaponY-400+ 'px';


  // for smooth movement
  setTimeout(() => {
    bullet.style.left = aimX + "px";
    bullet.style.top = aimY + "px";
  }, 10);

  // Remove the bullet after reaching target
  setTimeout(() => {
  bullet.remove();
  }, 500); // Adjust time based on speed

}
