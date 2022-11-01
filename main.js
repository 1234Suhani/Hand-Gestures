var link ="https://teachablemachine.withgoogle.com/models/d9frJDnKY/";
var P1 = "";
var P2 = "";
Webcam.set({
    width:350, height:300, image_format: 'png', png_quality: 100
});
var Camera = document.getElementById("camera");
Webcam.attach('#Camera');

  function Camera() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="+ data_uri +">'
    })
  }
  console.log('ml5.version', ml5.version);

  classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kJTBZXifa/model.json', modelLoaded);
  function modelLoaded(){
    console.log("Model Loaded!"); 
  }

  function Speak(){
   synth = window.speechSynthesis;
   Speak_data1= "The first prediction is " + P1;
   Speak_data2= "The second prediction is " + P2;
   utter = new SpeechSynthesisUtterance(Speak_data1 + Speak_data2); synth.speak(utter);
  }