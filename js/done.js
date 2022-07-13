var tarefa = document.querySelector('.tabela');

tarefa.addEventListener('dblclick', function()
{
    event.target.parentNode.classList.add('done');
});

//----------UNDONE-------------

// tarefa.addEventListener('dblclick', function()
// {
//     var row = tarefa.querySelector('.row');

//     row.classList.remove('done');
// });