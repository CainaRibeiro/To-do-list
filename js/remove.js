var tarefa  = document.querySelector('.tabela');

tarefa.addEventListener('click', function()
{
    if(window.event.ctrlKey)
    {
        event.target.parentNode.remove();
    }
})