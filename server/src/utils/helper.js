
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


export const respondAsJson = ({res, statusCode=200, success=true, output}) => {
    return res.status(statusCode).json({
        success,
        output
    })
}

