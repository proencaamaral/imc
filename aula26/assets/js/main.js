const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false)
        return;
    }
    if (!altura) {
        setResultado("Altura inválida", false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é  ${imc} e seu (${nivelImc})`;

    setResultado(msg, true);

    

});

function getImc(peso, altura) {
    const imc = peso/altura**2 
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['magreza grave', 'magreza moderada', 'magreza leve', 'peso ideal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II ou severa']

    if (imc >= 39.9) {
        return nivel[5]
    } if (imc >= 34.9) {
        return nivel[4]
    } if (imc >= 29.9) {
        return nivel[3]
    } if (imc >= 24.9) {
        return nivel[2]
    } if (imc >= 16.9) {
        return nivel[1]
    } if (imc < 16) {
        return nivel[0]
    }
}

function criaP() {
    const p = document.createElement('p');
    
    return p;
    
    
    
};

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP(); 

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

   
};