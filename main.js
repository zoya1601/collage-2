var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var t=document.getElementById("textbox");

function save(){
    t.innerHTML="";
    recognition.start();
}