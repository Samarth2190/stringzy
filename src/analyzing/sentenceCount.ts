export function sentenceCount(text : string) : number {

    if (typeof text !== "string") {
        throw new TypeError("Input must be a string");
    }

    const matches = text.match(/[^.!?]+[.!?](\s|$)/g);
    return matches ? matches.length : 0;
}