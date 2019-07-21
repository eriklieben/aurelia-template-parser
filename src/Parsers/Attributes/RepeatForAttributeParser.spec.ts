import { expect } from 'chai';
import { ElementData } from '../ElementData';
import { RepeatForAttributeParser as sut } from './RepeatForAttributeParser';

describe('RepeatForAttributeParser', () => {
  
    it('must add attribute data for repeat.for attribute', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "repeat.for"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes).to.have.property('repeat.for');
    });

    it('must set the value of the repeat.for attribute as the attribute data value', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "number of [1,2,3]"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes['repeat.for'].value).to.equal('number of [1,2,3]');
    });
});