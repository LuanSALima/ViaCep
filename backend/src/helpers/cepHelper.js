const cepIsValid  = (cep) => {
    //Remove '-' e '.' e adiciona em uma nova variável
    var cepApenasNumeros = cep.replace(/[\.-]/g, '');

    //Expressão regular para validar o CEP.
    var cepRegex = /^[0-9]{8}$/;

    //Valida o cep checando se possui 8 digitos numéricos
    if(cepRegex.test(cepApenasNumeros)) {
        return true;
    } else {
        return false;
    }
}

const cepFormat = (cep) => {
    //Verificando se o cep é válido
    if(!cepIsValid(cep)){
        return null;
    }

    //Nova variável "cep" somente com dígitos.
    var cepApenasNumeros = cep.replace(/\D/g, '');

    //Adiciona o hífen ao cep que possuía apenas números
    return cepApenasNumeros.substring(0, 5) + "-" + cepApenasNumeros.substring(5);
}

module.exports = {
    cepIsValid,
    cepFormat
}