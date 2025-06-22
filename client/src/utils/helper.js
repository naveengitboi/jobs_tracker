export function getShortWord(sentence) {
    console.log("Senta", sentence)
    const words = sentence.split(' ');
    let output = "";
    if (words.length >= 2) {
        for (let i = 0; i < 2; i++) {
            output += words[i][0];
        }
    } else {
        output = words[0][0] + words[0][1];
    }
    return output;
}


export function getFullDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dateInString = "";
    [day, month, year].map((ele, i) => {
        if (ele < 10) {
            ele = "0" + String(ele);
        }
        dateInString += String(ele);
        if (i < 2) {
            dateInString += "-";
        }
    });
    return dateInString;
}




export const generateOtp = () => {
    let otp = "";
    for(let i = 0; i<6; i++){
        const randInt = Math.floor(Math.random()*9) + 1;
        otp+=String(randInt);
    }
    return otp;
}