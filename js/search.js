var filtro  = document.querySelector('#search');

filtro.addEventListener('input',function ()
{

    var task    = document.querySelectorAll('.row');
    console.log(task)
    if(this.value.length > 0)
    {
        task.forEach(function(task)  {
            
            var nomeTarefa  = task.querySelector('.info-tarefa');
            var valorTarefa = nomeTarefa.textContent;
            var expressao   = new RegExp(filtro.value,'i');


            if(!expressao.test(valorTarefa))
            {
                task.classList.add('invisivel');
            }
            else
            {
                task.classList.remove('invisivel');
            }
        });
    }
    else
    {
        task.forEach(function(task)
        {
            task.classList.remove('invisivel');
            
        })
    }
});