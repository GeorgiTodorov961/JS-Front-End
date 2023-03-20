function colorize() {
    const table = document.querySelector('table');
    let tableText = table.textContent;
    console.log(tableText.split(', '))
    for(const i = 0; i < tableText.length; i++){
        console.log(tableText[i])
    }
    

}