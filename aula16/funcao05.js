function fatorial(num){
    if (num == 1){
        return 1
    }else{
        let res = num * fatorial(num - 1)
        return res
    }
}
console.log(fatorial(5))