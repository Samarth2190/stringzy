export function invertCase(str : string) : string{
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }
    
 return str 
 .split('')
 .map(char => 
    char === char.toUpperCase() ? char.toLowerCase():char.toUpperCase()
 )
 .join('');
}