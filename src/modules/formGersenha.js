import gerarSenha from "./geradores";

const resultado = document.querySelector('.resultado');
const qtdCaracters = document.querySelector('.qtd-senha');
const numCheck = document.querySelector('.numCheck');
const maiCheck = document.querySelector('.maiCheck');
const minCheck = document.querySelector('.minCheck');
const simCheck = document.querySelector('.simCheck');
const geraSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
      resultado.innerHTML = gera();
    });
  };
  
  function gera() {
    const senha = geraSenha(
      qtdCaracters.value,
      maiCheck.checked,
      minCheck.checked,
      numCheck.checked,
      simCheck.checked
    );
  
    return senha || 'Nada selecionado.';
  }
  