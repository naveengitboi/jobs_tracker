import fs from "fs"


const loadTemplate = (filePath, replacements) => {
    let template = fs.readFileSync(filePath, 'utf-8');
    for(const key in replacements){
        const reg = new RegExp(`{{${key}}}`, 'g');
        template = template.replaceAll(reg, replacements[key]);
    }

    return template;
}





export {loadTemplate};