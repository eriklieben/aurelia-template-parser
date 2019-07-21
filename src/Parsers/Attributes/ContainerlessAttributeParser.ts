import { AttributeData } from "../AttributeData";
import { ElementData } from "../ElementData";

export function ContainerlessAttributeParser(elementData: ElementData, node: Element) {
    const attributeData = new AttributeData('containerless');
    elementData.attributes['containerless'] = attributeData;
}