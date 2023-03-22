const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
  
function getHole(index) { 
  let holeClick = document.getElementById(`hole${index}`);
  return holeClick;
}  
   let hole = getHole(index);
  hole.onclick = function() {
    
    if (hole.className.includes("hole_has-mole") === true) {
      dead.innerHTML++;
    } else {
        lost.innerHTML++;
    }
  if (dead.textContent == 10) {
    alert("Вы выиграли!");
    dead.innerHTML = 0;
    lost.innerHTML = 0;
  }   else if (lost.textContent == 5) {
    alert("Вы проиграли!");
    dead.innerHTML = 0;
    lost.innerHTML = 0;
  }    
  }  
}      
