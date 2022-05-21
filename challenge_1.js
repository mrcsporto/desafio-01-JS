let inArray = [false,'text_01',99,true,'33',285]
console.log(inArray)

for(let i = 0; i < inArray.length ; i++) {
    if(typeof inArray[i] == 'string' || typeof inArray[i] == 'number'){
        console.log(inArray[i])
    }
}

    

    
