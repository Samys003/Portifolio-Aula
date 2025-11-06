'use stict'

const projetos = [
    { nome: 'Api Rick and Morty', url: 'https://samys003.github.io/api-rick-and-morty/' , imagem: './img/temporada-1.jpg',  descricao: 'Api Rick and Morty feito com js criando varios elementos e paginas, bla bla bla bla bla'},
    { nome: '', url: '' , descricao: ''},
    { nome: '', url: '' , descricao: ''},
]

function criarObjetos (objeto) {
  const projeto =  document.getElementById('projetos')
  const btnEsquerda = document.getElementById('btn-left')
  const btnDireita = document.getElementById('btn-right')

 const div = document.createElement('div')
 const site = document.createElement('a')

  div.textContent = objeto.nome
  site.href = objeto.url
  site.textContent = 'Acessa Ai!'

  div.classList.add('flex', 'flex-col' , 'w-[150px]' , 'bg-blue-800' , 'h-[150px]')

  div.appendChild(site)
  projeto.appendChild(div)
  
 



}


function exibirObjetos (){

 const projeto = document.getElementById('projetos')

    projetos.forEach(criarObjetos)
}

exibirObjetos()