let resultOne = document.querySelector('.contenedor_resultado--1');
let resultTwo = document.querySelector('.contenedor_resultado--2');
let number = document.querySelectorAll('.number')
window.addEventListener('load',() => {
    (function() {
        number.forEach(btn => {
            btn.addEventListener('click',(e) => {
                if (btn.value != '=' && btn.value != 'C') {
                    resultTwo.textContent += btn.value
                } else if (btn.value === 'C') {
                    resultTwo.textContent = ''
                } else if (btn.value === '=') {
                    if(resultTwo.textContent.length > 0 ) {
                        resultOne.textContent = eval(resultTwo.textContent)
                        resultTwo.textContent = '';
                    } else {
                        resultOne.textContent = 'systaxis error'
                    }
                }
            })  
        })
    })()
})