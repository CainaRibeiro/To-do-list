function validaTarefa(tarefa)
{
    var erro    = []
    
    if (tarefa.tarefa.length == 0)
    {
        erro.push('Preencha a tarefa!')
    }

    if (tarefa.data.length == 0)
    {
        erro.push('Preencha a data!')
    }

    if (tarefa.hora.length == 0)
    {
        erro.push('Preencha a hora!')
    }


    return erro;
}
