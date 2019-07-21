import { AttributeData } from "../AttributeData";
import { ElementData } from "../ElementData";

export function NaiveIfAttributeParser(elementData: ElementData, node: Element) {
    
    const attributeData = new AttributeData('naive-if');

    attributeData.value = node.getAttribute('naive-if');  
    elementData.name = attributeData.value;
    elementData.attributes['naive-if'] = attributeData;
}