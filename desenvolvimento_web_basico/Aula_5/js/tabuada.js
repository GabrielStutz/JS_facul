function tabuada() {
    var num = document.getElementById("num").value;
    var i = 1;
    var resultado = "";
    while (i <= 10) {
        resultado += `${num} x ${i} = ${(num * i)} <br>`;
        i++;
    }
    document.write(resultado);
}