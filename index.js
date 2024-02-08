const perguntas = [
  {
    pergunta: 'Qual é o nome do personagem principal do Minecraft?',
    respostas: [
      'Andrew',
      'Steve',
      'Stone'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual bloco é usado para criar portais para o Nether?',
    respostas: [
      'Bloco de Ouro',
      'Bloco de Redstone',
      'Obsidiana'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é necessário para domesticar um lobo em Minecraft?',
    respostas: [
      'Peixe',
      'Carne Crua',
      'Ossos'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é o nome do dragão final em Minecraft?',
    respostas: [
      'Ender Dragon',
      'Nether Dragon',
      'Wither Dragon'
    ],
    correta: 0
  },
  {
    pergunta: 'Como se chama o recurso usado para criar poções em Minecraft?',
    respostas: [
      'Essência Mágica',
      'Pó de Bruxa',
      'Pó de Blaze'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual ferramenta é mais eficaz para quebrar blocos de pedra em Minecraft?',
    respostas: [
      'Pá',
      'Machado',
      'Picareta'
    ],
    correta: 2
  },
  {
    pergunta: 'O que acontece quando você dorme em uma cama em Minecraft?',
    respostas: [
      'Cura a fome do jogador',
      'Define o ponto de respawn do jogador',
      'Invoca monstros'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é o nome do criador de Minecraft?',
    respostas: [
      'Notch',
      'David',
      'Alex'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual desses minérios é necessario uma fornalha ',
    respostas: [
      'Diamante',
      'Ferro',
      'Esmeralda'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a receita básica para criar uma tocha em Minecraft?',
    respostas: [
      'Carvão + Bastão',
      'Pó de Redstone + Madeira',
      'Pedra + Vara'
    ],
    correta: 0
  },
];
  
  const quiz = document.querySelector('#quiz') 
  // quiz armazena a div quiz
  const template = document.querySelector('template') 
  // template armazena a tag template
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  // variavel com a quantidade de perguntas
  
  for(const item of perguntas){ 
    // percorre as 10 perguntas 
    const quizItem = template.content.cloneNode(true) 
    // clona o conteudo de template em quizItem
    quizItem.querySelector('h3').textContent = item.pergunta 
    // procura o h3 e atribui a pergunta
    for(let resposta of item.respostas){ 
      // percorre as respostas de uma pergunta
      const dt = quizItem.querySelector('dl dt').cloneNode(true) 
      // clona o conteudo de dt em dt
      dt.querySelector('span').textContent = resposta 
      // atribui a reposta a dt
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
        // verifica se a opcao selecionada for igual a correta
        corretas.delete(item)
        // remove por garantia o item das corretas
        if(estaCorreta){ 
          // caso seja a certa
          corretas.add(item)
          // adiciona o item no conjunto das corretas
        }
        mostrarTotal.textContent = ' '+corretas.size + ' de ' +totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt) // adiciona cada resposta na tag dl
  
    }
    quizItem.querySelector('dl dt').remove(); // remove o exemplo que foi clonado
    
    quiz.appendChild(quizItem) // coloca a pergunta na tela
  }
  