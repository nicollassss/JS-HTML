document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const nascimento = parseInt(document.getElementById('nascimento').value);
        const anoatual = new Date().getFullYear();
        
        if (!isNaN(nascimento) && nascimento > 1900 && nascimento <= anoatual) {
            const idade = anoatual - nascimento;
            if (idade === 1) {
                document.getElementById('resultado').innerText = '1 ano.'
            } else {

            document.getElementById('resultado').innerText = `${idade} anos.`;
            }
        } else {
            document.getElementById('resultado').innerText = 'Por favor, insira um ano válido.';
        }
    });
});
