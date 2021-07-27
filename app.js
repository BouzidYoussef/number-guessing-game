
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

//write user speech
    function writeMessage(reply){
        document.getElementsByClassName('box').innerHTML(`You said: ${reply}`)
        ;
    }

    //check if reply is a number
    function checkNumber(reply){
        const num =+reply
        if(Number.isNaN(num)){
        document.getElementsByClassName("box").innerHTML(`It's not a number`)
            return;
    }

    //check if the number is in range of 1 - 100
    if(num > 100 || num < 1){
        document.getElementsByClassName('box').innerHTML(`Number must be between 1 and 100`)
    }    

}



//Generate randomNumber
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
//Speak result
recognition.addEventListener('result', onSpeak())