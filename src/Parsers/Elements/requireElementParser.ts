import { ElementData } from "../ElementData";
import { AttributeData } from "../AttributeData";

export function RequireElementParser(node: Element) {
    
    const elementData = new ElementData('require');

    if (node.hasAttribute('as')) {
        const asAttributeData = new AttributeData('as');
        asAttributeData.value = node.getAttribute('as');
        elementData.attributes['as'] = asAttributeData;
    }

    if (node.hasAttribute('from')) {
        const fromAttributeData = new AttributeData('from');
        fromAttributeData.value = node.getAttribute('from');
        elementData.attributes['from'] = fromAttributeData;
    }

    return elementData;
}