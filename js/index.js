// const allNumber = document.querySelectorAll(".number");

// allNumber.forEach(e => {
//     e.onclick = () => {
//         let valor = e.value;
//         let resultado2 = document.querySelector('.contenedor_resultado--1')
//         let elementValue = document.querySelector('.contenedor_resultado--2')

//         switch(valor) {
//             case 'x' :
//                 elementValue.textContent += '*';
//                 break;
//             case '+' :
//                 elementValue.textContent += valor;
//                 break;
//             case '-' :
//                 elementValue.textContent += valor;
//                 break;
//             case '=' :
//                 resultado2.textContent = eval(elementValue.textContent);
//                 break;
//             case 'C' :
//                 elementValue.textContent = '';
//                 break;
//             default :
//                 elementValue.textContent += valor
//         }
//     }
// })