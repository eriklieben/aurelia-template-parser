import { expect } from 'chai';
import { ElementData } from '../ElementData';
import { AsElementAttributeParser as sut } from './AsElementAttributeParser';

describe('AsElementAttributeParser', () => {
  
    it('must add attribute data for as-element attribute', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "router-view"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes).to.have.property('as-element');
    });

    it('must set the value of the as-element attribute as the attribute data value', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "router-view"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes['as-element'].value).to.equal('router-view');
    });

    it('must override the element name', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "router-view"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.name).to.equal('router-view');
    });

    it('must set the old name on prop overwrittenName', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "router-view"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.overwrittenName).to.equal('div');
    });
});