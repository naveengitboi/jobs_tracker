export function getShortWord(sentence){
    console.log("Senta", sentence)
    const words = sentence.split(' ');
    let output="";
    if(words.length >= 2){
        for(let i = 0; i<2;i++){
            output += words[i][0];
        }
    }else{
        output = words[0][0]+words[0][1];
    }
    return output;
}

