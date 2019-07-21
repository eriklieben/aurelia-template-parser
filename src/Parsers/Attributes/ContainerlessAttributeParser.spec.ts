import { expect } from 'chai';
import { ElementData } from '../ElementData';
import { ContainerlessAttributeParser as sut } from './ContainerlessAttributeParser';

describe('ContainerlessAttributeParser', () => {
  
    it('must add attribute data for containerless attribute', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "containerless"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes).to.have.property('containerless');
    });
});