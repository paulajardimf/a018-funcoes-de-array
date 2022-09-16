// # Exercício 1
const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
const propriedadesCaixaAlta = (objeto) => {
  for (let propriedade in objeto) {
    objeto[propriedade] = objeto[propriedade].toUpperCase();
  }
  return objeto;
};

console.log(propriedadesCaixaAlta(objeto));

// 2. A segunda deve retornar os valores do objeto como texto corrido.
const valoresObjTextoCorrido = (objeto) => {
  texto = "";
  for (let propriedade in objeto) {
    texto += `${objeto[propriedade]} `;
  }
  return texto.trim();
};

console.log(valoresObjTextoCorrido(objeto));

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
function objetoECallback(objeto, funcao) {
    console.log(funcao(objeto));
  }

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
objetoECallback(objeto, propriedadesCaixaAlta)

// Repita o processo para a funcão 2
objetoECallback(objeto, valoresObjTextoCorrido)