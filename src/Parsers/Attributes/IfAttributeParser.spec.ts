import { expect } from 'chai';
import { ElementData } from '../ElementData';
import { IfAttributeParser as sut } from './IfAttributeParser';

describe('IfAttributeParser', () => {
  
    it('must add attribute data for if attribute', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "if"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes).to.have.property('if');
    });

    it('must set the value of the if attribute as the attribute data value', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "a === b"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes['if'].value).to.equal('a === b');
    });
});