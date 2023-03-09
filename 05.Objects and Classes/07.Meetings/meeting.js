function meetings(infoArr) {
    let meetingObj = {};
    for(let info of infoArr){
        let [key, value] = info.split(' ');
        if (meetingObj.hasOwnProperty(key)){
            console.log(`Conflict on ${key}!`)
        }else{
            meetingObj[key] = value;
            console.log(`Scheduled for ${key}`)
        }
    }
    for(let key in meetingObj){
        console.log(`${key} -> ${meetingObj[key]}`)
    }
}


meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])