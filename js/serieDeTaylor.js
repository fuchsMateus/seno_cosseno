function seno(rad, precisao){
    /*let graus = rad * 180 / Math.PI;
    let voltas = Math.floor(graus/360);
    graus = graus - 360 * voltas;
    rad = graus * Math.PI / 180;*/
    let resposta = 0;
    for(let i = 0; i < precisao*2; i++){
        resposta += valorAnSeno(i) * Math.pow(rad, i);
    }
    return resposta;
}

function cosseno(rad, precisao){
    /*let graus = rad * 180 / Math.PI;
    let voltas = Math.floor(graus/360);
    graus = graus - 360 * voltas;
    rad = graus * Math.PI / 180;*/

    let resposta = 0;
    for(let i = 0; i < precisao*2; i++){
        resposta += valorAnCosseno(i) * Math.pow(rad, i);
    }
    return resposta;
}

function valorAnSeno(n){
    //0, 1, 0, -1,
    if(n % 2 == 0) return 0;
    if(Math.floor(n/2) % 2 == 0) return 1/fatorial(n);
    return -1/fatorial(n);

}

function valorAnCosseno(n){
    //1, 0, -1, 0
    //0, 1, 2, 3, 4
    if(n % 2 != 0) return 0;
    if(n/2 % 2 == 0) return 1/fatorial(n);
    return -1/fatorial(n);

}

function fatorial(n) {
    let resposta = 1;
      
    for (let i = 2; i <= n; i++)
        resposta = resposta * i;
    return resposta;
}

