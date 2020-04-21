function checkInput() {
    if (document.getElementById('Fisica').checked) {
        limpartudo();
        document.getElementById('cpfcnpj1').value = ('CPF:');
        document.getElementById('cpfcnpj1').maxlength = 3;
        document.getElementById('cpfcnpj1').size = (2);
        document.getElementById('rginscricao').value = ('R.G.:');
        document.getElementById('rginscricao1').size = (13);
        document.getElementById('dtnasc').value = ('Dt. nascim.:');
        document.getElementById('dtnasc1').size = (7);
        document.getElementById('nomemae').value = ('Nome da mãe  :');
        document.getElementById('nomemae1').size = (50);
        document.getElementById('cpfcnpj2').value = '';

    }
    if (document.getElementById('Juridica').checked) {
        limpartudo();
        document.getElementById('cpfcnpj1').value = ('CNPJ:');
        document.getElementById('cpfcnpj1').size = (2);
        document.getElementById('rginscricao').value = ('I.E.:');
        document.getElementById('rginscricao1').size = (13);
        document.getElementById('dtnasc').value = ('Dt. cadast.:');
        document.getElementById('dtnasc1').size = (7);
        document.getElementById('nomemae').value = ('Nome Fantasia:');
        document.getElementById('nomemae1').size = (50);
        document.getElementById('cpfcnpj2').value = '';


    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limparcampos();
        }
    } else {
        alert(cep.length)
        limparcampos();
    }
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } else {
        limparcampos();
        alert("CEP não encontrado.");
        document.getElementById('cep').focus();
    }
}

function limparcampos() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('cep').value = ("");
    document.getElementById('num').value = ("");
    document.getElementById('complemento').value = ("");
}

function limpartudo() {
    document.getElementById('cpfcnpj2').value = ("");
    document.getElementById('nome').value = ("");
    document.getElementById('rginscricao1').value = ("");
    document.getElementById('dtnasc1').value = ("");
    document.getElementById('nomemae1').value = ("");
    document.getElementById('contato').value = ("");
    document.getElementById('telfixo').value = ("");
    document.getElementById('cel1').value = ("");
    document.getElementById('cel2').value = ("");
    document.getElementById('email').value = ("");
    document.getElementById('site').value = ("");
    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('num').value = ("");
    document.getElementById('complemento').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('obs').value = ("");

}

function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}

function formatardados(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)
    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}

function formatar(mascara, documento) {
    var i = documento.value.length;

    debugger
    if (document.getElementById('Fisica').checked) {
        mascara = '###.###.###-##';
        Maxlength = 14
    } else {
        mascara = '##.###.###/####-##';
        Maxlength = 18
    }

    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}

function valida() {
    var valido = false;

    if (document.getElementById('Fisica').checked) {
        valido = validCpf(document.getElementById('cpfcnpj2').value.replace(/\.|\-/g, ''));
    } else {
        valido = validCnpj(document.getElementById('cpfcnpj2').value.replace(/\.|\-/g, '').replace('/', ''));
    }

    if (valido == true) {
        //alert('válido');
    } else {

        limpartudo();
        alert('CPF ou CNPJ inválido');


    }
}

function validCpf(cpf) {
    if (!cpf || cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return true
}

function validCnpj(cnpj) {
    if (!cnpj || cnpj.length != 14 ||
        cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false
    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0, tamanho)
    var digitos = cnpj.substring(tamanho)
    var soma = 0
    var pos = tamanho - 7
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2) pos = 9
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(0)) return false;
    tamanho = tamanho + 1
    numeros = cnpj.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--
            if (pos < 2) pos = 9
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(1)) return false
    return true;
}