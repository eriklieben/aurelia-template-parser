import { ElementData } from "../ElementData";
import { AttributeData } from "../AttributeData";

export function TemplateElementParser(node: Element) {
    
    const elementData = new ElementData('template');

    if (node.hasAttribute('bindable')) {
        const bindableAttributeData = new AttributeData('bindable');
        bindableAttributeData.value = node.getAttribute('bindable');
        elementData.attributes['bindable'] = bindableAttributeData;
    }

    return elementData;
}