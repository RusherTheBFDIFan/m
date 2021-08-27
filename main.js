function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HN5az7Wee/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    function gotResults(error, results){
        if (error) {
            console.error(error);
        }
        else {
            console.log(results);
            rn_r = Math.floor(Math.random()*255)+1;
            rn_g = Math.floor(Math.random()*255)+1;
            rn_b = Math.floor(Math.random()*255)+1;
    
            document.getElementById("result_label").innerHTML = 'I can hear: '+results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy: '+(results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("+rn_r+","+rn_g+","+rn_b+")";
            document.getElementById("result_confidence").style.color = "rgb("+rn_r+","+rn_g+","+rn_b+")";
    
            img1 = document.getElementById("alien1");
    
            if (results[0].label=="Meowing") {
                img1.src = 'cat-33-110144.png';
            }
            else if (results[0].label=="Barking") {
                img1.src = 'doggy.png';
            }
            else if (results[0].label=="Howling") {
                img1.src = 'holwy.png';
            }
            else {
                img1.src = 'dd5ed82b-b105-4b93-806f-1f9e718b56ec.png';
            }
        }
    }
}