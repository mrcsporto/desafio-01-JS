let vendas = [100, 40.3, 51.4 , 200, 49.9, 30]
let comissao = 0
let meta = 150

for (let i = 0; i < vendas.length; i++) {
    comissao += vendas[i]*0.05
}

if(comissao >= meta){
    console.log('O vendedor atingiu a meta!')
} else {
    console.log('O vendedor NÃO atingiu a meta!')
}
