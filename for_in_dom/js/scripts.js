var lista = [ 'maça', 'pera', 'laranja', 'uva']

//Cria um elemento ul na listaUl
var listaUl = document.createElement('ul');

//pega todos os elementos que ta na tag body
var body = document.getElementsByTagName('body');

//Adiciona a listaUl ao body 
body[0].appendChild(listaUl);

//Cria um elemento ul na listaNoBody
var listaNoBody = document.getElementsByTagName('ul');

//não entendi ainda
console.log(listaNoBody[0]);

//cria um laço (for), com inicialização da varíavel i como 0, o laço vai continuar enquanto percorrer o numero de elementos na lista e acrescentar de um em um
for (var i = 0; i < lista.length; i++){

    //liFor vai receber um elemento li criado
    var liFor = document.createElement('li');

    //textoLi vai receber um elemento texto com os itens da lista
    var textoLi = document.createTextNode(lista[i]);

    //vai adicionar no liFor o textoLi (vai adicionar os itens da lista na li)
    liFor.appendChild(textoLi);

    //vai adicionar no html o li com os itens
    listaNoBody[0].appendChild(liFor);




}


