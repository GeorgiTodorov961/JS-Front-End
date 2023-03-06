function charInRange(firstChar, secondChar){
    let firstAsciiNum = firstChar.charCodeAt(0);
    let secondAsciiNum = secondChar.charCodeAt(0);
    let result = [];

    if (secondChar < firstChar){
        firstAsciiNum = secondChar.charCodeAt(0);
        secondAsciiNum = firstChar.charCodeAt(0);
    }

    for(let i = firstAsciiNum+1; i < secondAsciiNum; i++){
        const char = String.fromCharCode(i)
        result.push(char)
    }
    console.log(result.join(' '))
}


charInRange('z', 'a')