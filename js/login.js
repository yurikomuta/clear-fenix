const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password = document.getElementById('senha');


// Mostrar mensagem de erro de entrada
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Mostrar resumo de sucesso
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Verifique os campos obrigatórios
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} Obrigatório`);
        } else {
            showSuccess(input);
        }
    });
}

// Verifique o comprimento da entrada
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} deve ter pelo menos ${min} caracteres`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} deve no ${max} caracteres`
        );
    } else {
        showSuccess(input);
    }
}


// Obter nome do campo
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// eventos
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([usuario, password]);
    checkLength(usuario, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordsMatch(password);
});