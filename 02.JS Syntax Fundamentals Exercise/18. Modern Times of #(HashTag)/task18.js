function hashTag(text) {
    let words = text.split(' ');
    let specialWords = [];
    for(const word of words){
        if (word.includes('#') && word.length > 1){
            const newWord = word.replace('#', '')
            specialWords.push(newWord)
        }
    }
    for(wrd of specialWords){
        console.log(wrd)
    }
}



hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')