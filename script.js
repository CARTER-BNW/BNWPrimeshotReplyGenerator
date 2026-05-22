let shuffled = [];
let index = 0;

// SHUFFLE ARRAY
function shuffle(array) {
    return [...array]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(obj => obj.value);
}

// LOAD RESPONSES FROM TEXTAREA
function loadResponses() {
    const raw = document.getElementById("responses").value.trim();

    if (!raw) {
        shuffled = [];
        index = 0;
        return;
    }

    const list = raw
        .split("\n")
        .map(r => r.trim())
        .filter(r => r.length > 0);

    shuffled = shuffle(list);
    index = 0;
}

// GET CURRENT REPLY
function getCurrentReply() {
    if (shuffled.length === 0) return "";

    const signature = document.getElementById("signature").value.trim();

    let reply = shuffled[index];

    if (signature) {
        reply += " " + signature;
    }

    return reply;
}

// MOVE TO NEXT RESPONSE
function advance() {
    if (shuffled.length === 0) return;

    index++;

    // RESHUFFLE WHEN FINISHED
    if (index >= shuffled.length) {
        shuffled = shuffle(shuffled);
        index = 0;
    }
}

// SHOW CURRENT REPLY
function showReply(prefix = "") {
    const status = document.getElementById("status");

    if (shuffled.length === 0) {
        status.innerText = "Please enter responses first.";
        return;
    }

    const reply = getCurrentReply();

    status.style.opacity = 0;

    setTimeout(() => {
        status.innerText = prefix + reply;
        status.style.opacity = 1;
    }, 150);
}

// COPY BUTTON
document.getElementById("copyBtn").addEventListener("click", async () => {

    if (shuffled.length === 0) {
        loadResponses();
    }

    if (shuffled.length === 0) {
        document.getElementById("status").innerText = "Please enter responses first.";
        return;
    }

    const reply = getCurrentReply();

    try {
        await navigator.clipboard.writeText(reply);

        showReply("Copied: ");

        advance();

        setTimeout(() => {
            showReply();
        }, 300);

    } catch (err) {
        document.getElementById("status").innerText = "Clipboard failed.";
    }
});

// NEXT BUTTON
document.getElementById("nextBtn").addEventListener("click", () => {

    if (shuffled.length === 0) {
        loadResponses();
    }

    if (shuffled.length === 0) {
        document.getElementById("status").innerText = "Please enter responses first.";
        return;
    }

    advance();

    showReply("Next: ");
});

// AUTO RELOAD WHEN RESPONSES CHANGE
document.getElementById("responses").addEventListener("input", () => {
    loadResponses();

    if (shuffled.length > 0) {
        showReply();
    } else {
        document.getElementById("status").innerText = "";
    }
});

// AUTO UPDATE SIGNATURE
document.getElementById("signature").addEventListener("input", () => {
    if (shuffled.length > 0) {
        showReply();
    }
});

// PRELOAD DEFAULT DATA
window.onload = () => {

    document.getElementById("signature").value =
        "🖤🤍 Carter @Carter.BNW";

    document.getElementById("responses").value =
`Thanks for the support
Cheers for dropping by
Appreciate it mate
Thanks for the kind words
Really appreciate it
Thanks heaps
Glad you stopped by
Appreciate you taking the time
Cheers mate
Means a lot
Love the support
Thanks legend
Big thanks
Appreciate the positivity
Thanks for backing the artist
Respect
Cheers for showing love
Thanks for being here
Appreciate it heaps
Good vibes mate
Thanks for supporting creatives
Much appreciated
Cheers for that
Love seeing support like this
Thanks for stopping in
Really kind of you
Appreciate the good energy
Thanks mate means a lot
Cheers for supporting the arts
Thanks for showing support
Really appreciate you
Thanks for commenting
Glad you liked it
Appreciate the support mate
Thanks for the love
Cheers for the comment
Means a ton
Appreciate you stopping by
Thanks for supporting local artists
Really nice of you
Good to see support like this
Thanks for the encouragement
Appreciate your words
Cheers for supporting creativity
Thanks for taking a look
Really grateful for the support
Appreciate you mate
Thanks for the positivity
Glad this reached you
Thanks for supporting art
Love seeing comments like this
Appreciate you being here
Cheers for the kind support
Thanks for showing up
Really appreciate your comment
Thanks for supporting creatives
Appreciate your support always
Cheers for the nice words
Thanks for checking it out
Glad you enjoyed it
Appreciate the encouragement
Thanks for the support mate
Good to have you here
Really appreciate the kindness
Thanks for giving support
Appreciate your time
Cheers for the encouragement
Thanks for backing creativity
Really appreciate the good vibes
Thanks for supporting the work
Glad you connected with it
Appreciate your kindness
Cheers for the support mate
Thanks for supporting artists
Really appreciate the comment
Thanks for sharing positivity
Appreciate you dropping by
Good to see people supporting art
Thanks for the support today
Cheers for taking the time
Really appreciate your support
Thanks for showing kindness
Appreciate the comment mate
Glad you stopped in
Thanks for supporting the creative scene
Really appreciate you being here
Cheers for all the support
Thanks for the thoughtful comment
Appreciate the encouragement mate
Good to see support like yours
Thanks for taking part
Really appreciate the energy
Cheers for the positivity mate
Thanks for showing love today
Appreciate you commenting
Thanks for supporting the artist
Really nice comment
Cheers for the support today
Thanks for the good vibes
Appreciate your support mate
Glad you dropped by
Thanks for taking the time to comment
Really appreciate all the support
Cheers for checking it out
Thanks for supporting creativity mate
Appreciate the kindness today
Thanks for stopping by mate
Really appreciate your positivity
Cheers for supporting local creatives
Thanks for the encouragement today
Appreciate your kind words mate
Thanks for all the support
Really grateful for comments like this
Cheers for showing support today
Thanks for being supportive
Appreciate the positivity mate
Thanks for backing the creative work
Really appreciate the support today
Cheers for the comment mate
Thanks for the encouragement mate
Appreciate the support always
Thanks for supporting independent artists
Really appreciate you stopping by
Cheers for the love
Thanks for supporting creative people
Appreciate your support today
Thanks for the comment today
Really appreciate the encouragement
Cheers for being supportive
Thanks for supporting artists out there
Appreciate the nice comment
Thanks for the support as always
Really appreciate you commenting
Cheers for taking a look today
Thanks for backing creative work
Appreciate your support heaps
Thanks for stopping in today
Really appreciate the support mate
Cheers for all the positivity
Thanks for supporting the arts community
Appreciate you checking it out
Thanks for the support legend
Really appreciate your encouragement
Cheers for the thoughtful words
Thanks for supporting the artist today
Appreciate your kindness mate
Thanks for dropping a comment
Really appreciate all the positivity
Cheers for supporting local art
Thanks for showing support mate
Appreciate you taking a moment
Thanks for the encouragement and support
Really appreciate your words today
Cheers for supporting creative people
Thanks for checking this out
Appreciate all the support mate
Thanks for supporting artists like this
Really appreciate the kind energy
Cheers for the positive comment
Thanks for being part of it
Appreciate your support today mate
Thanks for showing kindness today
Really appreciate the support and positivity
Cheers for taking the time mate
Thanks for all your support
Appreciate you being supportive
Thanks for the thoughtful support
Really appreciate your encouragement today
Cheers for supporting the work
Thanks for supporting creatives today
Appreciate the support and kindness
Thanks for showing some support
Really appreciate you dropping by today
Cheers for the encouragement today
Thanks for being positive
Appreciate the support as always
Thanks for supporting the creative side
Really appreciate the comment and support
Cheers for the kind comment
Thanks for supporting the arts mate
Appreciate your positivity today
Thanks for showing up today
Really appreciate your support and time
Cheers for supporting creativity today
Thanks for all the kind words
Appreciate you mate thanks again
Thanks for the positive support
Really appreciate you taking the time
Cheers for supporting the artist mate
Thanks for commenting and supporting
Appreciate your support heaps mate
Thanks for the kind support today
Really appreciate the positive vibes
Cheers for supporting art and creativity
Thanks for the support and encouragement
Appreciate the support today legend
Thanks for supporting the creative community
Really appreciate your support here
Cheers for stopping by today
Thanks for all the encouragement
Appreciate your support and positivity
Thanks for the support on this one
Really appreciate the nice words mate
Cheers for showing support and kindness
Thanks for backing artists
Appreciate the comment and support
Thanks for supporting local creativity
Really appreciate you being supportive
Cheers for all the good vibes
Thanks for showing support for artists
Appreciate your support on this
Thanks for taking a moment to comment
Really appreciate the encouragement mate
Cheers for the support and positivity
Thanks for supporting creative work
Appreciate your support every time
Thanks for stopping by and commenting
Really appreciate the positive energy
Cheers for being part of the support
Thanks for supporting independent creatives
Appreciate your kind support
Thanks for all the positivity today
Really appreciate you showing support
Cheers for the supportive comment
Thanks for backing the arts
Appreciate your encouragement today
Thanks for supporting creative people today
Really appreciate the support and kindness
Cheers for dropping a comment today
Thanks for showing support on this
Appreciate your positivity and support
Thanks for supporting artists and creatives
Really appreciate the support here
Cheers for the kind energy
Thanks for taking the time today
Appreciate your support and kindness mate
Thanks for all the support today
Really appreciate the positive comment
Cheers for supporting local creatives today
Thanks for the support and positivity mate
Appreciate you supporting artists
Thanks for commenting mate
Really appreciate the support and good vibes
Cheers for backing creativity
Thanks for the support on the post
Appreciate your support on this one mate
Thanks for being supportive today
Really appreciate the kindness and support
Cheers for supporting artists today
Thanks for all the support and positivity
Appreciate the encouragement today mate
Thanks for supporting art and artists
Really appreciate your positivity and support
Cheers for taking the time to support
Thanks for being part of the positivity
Appreciate your support and encouragement
Thanks for supporting the arts today
Really appreciate the supportive words
Cheers for backing local artists
Thanks for the support and kind words
Appreciate your support today legend
Thanks for showing support and positivity
Really appreciate your support on this post
Cheers for the positivity and support
Thanks for backing the artist today
Appreciate all the support today
Thanks for supporting creativity and art
Really appreciate your encouragement and support
Cheers for supporting artists and creatives
Thanks for showing support for creative work
Appreciate your positivity and kindness
Thanks for stopping by and supporting
Really appreciate the support on this
Cheers for supporting the creative community
Thanks for all the positive support
Appreciate your support and kind words
Thanks for supporting the work today
Really appreciate the support and encouragement
Cheers for taking the time to support artists
Thanks for backing local creativity
Appreciate your support and positivity today
Thanks for supporting independent art
Really appreciate the positivity on this
Cheers for all the support and encouragement
Thanks for showing support for creativity
Appreciate your kind words and support
Thanks for supporting local artists today
Really appreciate your support and good vibes
Cheers for being supportive and positive
Thanks for backing the arts community
Appreciate the support and encouragement today
Thanks for showing kindness and support
Really appreciate you taking the time today
Cheers for supporting artists and art
Thanks for all the encouragement and support
Appreciate your positivity and encouragement
Thanks for supporting the creative world
Really appreciate the support and kind energy
Cheers for supporting creativity and artists
Thanks for taking the time to show support
Appreciate your support and positivity always
Thanks for supporting art and creativity today
Really appreciate your encouragement and positivity
Cheers for showing support for the arts
Thanks for being part of the support today
Appreciate the support and good vibes always
Thanks for backing creative people today
Really appreciate your support and encouragement mate
Cheers for supporting independent artists today
Thanks for supporting the creative scene today
Appreciate all the support and positivity
Thanks for the encouragement and kind words
Really appreciate your support for the arts
Cheers for supporting local creative work
Thanks for showing support and encouragement
Appreciate your positivity and support mate
Thanks for supporting artists in the community
Really appreciate your kind support today
Cheers for the positive support today
Thanks for supporting art and creative work
Appreciate your support and positivity on this
Thanks for backing artists and creatives
Really appreciate your support and encouragement today
Cheers for supporting the creative community today
Thanks for the support and positivity always
Appreciate your encouragement and support mate
Thanks for supporting creativity in general
Really appreciate all the support and positivity
Cheers for showing support for artists today
Thanks for backing creative work today
Appreciate your support and encouragement always
Thanks for supporting independent creativity
Really appreciate the positivity and support mate
Cheers for supporting local art and artists
Thanks for all the support and encouragement today
Appreciate your support and kindness today
Thanks for supporting the arts and creativity
Really appreciate your positivity today
Cheers for backing artists and creative people
Thanks for showing support and positivity today
Appreciate all the encouragement and support
Thanks for supporting the artist and the work
Really appreciate your support and kindness always
Cheers for supporting creative artists
Thanks for backing creativity and art
Appreciate your support and positivity mate
Thanks for all the positive encouragement
Really appreciate your support for creativity
Cheers for supporting the arts and artists
Thanks for showing support for local artists
Appreciate your support and encouragement today
Thanks for supporting the work and the artist
Really appreciate the support and positivity always
Cheers for backing creative people and artists
Thanks for all the support on this post
Appreciate your support and kindness always
Thanks for supporting creativity and artists today
Really appreciate your encouragement and positivity mate
Cheers for showing support and encouragement today
Thanks for supporting independent artists and creatives
Appreciate your support and positive energy
Thanks for backing art and creativity today
Really appreciate all your support and positivity
Cheers for supporting the artist and creative work
Thanks for showing kindness and positivity today
Appreciate your support and encouragement on this
Thanks for supporting the creative arts
Really appreciate your positivity and support always
Cheers for supporting local creative artists
Thanks for all the support and kind energy
Appreciate your support and encouragement heaps
Thanks for supporting art and artists always
Really appreciate your support and positivity today
Cheers for backing the arts and creativity
Thanks for showing support for independent artists
Appreciate your positivity and encouragement today
Thanks for supporting local creativity and art
Really appreciate the support and positivity mate
Cheers for supporting artists and creativity always
Thanks for all the encouragement and positivity
Appreciate your support and kind words today
Thanks for supporting creative expression
Really appreciate your encouragement and support always
Cheers for showing support for creative work today
Thanks for backing artists and creativity today
Appreciate your support and positivity on this post
Thanks for supporting art and creative people
Really appreciate all the positivity and support
Cheers for supporting the creative arts community
Thanks for the support and encouragement always
Appreciate your support and kindness on this
Thanks for backing independent creative work
Really appreciate your positivity and support today
Cheers for showing support for local creativity
Thanks for all your support and encouragement today
Appreciate your support and positivity every time
Thanks for supporting artists and the arts
Really appreciate the encouragement and positivity
Cheers for supporting creativity and independent art
Thanks for backing local artists and creatives
Appreciate your support and positivity heaps
Thanks for supporting creative work and artists
Really appreciate your support and kind energy today
Cheers for showing support for artists and creatives
Thanks for all the positivity and support today
Appreciate your encouragement and support always
Thanks for supporting local art and creativity
Really appreciate your support and positivity on this
Cheers for backing creative artists and art
Thanks for showing support and positivity always
Appreciate your support and encouragement today mate
Thanks for supporting creativity and the arts
Really appreciate all your support today
Cheers for supporting local artists and creativity
Thanks for backing the creative arts community
Appreciate your positivity and support on this
Thanks for supporting independent artists today
Really appreciate your encouragement and kindness
Cheers for all the support and positivity always
Thanks for showing support for artists and art
Appreciate your support and positivity today legend
Thanks for backing creativity and independent artists
Really appreciate your support and encouragement heaps
Cheers for supporting art and creativity always
Thanks for supporting local creatives and artists
Appreciate your support and kindness today mate
Thanks for all the support and positive vibes
Really appreciate your encouragement and positivity today
Cheers for backing artists and creative communities
Thanks for supporting creativity and artists always
Appreciate your support and encouragement on this post
Thanks for supporting the arts and local creativity
Really appreciate the support and positivity on this
Cheers for supporting independent creativity and art
Thanks for backing artists and creative expression
Appreciate all the support and positivity today mate
Thanks for showing support for the creative community
Really appreciate your support and encouragement always
Cheers for supporting artists and local creatives
Thanks for all your positivity and encouragement
Appreciate your support and kindness on this post
Thanks for supporting creativity and artistic work
Really appreciate the support and encouragement today mate
Cheers for backing local artists and creativity
Thanks for supporting independent art and creatives
Appreciate your support and positive energy today
Thanks for all the support and positivity on this
Really appreciate your encouragement and support always
Cheers for supporting creative work and artists
Thanks for showing support and positivity on this post
Appreciate your support and encouragement heaps mate
Thanks for backing the arts and creative artists
Really appreciate all the support and positivity always
Cheers for supporting creativity and artistic expression
Thanks for supporting artists and local art today
Appreciate your support and encouragement every time
Thanks for all the positivity and support on this post
Really appreciate your kindness and encouragement today
Cheers for supporting local artists and the arts
Thanks for backing creativity and artistic work
Appreciate your support and positivity today always
Thanks for supporting independent artists and creativity
Really appreciate your support and encouragement on this
Cheers for showing support for local creative work
Thanks for all your support and positivity today mate
Thank you for the support
Thank you for dropping by
Thank you mate appreciate it
Thank you for the kind words
Thank you heaps
Thank you for stopping by
Thank you for taking the time
Thank you mate
Thank you means a lot
Thank you for the support mate
Thank you legend
Big thank you
Thank you for the positivity
Thank you for backing the artist
Thank you really appreciate it
Thank you for showing love
Thank you for being here
Thank you heaps appreciate it
Thank you for the good vibes
Thank you for supporting creatives
Thank you so much
Thank you for that
Thank you love seeing support like this
Thank you for stopping in
Thank you really kind of you
Thank you appreciate the good energy
Thank you mate means a lot
Thank you for supporting the arts
Thank you for showing support
Thank you really appreciate you
Thank you for commenting
Thank you glad you liked it
Thank you for the support mate
Thank you for the love
Thank you for the comment
Thank you means a ton
Thank you for stopping by
Thank you for supporting local artists
Thank you really nice of you
Thank you good to see support like this
Thank you for the encouragement
Thank you appreciate your words
Thank you for supporting creativity
Thank you for taking a look
Thank you really grateful for the support
Thank you appreciate you mate
Thank you for the positivity today
Thank you glad this reached you
Thank you for supporting art
Thank you love seeing comments like this
Thank you for being here mate
Thank you for the kind support
Thank you for showing up
Thank you really appreciate your comment
Thank you for supporting creatives today
Thank you appreciate your support always
Thank you for the nice words
Thank you for checking it out
Thank you glad you enjoyed it
Thank you for the encouragement mate
Thank you for the support today
Thank you good to have you here
Thank you really appreciate the kindness
Thank you for giving support
Thank you appreciate your time
Thank you for the encouragement today
Thank you for backing creativity
Thank you really appreciate the good vibes
Thank you for supporting the work
Thank you glad you connected with it
Thank you appreciate your kindness
Thank you for the support mate today
Thank you for supporting artists
Thank you really appreciate the comment
Thank you for sharing positivity
Thank you for dropping by today
Thank you good to see people supporting art
Thank you for the support today mate
Thank you for taking the time to comment
Thank you really appreciate your support
Thank you for showing kindness
Thank you appreciate the comment mate
Thank you glad you stopped in
Thank you for supporting the creative scene
Thank you really appreciate you being here
Thank you for all the support
Thank you for the thoughtful comment
Thank you appreciate the encouragement mate
Thank you good to see support like yours
Thank you for taking part
Thank you really appreciate the energy
Thank you for the positivity mate
Thank you for showing love today
Thank you for commenting mate
Thank you for supporting the artist today
Thank you really nice comment
Thank you for the good vibes today
Thank you appreciate your support mate
Thank you glad you dropped by
Thank you for taking the time today
Thank you really appreciate all the support
Thank you for checking it out today
Thank you for supporting creativity mate
Thank you appreciate the kindness today
Thank you for stopping by mate
Thank you really appreciate your positivity
Thank you for supporting local creatives
Thank you for the encouragement today mate
Thank you appreciate your kind words mate
Thank you for all the support today
Thank you really grateful for comments like this
Thank you for showing support today
Thank you for being supportive
Thank you appreciate the positivity mate
Thank you for backing the creative work
Thank you really appreciate the support today
Thank you for the comment mate
Thank you for the encouragement mate
Thank you appreciate the support always
Thank you for supporting independent artists
Thank you really appreciate you stopping by
Thank you for the support and kindness
Thank you for supporting creative people
Thank you appreciate your support today
Thank you for the comment today
Thank you really appreciate the encouragement
Thank you for being supportive today
Thank you for supporting artists out there
Thank you appreciate the nice comment
Thank you for the support as always
Thank you really appreciate you commenting
Thank you for taking a look today
Thank you for backing creative work
Thank you appreciate your support heaps
Thank you for stopping in today
Thank you really appreciate the support mate
Thank you for all the positivity
Thank you for supporting the arts community
Thank you for checking it out mate
Thank you for the support legend
Thank you really appreciate your encouragement
Thank you for the thoughtful words
Thank you for supporting the artist today mate
Thank you appreciate your kindness mate
Thank you for dropping a comment
Thank you really appreciate all the positivity
Thank you for supporting local art
Thank you for showing support mate
Thank you appreciate you taking a moment
Thank you for the encouragement and support
Thank you really appreciate your words today
Thank you for supporting creative people today
Thank you for checking this out
Thank you appreciate all the support mate
Thank you for supporting artists like this
Thank you really appreciate the kind energy
Thank you for the positive comment
Thank you for being part of it
Thank you appreciate your support today mate
Thank you for showing kindness today
Thank you really appreciate the support and positivity
Thank you for taking the time mate
Thank you for all your support
Thank you appreciate you being supportive
Thank you for the thoughtful support
Thank you really appreciate your encouragement today
Thank you for supporting the work today
Thank you for supporting creatives today
Thank you appreciate the support and kindness
Thank you for showing some support
Thank you really appreciate you dropping by today
Thank you for the encouragement today
Thank you for being positive
Thank you appreciate the support as always
Thank you for supporting the creative side
Thank you really appreciate the comment and support
Thank you for the kind comment
Thank you for supporting the arts mate
Thank you appreciate your positivity today
Thank you for showing up today
Thank you really appreciate your support and time
Thank you for supporting creativity today
Thank you for all the kind words
Thank you appreciate you mate thanks again
Thank you for the positive support
Thank you really appreciate you taking the time
Thank you for supporting the artist mate
Thank you for commenting and supporting
Thank you appreciate your support heaps mate
Thank you for the kind support today
Thank you really appreciate the positive vibes
Thank you for supporting art and creativity
Thank you for the support and encouragement
Thank you appreciate the support today legend
Thank you for supporting the creative community
Thank you really appreciate your support here
Thank you for stopping by today
Thank you for all the encouragement
Thank you appreciate your support and positivity
Thank you for the support on this one
Thank you really appreciate the nice words mate
Thank you for showing support and kindness
Thank you for backing artists
Thank you appreciate the comment and support
Thank you for supporting local creativity
Thank you really appreciate you being supportive
Thank you for all the good vibes
Thank you for showing support for artists
Thank you appreciate your support on this
Thank you for taking a moment to comment
Thank you really appreciate the encouragement mate
`;

    loadResponses();
    showReply();
};
