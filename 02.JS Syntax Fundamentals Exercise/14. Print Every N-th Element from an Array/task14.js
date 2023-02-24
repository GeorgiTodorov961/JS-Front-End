function print(list, step){
    let result = [];
    for (let i = 0; i < list.length; i+=step){
        result.push(list[i])
    }
    return result
}


console.log(print(['1', '2', '3', '4', '5'], 6))