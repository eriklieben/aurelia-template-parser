import { ElementData } from "../ElementData";
import { AttributeData } from "../AttributeData";

export function RouterViewElementParser(node: Element) {
    
    const elementData = new ElementData('router-view');

    if (node.hasAttribute('layout-view')) {
        const layoutViewAttributeData = new AttributeData('layout-view');
        layoutViewAttributeData.value = node.getAttribute('layout-view');
        elementData.attributes['layout-view'] = layoutViewAttributeData;
    }

    if (node.hasAttribute('layout-view-model')) {
        const layoutViewModelAttributeData = new AttributeData('layout-view-model');
        layoutViewModelAttributeData.value = node.getAttribute('layout-view-model');
        elementData.attributes['layout-view-model'] = layoutViewModelAttributeData;
    }

    if (node.hasAttribute('layout-model')) {
        const layoutModelAttributeData = new AttributeData('layout-model');
        layoutModelAttributeData.value = node.getAttribute('layout-model');
        elementData.attributes['layout-model'] = layoutModelAttributeData;
    }

    if (node.hasAttribute('name')) {
        const nameAttributeData = new AttributeData('name');
        nameAttributeData.value = node.getAttribute('name');
        elementData.attributes['name'] = nameAttributeData;
    }

    if (node.hasAttribute('swap-order')) {
        const swapOrderAttributeData = new AttributeData('swap-order');
        swapOrderAttributeData.value = node.getAttribute('swap-order');
        elementData.attributes['swap-order'] = swapOrderAttributeData;
    }    

    return elementData;
}
