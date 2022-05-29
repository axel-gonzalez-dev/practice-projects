const theInput = document.getElementById("colorfav");

theInput.addEventListener("input", function(){
  const theColor = theInput.value;

  console.log(theColor);

  document.body.style.background = theColor;
  
  // Do something with `theColor` here.
}, false);