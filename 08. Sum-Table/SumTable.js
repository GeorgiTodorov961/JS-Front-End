function sumTable() {
    let result = 0;
    const table = Array.from(document.querySelectorAll('tbody tr td:nth-child(even)'));
    for (let key of Object.values(table)){
        result += Number(key.textContent) 
        };
    const sum = document.getElementById('sum');
    sum.textContent = result;
    
}