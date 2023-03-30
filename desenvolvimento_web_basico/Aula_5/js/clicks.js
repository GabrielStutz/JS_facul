let clicks = 0;
function contador() {
    clicks++;
    document.getElementById('clicks').innerHTML = clicks;
}

function sortear() {
    let sorteado = parseInt(Math.random() * 100);
    document.getElementById('sorteado').innerHTML = sorteado;
}