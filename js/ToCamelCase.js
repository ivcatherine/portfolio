function toCamelCase(str) {
    let newName = "";
    let chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        if ((chars[i] !== "-") && (chars[i] !== "_")){
            newName = newName.concat(chars[i]);
        }else{
            if (i !== chars.length-1) {
                chars[i+1] = chars[i+1].toUpperCase();
            }
        }
    }
    return newName;
}
let name = toCamelCase("super-hero_NAME");
console.log(name);