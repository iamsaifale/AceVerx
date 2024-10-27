const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
});
function loader() {
    const loadingpage = document.querySelector(".loader");
    setTimeout(() => {
        loadingpage.style.top = "-100%";
    }, 6000); 
}
loader();


const h1 = document.querySelector("#hone");
const changetextloader = () => {
    h1.style.opacity = "0";

    setTimeout(() => {
        if (h1.textContent === "BRIDGE") {
            h1.textContent = "TRADITION.";
        } else if (h1.textContent === "TRADITION") {
            h1.textContent = "CULTURE";
        } else {
            h1.textContent = "BRIDGE";
        }
        h1.style.opacity = "1";
    }, 400);
}
setInterval(changetextloader, 1500);
const loaderremove = ()=>{
    const loadc = document.querySelector("#loader1")
    setTimeout(()=>{
      loadc.style.display = "none";
    } ,1500)
}
window.addEventListener('load', loaderremove);


const menuIcon = document.querySelector(".menu-icon"); // Select the menu icon
const menubox = document.querySelector(".menu-box"); // Select the menu box
const closebtn = document.querySelector(".close")
const openmenu = ()=>
{
if(menubox === "0")
{menubox.style.left = "-100px";}
else
{menubox.style.left = "0";}
}
menuIcon.addEventListener("click",(openmenu));
const closebar = ()=>
{
    if(menubox.style.left = "0")
    {menubox.style.left = "-250px";}
    else
    {menubox.style.left = "0";}
}
closebtn.addEventListener("click",(closebar));


const Swapbtn = document.querySelector(".arrow-icon");
const Select1 = document.querySelector("#select1")
const Select2 = document.querySelector("#select2")

const swaplanguages = ()=>{ 
    let temp = Select1.value;
    Select1.value = Select2.value;
    Select2.value = temp;
}
Swapbtn.addEventListener("click", ()=>{
    swaplanguages();
})

const Selectopt = document.querySelectorAll("select");
Selectopt.forEach((Element, id)=> {
    for(const contries in countryList)
        {
            let selected = "";
            if(id == 0 && contries == "en-GB"){
                selected = "selected";
            } else if(id == 1 && contries == "ur-PK"){
                selected = "selected"
            }
            let option =`<option value ="${contries}" ${selected}>${countryList[contries]}</option>`;
            Element.insertAdjacentHTML("beforeend", option);

        }
});

let trnasbtn = document.querySelector(".translate-btn");
let fromtext = document.querySelector(".from-text");
let totext = document.querySelector(".to-text");

trnasbtn.addEventListener("click", ()=>{
    let text = fromtext.value;
    trnasfrom = Selectopt[0].value,
    trnasto = Selectopt[1].value;
  let apiurl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${trnasfrom}|${trnasto}`; 
  fetch(apiurl).then(res =>res.json()).then(data =>{
        console.log(data);
        totext.value = data.responseData.translatedText;
  })

})

const speakBtn = document.querySelector(".option-2,.volume");
const speakText = () => {
    let text = totext.value;
    if (!text) {
        alert("Please translate text before using the speech feature.");
        return;
    }
    let utterance = new SpeechSynthesisUtterance(text);
    // lang for the utterance
    utterance.lang = Selectopt[1].value; // target lang for dropdown
    // text speak excution 
    speechSynthesis.speak(utterance);
};
speakBtn.addEventListener("click", speakText);


const micBtn = document.querySelector(".micro-ph"); 
const fromText = document.querySelector(".from-text"); 


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if ('SpeechRecognition' in window) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // Set the default language
    recognition.interimResults = true; // Get real-time results

    // Microphone button event to start/stop recognition
    micBtn.addEventListener("click", () => {
        recognition.start();
    });

    // Display speech recognition results in the text area
    recognition.addEventListener("result", (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        fromText.value = transcript; // Display the recognized text
    });

    // Handle speech recognition errors
    recognition.addEventListener("error", (event) => {
        alert("Speech recognition error: " + event.error);
    });

    // End recognition without stop() to prevent conflicts
    recognition.addEventListener("end", () => {
        console.log("Speech recognition ended.");
    });
} else {
    alert("Sorry, your browser does not support Speech Recognition.");
}


