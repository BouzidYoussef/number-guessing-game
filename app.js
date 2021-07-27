const replyEl = document.getElementById('reply')

const randomNum = getRandomNumber()

console.log('Number', randomNum)

window.SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();
//Starts recognition 
recognition.start();

//Capture user speak
function onSpeak(e){
    const reply = e.results[0] [0].transcript;
    // writeMessage(reply);
    // checkNumber(reply);
}

//Generate randomNumber
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
//Speak result
recognition.addEventListener('result', onSpeak())