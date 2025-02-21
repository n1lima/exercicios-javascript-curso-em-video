var idade = 71
console.log(`você tem ${idade}`)
if (idade < 16){
    console.log( 'não vota')
}else if(idade < 18 || idade >= 75){
        console.log("voto opcional")
    }else{
        console.log("voto obrigatorio")
    }
