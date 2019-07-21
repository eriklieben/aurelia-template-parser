export class ElementData {

    constructor(public name: string) {
        
        
    }

    public overwrittenName?: string;

    public startOffset: number;
    public endOffset: number;

    public attributes = {};
}