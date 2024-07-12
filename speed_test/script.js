const typing_ground = document.getElementById("textarea");
const btn = document.getElementById("btn");
const score = document.getElementById("score");
const show_sentence = document.getElementById("showSentence");

let starttime, endtime, totaltime;

const sentences = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The future belongs to those who believe in the beauty of their dreams."
];

const calculateSpeed = (time_taken) => {
    let totalText = typing_ground.value.trim();
    let wordCount = totalText ? totalText.split(" ").length : 0;
    if (wordCount > 0) {
        let typing_speed = (wordCount / time_taken) * 60;
        score.innerHTML = `Your typing speed is ${typing_speed.toFixed(2)} WPM. You wrote ${wordCount} words and took ${time_taken.toFixed(2)} seconds.`;
    } else {
        score.innerHTML = "Please type something to calculate speed.";
    }
};

const endTyping = () => {
    btn.innerText = "Start";
    let date = new Date();
    endtime = date.getTime();
    totaltime = (endtime - starttime) / 1000;
    calculateSpeed(totaltime);
    show_sentence.innerHTML = "";
    typing_ground.value = "";
    typing_ground.setAttribute("disabled", "true");
};

const startTyping = () => {
    let random_no = Math.floor(Math.random() * sentences.length);
    show_sentence.innerHTML = sentences[random_no];
    let date = new Date();
    starttime = date.getTime();
    btn.innerText = "Done";
    typing_ground.removeAttribute("disabled");
    typing_ground.focus();
};

btn.addEventListener("click", () => {
    if (btn.innerText.toLowerCase() === "start") {
        startTyping();
    } else if (btn.innerText.toLowerCase() === "done") {
        endTyping();
    }
});
