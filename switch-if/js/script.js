var pos = prompt('Digite sua posição no rank:') // rank de 10 individuos
if(pos <= 10 ){
    switch(Number(pos)){
        case 1:
            alert('Você é o vencedo do rank!!!')
            break;
        case 2:
            alert('Você chegou muito próximo!')
            break;
        case 3:
            alert('Não foi dessa vez, boa sorte na proxima!')
            break
        default:
            alert('Infelizmente não foi dessa vez.')
    }
} else{
    alert('Essa posição não está localizado no ranking')
}