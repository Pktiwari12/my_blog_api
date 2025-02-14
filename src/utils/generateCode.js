const generateCode = (length) =>{
    let code = '';
    for (let i = 0 ; i<length ; i++){
        code += Math.floor(Math.random()*10);
    }
    return code;
}

// console.log(generateCode(5));
export {generateCode};