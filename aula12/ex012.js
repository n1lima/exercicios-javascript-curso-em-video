var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatmente ${hora} horas`)
if (hora >= 5 && hora < 12){
    console.log('Bom dia!')
}else if(hora <= 17 && hora >= 12){
    console.log('Boa tarde!')
}else if (hora >= 0 && hora < 5){
    console.log('Boa Madrugada!')
}else {
    console.log("Boa noite!!")
}