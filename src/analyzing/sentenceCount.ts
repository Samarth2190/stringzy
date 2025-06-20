export function sentenceCount(text : string) : number {
    const matches = text.match(/[^.!?]+[.!?](\s|$)/g);
    return matches ? matches.length : 0;
}