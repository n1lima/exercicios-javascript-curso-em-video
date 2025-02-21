function verificador(){
    const data = new Date
    const ano = data.getFullYear()

    const formulAno = Number(document.querySelector('input#anoNascimento').value)
    const result = document.querySelector('div#resultado')
        if(formulAno.length == 0 || formulAno > ano ){
            window.alert('Verifique os dados e tente novamente')
        }else{
          const sexo = document.querySelectorAll('input[name ="genero"]') //const sexo = document.querySelectorAll('[name="genero"]');
          const idade = ano - formulAno

          let genero = ''

          const img = document.createElement('img')
          img.setAttribute('id', 'foto')

          if (sexo[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12){
              //criança
              img.setAttribute('src', 'img/babyBoy.jpg');
            }else if(idade < 21){
              //jovem
              img.setAttribute('src', 'img/boy.jpg')
            }else if(idade < 60){
              //adulto
              img.setAttribute('src', 'img/men.jpg')
            }else{
              //senhor
              img.setAttribute('src', 'img/oldMen.jpg')
            }
          }else if(sexo[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
              //criança
            img.setAttribute('src', 'img/babyGirl.jpg')
            } else if (idade < 21) {
              //jovem
            img.setAttribute('src', 'img/girl.jpg')
            } else if (idade < 60) {
              //adulto
            img.setAttribute('src', 'img/woman.jpg')
            } else {
              //senhora
            img.setAttribute('src', 'img/oldWoman.jpg')
           }
          }

          result.style.textAlign = 'center'
          result.innerHTML = `<p><strong>Detectamos ${genero}, com ${idade} anos</strong></p>`
          result.appendChild(img)
        }
   
   // document.querySelector('div#msg').innerHTML = `<p>A ${sexo} tem ${idade}</p>`
}

/* O jeito que o guanabara faz covertendo na hora o valor
if(formulAno.value.length == 0 || Number(formulAno.value) > ano)

  var idadde = ano - Number(formulAno.value)
  */