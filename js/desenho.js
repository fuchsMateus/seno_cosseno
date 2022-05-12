let valoresY;
let afastamento = 22; //max 22
let precisao = 46; //max 46
let sliderAfastamento, sliderPrecisao;
let opcaoFuncao;

function setup() {
    let canvas = createCanvas(window.innerWidth, 0.9 * window.innerHeight);
    canvas.parent('desenho');
    valoresY = new Array(floor(width));

    let divSliders = createDiv();
    divSliders.class('container-md');

    sliderAfastamento = createSlider(1, 22, 6, 0.01);
    sliderAfastamento.position(width / 4, 10);
    sliderAfastamento.class('form-range');
    sliderAfastamento.style('width', '50%');

    sliderPrecisao = createSlider(0, 46, 0);
    sliderPrecisao.position(width / 4, 60);
    sliderPrecisao.class('form-range');
    sliderPrecisao.style('width', '50%');

    radio = createRadio();

    radio.position(sliderAfastamento.x/10, 110);
    radio.option(1,'&nbsp;Seno&nbsp;&nbsp;');
    radio.option(2,'&nbsp;Cosseno');
    radio.selected("1")
}

function draw() {
    background(255);
    calcWave();
    renderWave();
    afastamento = sliderAfastamento.value();
    precisao = sliderPrecisao.value();

    if (width / 40 <= 32)
        textSize(width / 40);
    else {
        textSize(32);
    }
    text('Afastamento', sliderAfastamento.x / 3, 27);
    text('Precisão: '+precisao, sliderPrecisao.x / 3, 77);

    stroke(0);
    strokeWeight(1);
    setLineDash([(height + width) / (afastamento * 30), (height + width) / (afastamento * 30)]);
    line(width / 2, height, width / 2, 0);
    line(0, height / 2, width, height / 2);

    opcaoFuncao = radio.value();

}
function setLineDash(list) {
    drawingContext.setLineDash(list);
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    valoresY = new Array(floor(width));
    sliderAfastamento.position(width / 4, 10);
    sliderPrecisao.position(width / 4, 60);
}

function calcWave() {
    let x = -(afastamento * PI / 2);
    for (let i = 0; i < valoresY.length; i++) {
        if(opcaoFuncao == '1')
            valoresY[i] = -seno(x, precisao) * height / (PI * afastamento);
        if(opcaoFuncao == '2')
            valoresY[i] = -cosseno(x, precisao) * height / (PI * afastamento);
        x += afastamento * PI / width;
    }
}

function renderWave() {
    noStroke();
    fill(0);
    for (let x = 0; x < valoresY.length; x++) {
        circle(x, height / 2 + valoresY[x], (height + width) / (afastamento * 30));
    }
}
