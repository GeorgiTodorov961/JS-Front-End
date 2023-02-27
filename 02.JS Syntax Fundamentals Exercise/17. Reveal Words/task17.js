function revealWords(words, text){
    let textArr = text.split(' ');
    let index = -1;
    let word = words.split(', ')
    for( const wrd of textArr){
        index +=1;
        if(wrd.includes('*')){ 
            for(const wordsToReplace of word){
                if(wordsToReplace.length === wrd.length){
                    textArr.splice(index, 1, wordsToReplace)
                }
            }
        }
    }
    console.log(textArr.join(' '))
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')