import { AttributeData } from "../AttributeData";
import { ElementData } from "../ElementData";

export function RepeatForAttributeParser(elementData: ElementData, node: Element) {
    
    const attributeData = new AttributeData('repeat.for');

    attributeData.value = node.getAttribute('repeat.for');  
    elementData.overwrittenName = elementData.name;
    elementData.name = attributeData.value;

    elementData.attributes['repeat.for'] = attributeData;
}