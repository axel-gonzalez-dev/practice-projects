const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientLabel = document.getElementById("linear-gradient-label");

color1.addEventListener("input", function () {
	const theColor = color1.value;
	const otherColor = color2.value;

	document.body.style.backgroundImage = `linear-gradient(to right, ${theColor}, ${otherColor})`;
	gradientLabel.innerHTML = `linear-gradient(to right, ${theColor}, ${otherColor})`;
}, false);

color2.addEventListener("input", function () {
	const theColor = color1.value;
	const otherColor = color2.value;

	document.body.style.backgroundImage = `linear-gradient(to right, ${theColor}, ${otherColor})`;
	gradientLabel.innerHTML = `linear-gradient(to right, ${theColor}, ${otherColor})`;
}, false);