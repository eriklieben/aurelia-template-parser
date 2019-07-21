import { TemplateInformation } from './Parsers/templateInformation';
import { ElementData } from './Parsers/ElementData';
import { JSDOM } from 'jsdom';

import { RequireElementParser } from './Parsers/Elements/requireElementParser';
import { LetElementParser } from './Parsers/Elements/letElementParser';
import { ComposeElementParser } from './Parsers/Elements/composeElementParser';
import { RouterViewElementParser } from './Parsers/Elements/routerViewElementParser';

import { AsElementAttributeParser } from './Parsers/Attributes/AsElementAttributeParser';
import { RepeatForAttributeParser } from './Parsers/Attributes/RepeatForAttributeParser';
import { AttributeData } from './Parsers/AttributeData';

const templateInformation = new TemplateInformation();

// TODO: fix works for demo/ sample
const elementParser = {};
elementParser['REQUIRE'] = RequireElementParser;
elementParser['LET'] = LetElementParser;
elementParser['COMPOSE'] = ComposeElementParser;
elementParser['ROUTER-VIEW'] = RouterViewElementParser;
const attributeParser = {};
attributeParser['AS-ELEMENT'] = AsElementAttributeParser;
attributeParser['REPEAT.FOR'] = RepeatForAttributeParser;

// DUMMY WALK ALL NODES
let templateText = `<template>
<require from="nav-bar.html"></require>
<require from="bootstrap/css/bootstrap.css"></require>

<nav-bar router.bind="router"></nav-bar>
<let foo.bind="bla" to-binding-context hello.two-way="world"></let>

<div class="page-host" bla="foo">
  <main as-element="router-view" role="foo"></main>
  <custom-table>
    <foo></foo>\${bla}
  </custom-table>
</div>
</template>`;

// TODO: hack works for now, template tag is ignored in jsdom?
templateText = '<rootlate>' + templateText.substr(10, templateText.length - 11) + '</rootlate>';
const dom = new JSDOM(templateText,
{ includeNodeLocations: true }
);


const root = dom.window.document.getElementsByTagName('rootlate')[0];
var walk = function(node: Element) {
    for(let i = 0; i < node.childElementCount; i++) {
        const childNode = node.children[i];
        processNode(childNode);
        walk(childNode);
    }
}
walk(root);
console.log(JSON.stringify(templateInformation, null, 2));



function processNode(node: Element) {

    const loc = dom.nodeLocation(node);
    
    let elementData: ElementData;
    if (elementParser[node.tagName]) {
        
        // get elements that belong to it, and set them
        elementData = elementParser[node.tagName](node);
        
        // position
        elementData.startOffset = loc.startOffset;
        elementData.endOffset = loc.endOffset;

    } else {
        
        // create empty element data
        elementData = new ElementData(node.tagName.toLocaleLowerCase());
        
        // position
        elementData.startOffset = loc.startOffset;
        elementData.endOffset = loc.endOffset;
    }

    // 
    for (let attrName in loc.attrs) {

        const attrLocation = loc.attrs[attrName];   
        const func = attributeParser[attrName.toUpperCase()];
        const name = attrName.toLocaleLowerCase().split('.')[0];

        if (func) {
            // found parser for element
            func(elementData, node);

        } else if (elementData.attributes[name]) {

            // set attribute location
            elementData.attributes[name].startOffset = attrLocation.startOffset;
            elementData.attributes[name].endOffset = attrLocation.endOffset;
        } else {
            for(const attrName of node.getAttributeNames()) {
                if (attrName.indexOf('.') > - 1) {
        
                    const attributeData = new AttributeData(attrName);
                    attributeData.value = node.getAttribute(attrName);
        
                    const parts = attrName.split('.');
                    attributeData.bindingCommand = parts[1];
                    attributeData.name = parts[0];
                    attributeData.startOffset = attrLocation.startOffset;
                    attributeData.endOffset = attrLocation.endOffset;
                    elementData.attributes[attributeData.name] = attributeData;
        
                } else {
                    console.log('skipping attribute, not a binding: ', attrName);
                }
            }	
        }
    }
    templateInformation.elements.push(elementData);
}