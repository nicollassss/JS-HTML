document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    const resultElement = document.getElementById('resultado');
    const inputnumero = document.getElementById('inputnumero');

    
    function checkEvenOdd() {
        const number = parseInt(inputnumero.value);

        if (!isNaN(number)) {
            const isEven = number % 2 === 0;
            if (isEven) {
                resultElement.innerText = `O número ${number} é Par.`;
            } else {
                resultElement.innerText = `O número ${number} é Ímpar.`;
            }
            resultElement.classList.add('show');
        } else {
            resultElement.innerText = 'Por favor, insira um número válido.';
            resultElement.classList.add('show');
        }
    }

    
    checkButton.addEventListener('click', checkEvenOdd);

   
    inputnumero.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkEvenOdd();
        }
    });
});
