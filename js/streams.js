function d() {
    const inputval = document.getElementById('textb').value;
    console.log(inputval);
}
function createStream() {
    let i=0;
    
    let divemb = document.createElement('div');
    divemb.style.display = "flex";
    let fj = "twitch-embed"+i;
    divemb.style.id = fj;

    i++;

    document.appendChild(divemb);
    new Twitch.Player(fj, {
    channel: inputval
    });
}
