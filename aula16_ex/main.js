let number = []//para poder ter acesso à lista, ela precisa ser uma var global para todos terem acesso

function inserindoNum() {
  let result = document.querySelector("select#opcoes");
  let elementInput = document.querySelector("input#numero").value;

  if (elementInput > 0) {
    value = elementInput;
    number.push(Number(value));

    let item = document.createElement("option");
    item.text = `Valor ${value} Adicionado`;
    result.appendChild(item);
  } else {
    alert("Elemento não encontrado");
  }
}

function finalizar() {

    let tamanho = number.length;
    let maior=number[0]
    let menor=number[0]
    let sum = 0

        for (let i = 0; i<number.length; i++){
            if (maior < number[i]){
                maior = number[i]
            }else if (menor > number[i]){
                menor = number[i]
            }
            sum += number[i]
        }
    const media = sum/number.length

    let output = document.querySelector('p#saida')
    output.innerHTML = `Ao todo, temos ${tamanho} números cadastrados<br> 
    O maior valor informado foi ${maior}<br> O menor valor informado foi ${menor}<br>
    Somando todos os valores, temos ${sum}<br> A media dos valores digitados é ${media} `
}
