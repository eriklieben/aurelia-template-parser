import { AttributeData } from "../AttributeData";
import { ElementData } from "../ElementData";

export function CompileSpyAttributeParser(elementData: ElementData, node: Element) {
    
    const attributeData = new AttributeData('compile-spy');
    elementData.attributes['compile-spy'] = attributeData;
}