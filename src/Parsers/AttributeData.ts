export class AttributeData {

    constructor(public name: string) {
    }

    public bindingCommand: string;
    public value: string;

    public startOffset: number;
    public endOffset: number;
}