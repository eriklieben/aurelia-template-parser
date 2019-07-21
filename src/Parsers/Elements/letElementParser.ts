import { ElementData } from "../ElementData";
import { AttributeData } from "../AttributeData";

export function LetElementParser(node: Element) {
    
    const elementData = new ElementData('let');

    for(const attrName of node.getAttributeNames()) {
        if (attrName === 'to-binding-context') {
            elementData.attributes['to-binding-context'] = new AttributeData('to-binding-context');
            elementData.attributes['to-binding-context'].value = true;
        } else if (attrName.indexOf('.') > - 1) {

            const attributeData = new AttributeData(attrName);
            attributeData.value = node.getAttribute(attrName);

            const parts = attrName.split('.');
            attributeData.bindingCommand = parts[1];
            attributeData.name = parts[0];

            elementData.attributes[attributeData.name] = attributeData;

        } else {
            console.log('skipping attribute, not a binding: ', attrName);
        }
    }

    return elementData;
}