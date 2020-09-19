
function getElem (elem) {
    return  document.querySelector(elem);
}

let regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
let nomeCompleto= getElem(".f-nome-completo");

nomeCompleto.addEventListener("blur", function(){
    if (this.value.length < 5) {
        getElem(".alert-nome-completo").style.display = 'block';
    } else {
        getElem(".alert-nome-completo").style.display = 'none';
    }
    if (!regexNome.test(this.value) && this.value.length > 0) {
        getElem(".alert-nomeComNumero").style.display = 'block';
    } else {
        getElem(".alert-nomeComNumero").style.display = 'none';
    }
});

