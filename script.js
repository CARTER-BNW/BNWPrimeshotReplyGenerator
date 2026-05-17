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

function getCurrentReply() {
    const signature = document.getElementById("signature").value.trim();
    let reply = shuffled[index];
    if (signature) reply += " " + signature;
    return reply;
}

function advance() {
    index++;
    if (index >= shuffled.length) {
        shuffled = shuffle(shuffled);
        index = 0;
    }
}

function showReply(prefix = "") {
    const reply = getCurrentReply();
    const status = document.getElementById("status");

    status.style.opacity = 0;
    setTimeout(() => {
        status.innerText = prefix + reply;
        status.style.opacity = 1;
    }, 150);
}

document.getElementById("copyBtn").addEventListener("click", () => {
    let responses = shuffled.length ? shuffled : loadResponses();
    if (responses.length === 0) {
        document.getElementById("status").innerText = "Please enter responses first.";
        return;
    }

    const reply = getCurrentReply();
    navigator.clipboard.writeText(reply);

    showReply("Copied: ");

    advance();
    setTimeout(showReply, 300);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    let responses = shuffled.length ? shuffled : loadResponses();
    if (responses.length === 0) {
        document.getElementById("status").innerText = "Please enter responses first.";
        return;
    }

    advance();
    showReply("Next: ");
});

// PRELOAD SIGNATURE + RESPONSES + SHOW FIRST REPLY
window.onload = () => {
    document.getElementById("signature").value = "🖤🤍 Carter @Carter.BNW";

    document.getElementById("responses").value =
`Really cool seeing you congratulate the featured artist 📸 Hope your day’s going well.
Love the support you’re giving the featured artist 🎨 Enjoy the rest of your evening.
Great message for the featured artist 📷 Hope your night’s a chill one.
The featured artist will love that ✨ Have a good rest of your day.
Nice words for the featured artist 🎞️ Hope your weekend’s a good one.
Always good seeing people uplift the featured artist 🌟 Enjoy your night.
The featured artist is getting some beautiful support 📸 Hope your morning’s smooth.
Love the energy you’re sending the featured artist 🔥 Have a great evening.
The featured artist is getting so much love 🎨 Hope your day flows well.
Really kind message about the featured artist 💫 Enjoy your afternoon.
Cool to see you cheering on the featured artist 📷 Hope your night feels easy.
The featured artist is going to smile at that 📸 Have a good one.
Great to see you supporting the featured artist 🎞️ Hope your day’s been solid.
The featured artist deserves that hype 🌟 Enjoy the rest of your day.
Your message lifts the featured artist up 📸 Hope your evening’s relaxing.
The featured artist is getting the spotlight today ✨ Have a calm night.
Love seeing you celebrate the featured artist 📷 Enjoy your weekend.
Your words hit nicely for the featured artist 💫 Hope your night winds down well.
The featured artist is lucky to have support like that 📸 Have a great day.
Really wholesome message about the featured artist 🌈 Hope your evening goes smoothly.
The featured artist will appreciate that love 🎨 Enjoy your night.
Good vibes toward the featured artist 📷 Hope your day’s treating you well.
The featured artist is getting some well deserved shine ✨ Have a good evening.
Your message adds to the moment for the featured artist 📸 Hope your night’s a good one.
Always nice seeing people uplift the featured artist 🎞️ Enjoy your day.
The featured artist is getting some beautiful support 🌟 Hope your morning’s easy.
Love the positivity you’re sending the featured artist 📷 Have a great rest of your day.
The featured artist is definitely feeling the love 🔥 Hope your evening’s calm.
Your words land perfectly for the featured artist 🎨 Enjoy your night.
The featured artist is getting a lot of warmth today 📸 Hope your day’s smooth.
Really sweet message toward the featured artist 💫 Have a good afternoon.
The featured artist will feel that one 📷 Hope your night’s relaxing.
Great energy toward the featured artist 🎞️ Enjoy the rest of your day.
The featured artist is shining today 🌟 Hope your evening’s a good one.
Your message adds to the celebration for the featured artist 📸 Have a great night.
The featured artist is getting some amazing support 🎨 Hope your day keeps going well.
Love seeing people hype the featured artist 🔥 Enjoy your evening.
The featured artist is definitely appreciated today 📷 Hope your night ends well.
Really cool message about the featured artist 📸 Hope your day’s been kind.
The featured artist is getting some real spotlight today ✨ Enjoy your afternoon.
Love the warmth you’re sending the featured artist 🎞️ Hope your evening’s smooth.
The featured artist will feel that support 📷 Have a good night.
Beautiful message for the featured artist 🌟 Hope your day flows well.
The featured artist is getting some strong love today 📸 Enjoy your morning.
Love seeing you hype up the featured artist 🔥 Hope your night’s a calm one.
The featured artist will appreciate that energy 🎨 Have a great rest of your day.
Really kind words for the featured artist 📷 Hope your evening feels easy.
The featured artist is getting some great support 💫 Enjoy your night.
Love the vibe you’re giving the featured artist 📸 Hope your day’s smooth.
The featured artist is definitely feeling the positivity 🌟 Have a good afternoon.
Really uplifting message for the featured artist 🎞️ Hope your night’s relaxing.
The featured artist will love that energy 📷 Enjoy your evening.
Great to see you celebrating the featured artist 📸 Hope your day’s been good.
The featured artist is getting some well earned shine ✨ Have a great night.
Love the encouragement you’re giving the featured artist 🎨 Hope your morning’s easy.
The featured artist is surrounded by good vibes today 📷 Enjoy your day.
Really sweet support for the featured artist 🌈 Hope your evening’s calm.
The featured artist will feel that positivity 📸 Have a good night.
Love seeing you lift up the featured artist 🎞️ Hope your day flows well.
The featured artist is getting some amazing love today 🌟 Enjoy your afternoon.
Really cool energy toward the featured artist 📷 Hope your night’s a good one.
The featured artist will appreciate that message 📸 Have a great evening.
Love the hype you’re giving the featured artist 🔥 Hope your day’s smooth.
The featured artist is getting some beautiful attention 🎨 Enjoy your night.
Really wholesome support for the featured artist 💫 Hope your morning’s a good one.
The featured artist is definitely feeling the warmth 📷 Have a great rest of your day.
Love seeing you celebrate the featured artist 🎞️ Hope your evening’s relaxing.
The featured artist is getting some strong spotlight today 🌟 Enjoy your night.
Really kind message toward the featured artist 📸 Hope your day’s been easy.
The featured artist will love that positivity ✨ Have a good afternoon.
Love the vibe you’re sending the featured artist 📷 Hope your night winds down well.
The featured artist is getting some great energy today 🎨 Enjoy your evening.
Really sweet message for the featured artist 💫 Hope your day flows well.
The featured artist will appreciate that support 📸 Have a calm night.
Love seeing people uplift the featured artist 🎞️ Hope your morning’s smooth.
The featured artist is getting some well deserved love 🌟 Enjoy your day.
Really cool support for the featured artist 📷 Hope your evening’s easy.
The featured artist will feel that warmth 📸 Have a great night.
Love the positivity you’re giving the featured artist 🔥 Hope your day’s been kind.
The featured artist is shining with all this support ✨ Enjoy your afternoon.
Really wholesome message about the featured artist 🎨 Hope your night’s relaxing.
The featured artist will appreciate that energy 📷 Have a good evening.
Love seeing you hype the featured artist 📸 Hope your day flows well.
The featured artist is getting some amazing spotlight 🌟 Enjoy your night.
Really sweet support toward the featured artist 💫 Hope your morning’s easy.
The featured artist will feel that love 🎞️ Have a great rest of your day.
Love the vibe you’re giving the featured artist 📷 Hope your evening’s calm.
The featured artist is definitely feeling the positivity 🔥 Enjoy your night.
Really kind message for the featured artist 📸 Hope your day’s smooth.
The featured artist will appreciate that warmth ✨ Have a good afternoon.
Love seeing you celebrate the featured artist 🎨 Hope your night winds down well.
The featured artist is getting some beautiful energy 📷 Enjoy your evening.
Really uplifting message toward the featured artist 🌟 Hope your day flows well.
The featured artist will feel that support 📸 Have a calm night.
Love the encouragement you’re giving the featured artist 🎞️ Hope your morning’s smooth.
The featured artist is getting some strong love today 🔥 Enjoy your day.
Really sweet message about the featured artist 📷 Hope your evening’s easy.
The featured artist will appreciate that positivity 💫 Have a great night.
Love seeing people hype up the featured artist 📸 Hope your day’s been kind.
The featured artist is getting some real love today 📸 Hope your evening feels good.
Really cool seeing you hype the featured artist 🎞️ Hope your day’s been smooth.
The featured artist will feel that energy 🔥 Enjoy your night.
Love the way you’re celebrating the featured artist 📷 Hope your morning’s easy.
The featured artist is shining with support today ✨ Have a great rest of your day.
Your message brings a nice boost to the featured artist 🌟 Hope your evening’s calm.
The featured artist is getting some warm energy 📸 Enjoy your afternoon.
Love the vibe you’re sending toward the featured artist 🎨 Hope your night’s relaxing.
The featured artist is surrounded by good support today 💫 Have a good evening.
Really sweet message for the featured artist 📷 Hope your day flows well.
The featured artist will appreciate that moment 🌈 Enjoy your night.
Love seeing you show love to the featured artist 📸 Hope your morning’s smooth.
The featured artist is getting some well earned attention 🎞️ Have a great day.
Your message adds a nice touch for the featured artist 🌟 Hope your evening’s easy.
The featured artist is definitely feeling the support 📷 Enjoy your night.
Really wholesome energy toward the featured artist ✨ Hope your day’s been kind.
The featured artist is getting some bright spotlight today 📸 Have a good afternoon.
Love the positivity you’re giving the featured artist 🎨 Hope your night winds down well.
The featured artist will feel that kindness 💫 Enjoy your evening.
Really cool support for the featured artist 📷 Hope your day’s smooth.
The featured artist is getting some uplifting energy 🌟 Have a calm night.
Love seeing you celebrate the featured artist 📸 Hope your morning’s easy.
The featured artist is surrounded by great vibes today 🎞️ Enjoy your day.
Your message adds some brightness for the featured artist ✨ Hope your evening’s relaxing.
The featured artist will appreciate that warmth 📷 Have a great night.
Really sweet energy toward the featured artist 🌈 Hope your day flows well.
The featured artist is getting some amazing love today 📸 Enjoy your afternoon.
Love the encouragement you’re giving the featured artist 🎨 Hope your night’s a good one.
The featured artist is definitely feeling the positivity 💫 Have a good evening.
Really kind message about the featured artist 📷 Hope your day’s been easy.
The featured artist will feel that support 🌟 Enjoy your night.
Love seeing you hype up the featured artist 📸 Hope your morning’s smooth.
The featured artist is getting some beautiful attention 🎞️ Have a great rest of your day.
Your message brings a nice lift to the featured artist ✨ Hope your evening’s calm.
The featured artist is surrounded by strong support 📷 Enjoy your night.
Really wholesome message toward the featured artist 🌈 Hope your day flows well.
The featured artist is shining with all this love 📸 Have a good afternoon.
Love the vibe you’re giving the featured artist 🎨 Hope your night’s relaxing.
The featured artist will appreciate that energy 💫 Enjoy your evening.
Really cool message for the featured artist 📷 Hope your day’s smooth.
The featured artist is getting some warm spotlight today 🌟 Have a calm night.
The featured artist is surrounded by uplifting vibes 🎞️ Enjoy your day.
Your message adds a great moment for the featured artist ✨ Hope your evening’s relaxing.
The featured artist will feel that positivity 📷 Have a great night.
Really sweet support toward the featured artist 🌈 Hope your day flows well.
The featured artist is getting some amazing energy today 📸 Enjoy your afternoon.
Love the encouragement you’re sending the featured artist 🎨 Hope your night’s a good one.
The featured artist is definitely feeling the warmth 💫 Have a good evening.
Really kind message for the featured artist 📷 Hope your day’s been easy.
The featured artist will feel that love 🌟 Enjoy your night.
Love seeing you hype the featured artist 📸 Hope your morning’s smooth.
The featured artist is getting some beautiful support 🎞️ Have a great rest of your day.
Your message brings a nice spark to the featured artist ✨ Hope your evening’s calm.
The featured artist is surrounded by strong positivity 📷 Enjoy your night.
Really wholesome energy toward the featured artist 🌈 Hope your day flows well.
The featured artist is shining with all this support 📸 Have a good afternoon.
The featured artist will appreciate that kindness 💫 Enjoy your evening.
Really cool message about the featured artist 📷 Hope your day’s smooth.
The featured artist is getting some warm attention today 🌟 Have a calm night.
The featured artist is surrounded by uplifting energy 🎞️ Enjoy your day.
The featured artist is getting some amazing shine today 📸 Hope your evening feels easy.
Love the way you’re lifting up the featured artist 🎞️ Hope your day’s been smooth.
The featured artist will feel that good energy 🔥 Enjoy your night.
Really cool support toward the featured artist 📷 Hope your morning’s been kind.
The featured artist is surrounded by great vibes today ✨ Have a good rest of your day.
Your message adds a warm moment for the featured artist 🌟 Hope your evening’s calm.
The featured artist is getting some bright attention 📸 Enjoy your afternoon.
Love the positivity you’re sending toward the featured artist 🎨 Hope your night’s relaxing.
The featured artist is definitely feeling the support 💫 Have a good evening.
The featured artist will appreciate that kindness 🌈 Enjoy your night.
The featured artist is getting some well earned spotlight 🎞️ Have a great day.
Your message brings a nice lift to the featured artist 🌟 Hope your evening’s easy.
The featured artist is surrounded by warm energy 📷 Enjoy your night.
Really wholesome support for the featured artist ✨ Hope your day’s been kind.
Love the vibe you’re giving the featured artist 🎨 Hope your night winds down well.
The featured artist will feel that positivity 💫 Enjoy your evening.
The featured artist is getting some uplifting attention 🌟 Have a calm night.
The featured artist will feel that warmth 📷 Have a great night.
The featured artist is getting some bright love today 📸 Hope your evening feels good.
Love the way you’re lifting the featured artist up 🎞️ Hope your day’s been smooth.
The featured artist will feel that spark 🔥 Enjoy your night.
Really cool energy toward the featured artist 📷 Hope your morning’s been easy.
The featured artist is surrounded by great support ✨ Have a good rest of your day.
The featured artist is getting some beautiful attention 📸 Enjoy your afternoon.
The featured artist is getting some bright love today 📸 Hope your evening feels easy.
Love the way you’re lifting the featured artist up 🎞️ Hope your day’s been kind.
Really cool energy toward the featured artist 📷 Hope your morning’s smooth.
Love seeing you hype the featured artist 📸 Hope your morning’s easy.
Really wholesome support for the featured artist ✨ Hope your day’s been smooth.
Really cool message about the featured artist 📷 Hope your day’s been easy.
Love seeing you celebrate the featured artist 📸 Hope your morning’s smooth.

`;

    loadResponses();
    showReply();
};
