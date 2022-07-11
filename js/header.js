var tema        = document.querySelector('.botao');
var body        = document.querySelector('.corpo');
var dropdown    = tema.querySelector('.dropdown');
var escuro      = document.querySelector('.escuro');
var claro       = document.querySelector('.claro');

tema.addEventListener('mouseenter', function()
{
    dropdown.classList.remove('invisivel');
});

escuro.addEventListener('click', function()
{
    dropdown.classList.add('invisivel');
    body.classList.remove('tema-claro');
    body.classList.add('tema-escuro');  
})

claro.addEventListener('click', function()
{
    dropdown.classList.add('invisivel');
    body.classList.remove('tema-escuro');
    body.classList.add('tema-claro');
})
