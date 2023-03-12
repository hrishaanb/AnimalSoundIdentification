function startClassification () {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/B0n-P3wBr/model.json", modelReady);
}
function modelReady () {
    console.log("model loaded");
    classifier.classify(gotResults);
}
function gotResults (error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_label").innerHTML = "Detected voice is of - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
        if (results[0].label == "Barking") {
            document.getElementById("gifBgNoise").style.display = 'none';
            document.getElementById("gifBark").style.display = 'block';
            document.getElementById("gifMeow").style.display = 'none';
            document.getElementById("gifMoo").style.display = 'none';
            document.getElementById("gifRoar").style.display = 'none';
        }
        else if (results[0].label == "Meowing") {
            document.getElementById("gifBgNoise").style.display = 'none';
            document.getElementById("gifBark").style.display = 'none';
            document.getElementById("gifMeow").style.display = 'block';
            document.getElementById("gifMoo").style.display = 'none';
            document.getElementById("gifRoar").style.display = 'none';
        }
        else if (results[0].label == "Mooing") {
            document.getElementById("gifBgNoise").style.display = 'none';
            document.getElementById("gifBark").style.display = 'none';
            document.getElementById("gifMeow").style.display = 'none';
            document.getElementById("gifMoo").style.display = 'block';
            document.getElementById("gifRoar").style.display = 'none';
        }
        else if (results[0].label == "Roaring") {
            document.getElementById("gifBgNoise").style.display = 'none';
            document.getElementById("gifBark").style.display = 'none';
            document.getElementById("gifMeow").style.display = 'none';
            document.getElementById("gifMoo").style.display = 'none';
            document.getElementById("gifRoar").style.display = 'block';
        }
        else {
            document.getElementById("gifBgNoise").style.display = 'block';
            document.getElementById("gifBark").style.display = 'none';
            document.getElementById("gifMeow").style.display = 'none';
            document.getElementById("gifMoo").style.display = 'none';
            document.getElementById("gifRoar").style.display = 'none';
        }
    }
}