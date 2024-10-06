//object
const actividade = {
    nome: "Almoco", 
    data: new Date("2024-05-29 18:00"),
    finalizada: true
  }
  
  /*
  esta variavel chamada criarItemDeActividade recebbe uma funcao para criar as actividades
  arrow fuctoin: a sintaxe dela e essa: () => {} transformando essa var em funcao
  
  ${object.atributo} é uma forma de coletar dados pelo javascript e inserie em tags html de uma forma mais dinamica
  */
   
   //listas, array, vector []
   const listaDeActividades = [
    actividade,{
    nome: "Academia em grupo", 
    data: new Date("2024-09-29 12:00"),
    finalizada: false
  } ,{
    nome: "Ajogar minecraft", 
    data: new Date("2024-09-29 19:00"),
    finalizada: true
  }
  
   ]
   //arrow function
  const criarItemDeActividade = (actividade) => {
  
    let input = '<input type="checkbox" '
  // controle fe fluxo do checkbox
      if (actividade.finalizada){
          input += 'checked'
      }
       input += '/>'
  
    return `<div>
    ${input}
    <span>${actividade.nome}</span>
    <time>${actividade.data}</time>
  </div>`  
  }
  
  //coletar dados da tag section no html pelo querySelector
  const section = document.querySelector('section')
  
  //fazendo um print de todas as actividades da lista
  for(let actividade of listaDeActividades){
  section.innerHTML += criarItemDeActividade(actividade)
  }
  
  