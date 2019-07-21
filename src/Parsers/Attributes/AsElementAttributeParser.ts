import { AttributeData } from "../AttributeData";
import { ElementData } from "../ElementData";

export function AsElementAttributeParser(elementData: ElementData, node: Element) {
    
    const attributeData = new AttributeData('as-element');

    attributeData.value = node.getAttribute('as-element');  
    elementData.overwrittenName = elementData.name;
    elementData.name = attributeData.value;

    elementData.attributes['as-element'] = attributeData;
}