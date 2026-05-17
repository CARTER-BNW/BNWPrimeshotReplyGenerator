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
`Love how you are showing the artist some shine today 📸 Clean energy.
The creator is getting real love from you and it reads so well.
Nice little boost you gave the photographer 🔥 Smooth vibe.
That is a solid nod to the person in the spotlight and it feels natural and warm.
You dropped a clean line for the artist 🎞️ Simple and strong.
The creator is definitely catching good energy from you today.
That is a cool way to hype the talent 📷 Short and sweet.
You kept it real for the artist and that tone really works.
The one being highlighted is getting a soft genuine moment from you here ✨
Clean support for the creator nothing extra just right.
Love how you are backing the artist with that message 📸 Very natural.
The person you are uplifting is getting a calm kind of love from you and it shows.
That line gives the creator a really gentle lift 🌟 Feels good.
You gave the artist a nice quiet moment of support 🎞️ Subtle and warm.
The one you are supporting is getting a confident little boost from you 🔥 Strong.
Love how relaxed your support for the creator feels 📷 Very human.
The artist you are talking about is getting a thoughtful nod from you and it lands well.
That is an easy smooth way to show love to the creator ✨
You gave the artist a clean bit of hype and it works.
The person in the spotlight is getting a kind steady energy from you today.
Love how you speak about the creator like it is natural 📸 Not forced at all.
The artist you are lifting up is getting a real person vibe from your words and that matters.
That line gives the creator a nice calm spotlight 🎞️ Soft but clear.
You gave the artist a little spark and it feels genuine 🔥
The one you are supporting is getting a moment that feels honest.
Love how simple and direct your support for the creator is 📷 No fluff.
The artist you are talking about is getting a warm quiet kind of love from you.
That is a smooth way to lift the creator without overdoing it ✨
You gave the artist a cool relaxed shout and it fits.
The person you are uplifting is getting a friendly nudge from you and it feels right.
Love how you keep it light while still backing the creator 📸 Very clean.
The artist you are supporting is getting a grounded kind of support from you.
That line gives the creator a soft glow 🎞️ Nothing loud just real.
You gave the artist a confident little push 🔥 Feels natural.
The creator you are talking about is getting a human sounding compliment and it shows.
Love how you talk about the artist like you actually care 📷 Real energy.
The person you are uplifting is getting a gentle lift from your words ✨ Very smooth.
That is a nice easy way to show the creator some love.
The artist you are supporting is getting a calm steady shout from you today.
Love how your message for the creator feels unforced and real 📸
The person you are uplifting is getting a subtle but strong bit of support from you.
That line gives the artist a relaxed kind of hype 🎞️ Very natural.
You gave the creator a warm little moment 🔥 Feels honest.
The artist you are talking about is getting a kind thoughtful mention from you.
Love how you keep it short but still back the creator 📷 Clean.
The person you are uplifting is getting a soft spotlight from your words ✨
That is a chill way to show the creator some respect.
The artist you are supporting is getting a friendly easy vibe from you today.
Love how your support for the creator sounds like a real person 📸
The person you are uplifting is getting a quiet but meaningful boost from you.
That line gives the artist a smooth little highlight 🎞️ Very gentle.
You gave the creator a simple strong nod 🔥 No extra needed.
The artist you are supporting is getting a relaxed kind of love from you and it works.
Love how you keep the tone light while still backing the creator 📷
The person you are uplifting is getting a warm steady presence from your words ✨
That is a clean way to show the creator some appreciation.
The artist you are talking about is getting a soft honest shout from you today.
Love how your message for the creator feels easy and natural 📸
The person you are uplifting is getting a subtle glow from what you wrote.
That line gives the artist a calm confident moment 🎞️
You gave the creator a little fire without overdoing it 🔥
The artist you are supporting is getting a kind grounded compliment from you.
Love how you keep it simple and still lift the creator 📷
The person you are uplifting is getting a gentle wave of support from you ✨
That is a smooth relaxed way to hype the creator.
The artist you are supporting is getting a friendly real tone from your words today.
Love how your support for the creator feels like a real conversation 📸
The person you are uplifting is getting a quiet strong moment from you.
That line gives the artist a soft but clear highlight 🎞️
You gave the creator a confident little shout 🔥 Very natural.
The artist you are talking about is getting a warm human sounding message from you.
Love how you keep the focus on the creator without overdoing it 📷
The person you are uplifting is getting a calm steady kind of love from you ✨
That is a nice easy way to back the creator.
The artist you are supporting is getting a relaxed supportive tone from you today.
Love how your words for the creator feel honest and light 📸
The person you are uplifting is getting a subtle but real bit of hype from you.
That line gives the artist a gentle spotlight 🎞️ Very smooth.
You gave the creator a little spark of energy 🔥 Feels right.
The artist you are talking about is getting a kind thoughtful vibe from your message.
Love how you keep it short and still show up for the creator 📷
The person you are uplifting is getting a soft steady lift from you ✨
That is a chill natural way to show love to the creator.
The artist you are supporting is getting a friendly grounded shout from you today.
Love how your support for the creator sounds relaxed and real 📸
The person you are uplifting is getting a quiet strong kind of support from you.
That line gives the artist a smooth easy highlight 🎞️
You gave the creator a warm little push 🔥 Very human.
The artist you are talking about is getting a calm honest compliment from you.
Love how you keep the energy clean while backing the creator 📷
The person you are uplifting is getting a gentle wave of love from your words ✨
That is a simple strong way to lift the creator.
The artist you are supporting is getting a relaxed real tone from you today.
Love how your message for the creator feels natural and unforced 📸
The person you are uplifting is getting a subtle confident glow from you.
That line gives the artist a soft but solid moment 🎞️
You gave the creator a little burst of hype 🔥 Still smooth.
The artist you are talking about is getting a kind grounded presence from your words.
Love how you keep it minimal and still support the creator 📷
The person you are uplifting is getting a calm steady highlight from you ✨
That is a chill easy way to show the creator some shine.
The artist you are supporting is getting a friendly human sounding shout from you today.
Love how your support for the creator feels like something you would actually say 📸
The person you are uplifting is getting a quiet but powerful lift from your message.
That line gives the artist a smooth relaxed spotlight 🎞️
You gave the creator a warm confident nod 🔥 Very clean.
The artist you are talking about is getting a soft honest kind of love from you.
The person you are uplifting is getting a calm steady lift from your words today.
Love how your message for the creator feels relaxed and real 📸
The artist you are supporting is getting a soft confident moment from you.
That line gives the creator a warm gentle highlight 🎞️
You gave the artist a little spark of hype 🔥 Smooth delivery.
The person you are uplifting is getting a grounded kind of love from you.
Love how you keep it clean while backing the creator 📷
The artist you are supporting is getting a subtle wave of support from you ✨
That is a natural easy way to show love to the creator.
The person you are uplifting is getting a friendly warm tone from you today.
Love how your support for the creator feels like a real voice 📸
The artist you are supporting is getting a quiet strong lift from your message.
That line gives the creator a soft relaxed spotlight 🎞️
You gave the artist a confident little push 🔥 Feels right.
The person you are uplifting is getting a kind honest moment from you.
Love how you keep it simple and still show up for the creator 📷
The artist you are supporting is getting a calm steady glow from your words ✨
That is a smooth way to highlight the creator without forcing it.
The person you are uplifting is getting a friendly grounded vibe from you today.
Love how your message for the creator feels natural and easy 📸
The artist you are supporting is getting a subtle confident lift from you.
That line gives the creator a warm gentle moment 🎞️
You gave the artist a little fire in a clean way 🔥
The person you are uplifting is getting a thoughtful honest shout from you.
The artist you are supporting is getting a soft steady presence from your words ✨
That is a relaxed way to show the creator some shine.
The person you are uplifting is getting a friendly human sounding boost from you today.
Love how your support for the creator feels unforced 📸
The artist you are supporting is getting a quiet but meaningful moment from you.
That line gives the creator a smooth confident highlight 🎞️
You gave the artist a warm little burst of hype 🔥
The person you are uplifting is getting a calm grounded compliment from you.
Love how you keep it minimal and still lift the creator 📷
The artist you are supporting is getting a gentle steady glow from your message ✨
That is a chill natural way to hype the creator.
The person you are uplifting is getting a friendly easy tone from you today.
Love how your message for the creator feels like something you would actually say 📸
The artist you are supporting is getting a subtle warm lift from you.
That line gives the creator a soft relaxed moment 🎞️
You gave the artist a confident clean shout 🔥
The person you are uplifting is getting a kind thoughtful presence from your words.
Love how you keep it short and still support the creator 📷
The artist you are supporting is getting a soft steady lift from you ✨
The creator you are uplifting is getting a friendly grounded shout from you today.
Love how your support for the artist sounds relaxed and real 📸
The person you are talking about is getting a quiet strong kind of support from you.
That line gives the creator a smooth easy highlight 🎞️
You gave the artist a warm little push 🔥 Very human.
The person you are uplifting is getting a calm honest compliment from you.
The artist you are supporting is getting a gentle wave of love from your words ✨
The person you are uplifting is getting a relaxed real tone from you today.
Love how your message for the artist feels natural and unforced 📸
The creator you are supporting is getting a subtle confident glow from you.
The person you are uplifting is getting a kind grounded presence from your words.
Love how you keep it minimal and still support the artist 📷
The creator you are supporting is getting a calm steady highlight from you ✨
That is a chill easy way to show the artist some shine.
The person you are uplifting is getting a friendly human sounding shout from you today.
Love how your support for the artist feels like something you would actually say 📸
The creator you are supporting is getting a quiet but powerful lift from your message.
The person you are uplifting is getting a soft honest kind of love from you.
The artist you are supporting is getting a calm steady lift from your words today.
The person you are uplifting is getting a soft confident moment from you.
That line gives the artist a warm gentle highlight 🎞️
You gave the creator a little spark of hype 🔥 Smooth delivery.
The artist you are supporting is getting a grounded kind of love from you.
The person you are uplifting is getting a subtle wave of support from you ✨
The artist you are supporting is getting a friendly warm tone from you today.
The person you are uplifting is getting a quiet strong lift from your message.
That line gives the artist a soft relaxed spotlight 🎞️
You gave the creator a confident little push 🔥 Feels right.
The artist you are supporting is getting a kind honest moment from you.
The person you are uplifting is getting a calm steady glow from your words ✨
The artist you are supporting is getting a friendly grounded vibe from you today.
The person you are uplifting is getting a subtle confident lift from you.
That line gives the artist a warm gentle moment 🎞️
You gave the creator a little fire in a clean way 🔥
The artist you are supporting is getting a thoughtful honest shout from you.
The person you are uplifting is getting a soft steady presence from your words ✨
The artist you are supporting is getting a friendly human sounding boost from you today.
The person you are uplifting is getting a quiet but meaningful moment from you.
That line gives the artist a smooth confident highlight 🎞️
You gave the creator a warm little burst of hype 🔥
The artist you are supporting is getting a calm grounded compliment from you.
The person you are uplifting is getting a gentle steady glow from your message ✨
The artist you are supporting is getting a friendly easy tone from you today.
The person you are uplifting is getting a subtle warm lift from you.
That line gives the artist a soft relaxed moment 🎞️
You gave the creator a confident clean shout 🔥
The artist you are supporting is getting a kind thoughtful presence from your words.
The creator you are supporting is getting a friendly grounded shout from you today.
Love how your support for the artist sounds relaxed and genuine 📸
You gave the artist a warm little push 🔥 Very natural.
The person you are talking about is getting a calm honest compliment from you.
The artist you are uplifting is getting a gentle wave of love from your words ✨
That is a simple natural way to lift the creator.
The person you are supporting is getting a relaxed grounded tone from you today.
The creator you are uplifting is getting a subtle confident glow from you.
That line gives the artist a soft steady moment 🎞️
The person you are supporting is getting a kind grounded presence from your words.
The creator you are uplifting is getting a calm steady highlight from you ✨
The person you are supporting is getting a friendly human sounding shout from you today.
Love how your support for the creator feels like something you would naturally say 📸
The artist you are uplifting is getting a quiet but powerful lift from your message.
That line gives the creator a smooth relaxed spotlight 🎞️
You gave the artist a warm confident nod 🔥 Very clean.
The person you are supporting is getting a soft honest kind of love from you.
The creator you are uplifting is getting a calm steady lift from your words today.
Love how your message for the artist feels relaxed and real 📸
The person you are supporting is getting a soft confident moment from you.
Love how your support for the artist feels like a real voice 📸
The creator you are supporting is getting a quiet strong lift from your message.
Love how your message for the artist feels natural and easy 📸
The creator you are supporting is getting a subtle confident lift from you.
Love how your support for the artist feels unforced 📸
The creator you are supporting is getting a quiet but meaningful moment from you.
Love how your message for the artist feels like something you would actually say 📸
The creator you are supporting is getting a subtle warm lift from you.


`;

    loadResponses();
    showReply();
};
