function convertToObj(jsonText) {
    let jsonObj = JSON.parse(jsonText);
    for(let[key, value] of Object.entries(jsonObj)){
        console.log(`${key}: ${value}`)
    }
}


convertToObj('{"name": "Georgi", "age": 40, "town":"Sofia"}')