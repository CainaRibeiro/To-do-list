var adicionar   = document.querySelector('.adicionar');



adicionar.addEventListener('click', function()
{
    event.preventDefault();

    var form        = document.querySelector('#form');

    var tarefa      = obterTarefa(form)

    var erro = validaTarefa(tarefa);

    if(erro.length > 0)
    {
        var ul  = document.querySelector('.erros');
        ul.innerHTML = '';

        erro.forEach(function(erro)
        {
            var liErro  = document.createElement('li');
            liErro.textContent = erro;
            ul.appendChild(liErro);

        })
        return;
    }
    else
    {
        adicionaTarefa(tarefa);
    }

    form.reset();

    var msgErro = document.querySelector('.erros');
    msgErro.innerHTML = '';

})
