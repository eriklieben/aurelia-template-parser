import { AttributeData } from "../AttributeData";
import { ElementData } from "../ElementData";

export function IfAttributeParser(elementData: ElementData, node: Element) {
    
    const attributeData = new AttributeData('if');

    attributeData.value = node.getAttribute('if');  
    elementData.name = attributeData.value;
    elementData.attributes['if'] = attributeData;
}