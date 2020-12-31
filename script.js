// Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = hours + " : "
  + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// let-s try

function changeImage(){
  var img = document.getElementById('banner-offer-img');
  img.src = "images/the-witcher-3-banner.jpg";
  return false;
}

function changeImage2(){
  var img = document.getElementById('banner-offer-img');
  img.src = "images/Cyberpunk-2077-banner.png";
  return false;
}