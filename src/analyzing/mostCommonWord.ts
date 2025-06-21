export function mostCommonword(text : string) : string | null {


    if (typeof text !== "string") {
        throw new TypeError("Input must be a string");
    }

    const words = text.toLowerCase().match(/\b\w+\b/g);
    if(!words) {
        return null;
    }

    const frequencey : Record<string , number> = {};
    for(const word of words) {
        frequencey[word] = (frequencey[word] || 0) +1;
    }

    let maxWord : string | null = null;
    let maxCount = 0;

    for(const [word , count] of Object.entries(frequencey)){
        if(count > maxCount){
            maxCount = count;
            maxWord = word;
        }
    }

    return maxWord;

}