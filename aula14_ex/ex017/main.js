function calculation(){
    const numStart = Number(document.querySelector('input#numStart').value)
    const numEnd = Number(document.querySelector('input#numEnd').value)
    const stepInput = document.querySelector('input#step')
    const result = document.querySelector('div#result')

    //const emojiStep = '👉';
    //const emojiEnd = '🏁';

    if(numStart == 0 || numEnd == 0 || stepInput.value.length == 0){ //if(numStart.value.length == 0)
        alert('[ERROR] Invalid Enter Number! Verify and try again later :)')
        return
        
      } else {
        let step = Number(stepInput.value)
        if(step <= 0){
          window.alert("[ERRO] Invalid Step! Considering step 1");
          step = 1
          }

          result.innerHTML = '<p>Counting:<br></p>';

          // Maior para o menor
          if(numStart > numEnd){
            for(let i = numStart; i >= numEnd; i -= step){
              result.innerHTML += `${i} \u{1F449}`;//`${emojiStep}` seria assim com a var dos emojis
            }
          //Menor para o maior
        } else {
            for (let i = numStart; i <= numEnd; i += step) {
              result.innerHTML += `${i} \u{1F449}`;
            }
          }

         result.innerHTML += `\u{1F3C1}`;

      }
}