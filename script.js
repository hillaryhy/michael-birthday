const birthday = new Date("2026-11-25T23:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>HAPPY BIRTHDAY, MICHAEL! 💙🖤</h2>";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="time-box">
            <span>${days}</span>
            <small>DAYS</small>
        </div>

        <div class="time-box">
            <span>${hours}</span>
            <small>HOURS</small>
        </div>

        <div class="time-box">
            <span>${minutes}</span>
            <small>MINUTES</small>
        </div>

        <div class="time-box">
            <span>${seconds}</span>
            <small>SECONDS</small>
        </div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
function unlockBirthdayLetter() {
    const birthdayTime = new Date("2026-11-25T23:00:00Z").getTime();
    const now = new Date().getTime();

    const lock = document.getElementById("letter-lock");
    const letter = document.getElementById("birthday-letter-content");

    if (now >= birthdayTime) {
        lock.style.display = "none";
        letter.hidden = false;
    }
}
unlockBirthdayLetter();
setInterval(unlockBirthdayLetter, 1000);
const thingsAboutMichael = [
    "Your smile. It has a way of making ordinary moments better.",
    "Your personality, even when you're being a handful.",
    "The way you make me laugh.",
    "Your ability to be sweet and annoying at the same time.",
    "The little things you do without even thinking about them.",
    "Your presence in my life.",
    "The way you make our conversations interesting.",
    "Your confidence.",
    "Your sense of humour.",
    "The person you are becoming.",
    "Your determination to keep moving forward.",
    "The way you can make me smile.",
    "Your little habits, even the funny ones.",
    "The memories we have made together.",
    "Your affection.",
    "The way you are uniquely you.",
    "Your voice and the way you talk.",
    "The happiness in your laugh.",
    "Your ability to make me feel special.",
    "The fact that I get to call you my Fav.",
    "Simply because you're Michael, and there's only one you."
];

let currentThing = 0;

document.getElementById("next-thing").addEventListener("click", function () {
    if (currentThing < thingsAboutMichael.length) {
        document.getElementById("thing-number").textContent =
            String(currentThing + 1).padStart(2, "0") + " / 21";

        document.getElementById("thing-text").textContent =
            thingsAboutMichael[currentThing];

        currentThing++;

    if (currentThing === thingsAboutMichael.length) {
    this.textContent = "THAT'S ALL, MY FAV 💙";
    this.disabled = true;

    document.getElementById("birthday-surprise").hidden = false;
    launchConfetti();
}
    }
});
document.getElementById("wish-button").addEventListener("click", function () {
    const wish = document.getElementById("birthday-wish").value.trim();
    const response = document.getElementById("wish-response");

    if (wish === "") {
        response.textContent = "You have to write your wish first! 😂💙";
    } else {
        localStorage.setItem("michaelBirthdayWish", wish);
        response.textContent = "Your wish has been saved. May this new chapter bring you beautiful things! 💙🖤";
    }
});
function launchConfetti() {
    const container = document.getElementById("confetti-container");
    const colors = ["#70baff", "#2878d0", "#ffffff", "#a8d5ff"];

    for (let i = 0; i < 100; i++) {
        const piece = document.createElement("div");

        piece.classList.add("confetti");
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(piece);
    }
}