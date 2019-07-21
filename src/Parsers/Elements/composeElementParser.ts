import { AttributeData } from '../AttributeData';
import { ElementData } from "../ElementData";

export function ComposeElementParser(node: Element) {
    
    const elementData = new ElementData('compose');

    if (node.hasAttribute('view-model')) {
        const viewModelAttributeData = new AttributeData('view-model');
        viewModelAttributeData.value = node.getAttribute('view-model');
        elementData.attributes['view-model'] = viewModelAttributeData;
    }

    if (node.hasAttribute('view')) {
        const viewAttributeData = new AttributeData('view');
        viewAttributeData.value = node.getAttribute('view');
        elementData.attributes['view'] = viewAttributeData;
    }

    if (node.hasAttribute('model')) {
        const modelAttributeData = new AttributeData('model');
        modelAttributeData.value = node.getAttribute('model');
        elementData.attributes['model'] = modelAttributeData;
    }

    return elementData;
}