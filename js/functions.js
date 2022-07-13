function adicionaTarefa(tarefa)
{
    var tarefaTr    = montaTr(tarefa);
    var tabela      = document.querySelector('.tbody');
    tabela.appendChild(tarefaTr);
}

function montaTr(tarefa)
{
    var tr  = document.createElement('tr');
    tr.classList.add('row');

    tr.appendChild(montaTd(tarefa.tarefa, 'info-tarefa'));
    tr.appendChild(montaTd(tarefa.data  , 'info-data'));
    tr.appendChild(montaTd(tarefa.hora  , 'info-hora'));

    return tr
}

function montaTd(dado, classe)
{
    var td  = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td
}

function obterTarefa(form)
{
    var form    = document.querySelector('#form');

    var tarefa      = {
    tarefa  : form.tarefa.value,
    data    : form.data.value,
    hora    : form.hora.value
    }

    return tarefa
}
