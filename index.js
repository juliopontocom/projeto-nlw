const perguntas = [ 
    // array de 10 objetos que serao as perguntas
    {
      pergunta: 'Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?',
      respostas: [ // array de 3 possiveis respostas
        'var',
        'let',
        'const'
      ],
      correta: 2 //opcao da resposta correta em index do array
    },
    {
      pergunta: 'Como você escreve um comentário de uma única linha em JavaScript?',
      respostas: [
        '// Comentário',
        '-- Comentário',
        '# Comentário'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a função do operador "===" em JavaScript?',
      respostas: [
        'Compara o valor e o tipo de duas variáveis',
        'Compara apenas o valor de duas variáveis',
        'Compara apenas o tipo de duas variáveis'
      ],
      correta: 0
    },
    {
      pergunta: 'Como você adiciona um elemento ao final de um array em JavaScript?',
      respostas: [
        'array.unshift(elemento)',
        'array.push(elemento)',
        'array.add(elemento)'
      ],
      correta: 1
    },
    {
      pergunta: 'O que o método "parseInt()" faz em JavaScript?',
      respostas: [
        'Converte uma string para minúsculas',
        'Converte uma string para maiúsculas',
        'Converte uma string para um número inteiro'
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a função do método "querySelector()"?',
      respostas: [
        'Seleciona todos os elementos com a classe especificada',
        'Seleciona o primeiro elemento com a classe especificada',
        'Seleciona um elemento pelo ID'
      ],
      correta: 1
    },
    {
      pergunta: 'O que é o conceito de "hoisting" em JavaScript?',
      respostas: [
        'Eleva uma variável ou função para o topo de seu contexto de execução',
        'Move uma variável ou função para o final de seu contexto de execução',
        'Remove uma variável ou função do contexto de execução'
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a diferença entre "let" e "const" na declaração de variáveis?',
      respostas: [
        'let é usado para variáveis de escopo local, enquanto const é usado para variáveis de escopo global',
        'let permite a reatribuição de valores, enquanto const cria variáveis imutáveis',
        'let e const são equivalentes e podem ser usados de forma intercambiável'
      ],
      correta: 1
    },
    {
      pergunta: 'Como você previne a propagação de eventos em JavaScript?',
      respostas: [
        'event.stopPropagation()',
        'event.preventDefault()',
        'event.stop()'
      ],
      correta: 0
    },
    {
      pergunta: 'O que é o conceito de "callback" em JavaScript?',
      respostas: [
        'Uma função que é passada como argumento para outra função e é executada posteriormente',
        'Um método que retorna um valor booleano',
        'Um evento acionado por um clique do mouse'
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
  