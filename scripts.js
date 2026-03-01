/* 

Conceito de Variaveis: espaço de memória que armazena um valor que pode ser alterado durante a execução do programa.
Em maneira de criar no javascript;
- var (forma antiga, não recomendada)
- let (forma moderna, recomendada)
- const (constante, valor que não pode ser alterado)

Conceito de Funções: bloco de código que apenas são executados na tela quando são chamados.
*/

const form = document.querySelector('.formulario-fale-conosco');
const mascara = document.querySelector('.mascara-formulario');

function clicqueiNoBotao() {
    form.style.left = '50%';
    form.style.transform = 'translateX(-50%)';
    mascara.style.visibility = 'visible';

}


function sairFormulario() {
    form.style.left = '-300px';
    form.style.transform = 'translateX(0)';
    mascara.style.visibility = 'hidden';
}