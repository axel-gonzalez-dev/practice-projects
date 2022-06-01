import html2canvas from "./dist/html2canvas";

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientLabel = document.getElementById("linear-gradient-label");
const container = document.getElementsByClassName("container");

color1.addEventListener("input", function () {
	const theColor = color1.value;
	const otherColor = color2.value;

	document.body.style.backgroundImage = `linear-gradient(to right, ${theColor}, ${otherColor})`;
	gradientLabel.innerHTML = `background-image: linear-gradient(to right, ${theColor}, ${otherColor})`;
}, false);

color2.addEventListener("input", function () {
	const theColor = color1.value;
	const otherColor = color2.value;

	document.body.style.backgroundImage = `linear-gradient(to right, ${theColor}, ${otherColor})`;
	gradientLabel.innerHTML = `background-image: linear-gradient(to right, ${theColor}, ${otherColor})`;
}, false);

const downloadURI = (uri, name) => {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}

const printDiv = (div) => {
	console.log("sirve");
    html2canvas((container), {
        onrendered: function(canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "MaSimulation.png");
      }
    });
};

const testeo = () => {
	console.log("Sirve");
};

document.getElementById("test-button").addEventListener("click", testeo ,false)