let shuffled = [];
let index = 0;

function shuffle(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(obj => obj.value);
}

function loadResponses() {
    const raw = document.getElementById("responses").value.trim();
    if (!raw) return [];

    const list = raw.split("\n").map(r => r.trim()).filter(r => r.length > 0);
    shuffled = shuffle(list);
    index = 0;
    return shuffled;
}

function advance() {
    index++;
    if (index >= shuffled.length) {
        shuffled = shuffle(shuffled);
        index = 0;
    }
}

document.getElementById("copyBtn").addEventListener("click", () => {
    let responses = shuffled.length ? shuffled : loadResponses();
    if (responses.length === 0) {
        document.getElementById("status").innerText = "Please enter responses first.";
        return;
    }

    const signature = document.getElementById("signature").value.trim();
    let reply = responses[index];

    if (signature) reply += " " + signature;

    navigator.clipboard.writeText(reply);

    document.getElementById("status").innerText = "Copied: " + reply;

    advance();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    let responses = shuffled.length ? shuffled : loadResponses();
    if (responses.length === 0) {
        document.getElementById("status").innerText = "Please enter responses first.";
        return;
    }

    const signature = document.getElementById("signature").value.trim();
    let reply = responses[index];

    let displayText = reply;
    if (signature) displayText += " " + signature;

    document.getElementById("status").innerText = "Next: " + displayText;

    advance();
});

// PRELOAD SIGNATURE + RESPONSES
window.onload = () => {
    document.getElementById("signature").value = "- Carter @Carter.BNW";

    document.getElementById("responses").value =
`Thank you so much for the support, I really appreciate it!
Thanks heaps, means a lot!
Really appreciate you taking the time to comment, thank you!
Thanks for the kind words, truly appreciate it!
Thank you! Your support never goes unnoticed.
Thanks for being here, appreciate the love!
Thank you! That genuinely means a lot to me.
Really appreciate the congratulations, thank you!
Thanks so much! I’m grateful for your support.
Thank you! I’m glad you’re here for the journey.
Thanks for the positivity, appreciate it!
Thank you! Your message made my day.
Thanks for the encouragement, really appreciate it!
Thank you! Always grateful for the support.
Thanks a lot! Means more than you know.
Thank you! I appreciate you taking the time to say that.
Thanks for the congrats! Really appreciate it.
Thank you! Your support keeps me going.
Thanks so much for the kind message!
Thank you! I truly appreciate your support and kindness.`;
};
