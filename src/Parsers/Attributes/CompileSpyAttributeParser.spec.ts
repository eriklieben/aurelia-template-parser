import { expect } from 'chai';
import { ElementData } from '../ElementData';
import { CompileSpyAttributeParser as sut } from './CompileSpyAttributeParser';

describe('CompileSpyAttributeParser', () => {
  
    it('must add attribute data for compile-spy attribute', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "compile-spy"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes).to.have.property('compile-spy');
    });
});