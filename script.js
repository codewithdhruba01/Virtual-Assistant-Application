let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="UK English Male"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}

//time zone
// window.addEventListener('load',()=>{
//     wishMe()
// })

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")||message.includes("hii")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant AstraZen,created by Dhrubaraj Pati")
    }
    else if(message.includes("how are you")){
        speak("I'm just a program, so I don't have feelings, but I'm here and ready to help! How about you? How are you doing today")
    }
    else if(message.includes("good")){
        speak("Glad to hear that! What's on your mind today")
    }
    else if(message.includes("i love you")){
        speak("Aww, that's so sweet of you to say I’m here to help, chat, and make your day better however I can. What’s on your mind")
    }
    else if(message.includes("Where are you from")){
        speak("i am virtual assistant AstraZen,created by Dhrubaraj Pati")
    }
    else if(message.includes("open youtube")){
        
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("Open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open google map")){
        speak("opening google map...")
        window.open("https://maps.google.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("AstraZen","") || message.replace("AstraZen","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("AstraZen","")}`,"_blank")
    }
}
// -----------dark and light mode--------------------------
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const currentTheme = body.classList.contains('light-theme') ? '🌞' : '🌙';
    themeToggle.textContent = currentTheme;
});

// ------------------Screenloader--------------
var loader = document.getElementById("preloder");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
