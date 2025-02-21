function calculation(){
  const number = Number(document.querySelector("input#num").value);
  let result = document.querySelector("select#resTab");

  if (number == 0) {
    alert(`[ERRO] Check Entry Number! Try again later :)`);
  } else {
    /*for(let i = 0; i <= 10; i++){
        result.innerHTML+=(`${i} x ${number} = ${i*number}<br>`)
    }*/
    //item.text = `<strong>Tabuada do ${number}:<br></strong> `

    result.innerHTML = ''; // Limpa os resultados anteriores, incluindo a mensagem inicial

    let i = 0;
    while (i <= 10) {
      let item = document.createElement("option");
      item.text = `${i} x ${number} = ${i * number}`;
      item.value = `result${i}`//esse value é do option, onde ele vai chamar result 1, 2...
      result.appendChild(/*adicionar um elemento filho*/ item);
      i++;
    }
  }
}