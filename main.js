cat = 0;
dog = 0;
sheep = 0;

function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i_o_3P-gN/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("got results!");
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        document.getElementById("dog").innerHTML = "I have heard " + dog + " dogs!";
        document.getElementById("cat").innerHTML = "I have heard " + cat + " cats!";
        document.getElementById("sheep").innerHTML = "I have heard " + sheep + " sheep!";
        document.getElementById("now").innerHTML = "I am hearing " + results[0].label;
        document.getElementById("header1").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        document.getElementById("header2").style.color = "rgb(" + r + ", " + g + ", " + b + ")";

        if (results[0].label == "Dog") {
            dog = Number(dog) + 1;
            document.getElementById("nowImg").src = "dog.png";
        } else if (results[0].label == "Cat") {
            cat = Number(cat) + 1;
            document.getElementById("nowImg").src = "cat.png";
        } else if (results[0].label == "Sheep") {
            sheep = Number(sheep) + 1;
            document.getElementById("nowImg").src = "sheep.png";
        } else {
            document.getElementById("nowImg").src = "listen.png";
        }
    }
}