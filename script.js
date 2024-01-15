let input = document.querySelector("input");

let mge = document.querySelector(".mge");


let guesBtn = document.querySelector(".guesBtn");

let resetBtn = document.querySelector(".resetBtn");

let ptag1 = document.querySelector(".ptag1");

let ptag2 = document.querySelector(".ptag2");

let numberOfWin = 0;

let numberOflost = 0;

confirm("❝...ARE YOU READY...❞ ")

guesBtn.onclick = () => {
    
    let guessingNum = Math.floor(input.value);

    let randomNum = Math.floor(Math.random() * 5) + 1;
    
    if (guessingNum > 5 || guessingNum == 0) {
      alert("⚠️Please Type A Numder 1 To 5.");
    } else {
    
     if (guessingNum == randomNum) {
      setTimeout(function () {
        mge.style.backgroundColor = "#00AF11";
        mge.style.padding = "10px";
        mge.style.borderRadius = "50px";
        mge.innerHTML= "You have win 😀..";
      });
      setInterval(function () {
        mge.style.display = "none";
      }, 50000);
      numberOfWin++;
    } else {
      setTimeout(function() {
        mge.style.backgroundColor = "#E70000";
        mge.style.padding = "10px";
        mge.style.borderRadius = "50px";
        mge.innerHTML = "You have lost😑..";
      });
      setInterval(function() {
        mge.style.display = "none";
      }, 50000);
      numberOflost++;
    }
   
   }
  ptag1.innerHTML = "❝Total Numder Of win❞ : " + numberOfWin;

  ptag2.innerHTML = "❝Total Numder Of lost❞ : " + numberOflost;

}

resetBtn.onclick = () => {
  window.location.reload();
}