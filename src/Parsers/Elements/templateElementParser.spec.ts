import { expect } from 'chai';
import { TemplateElementParser as sut } from './templateElementParser';

describe('TemplateElementParser', () => {
  
    it('must have the name template', () => {
      
        // arrange
        const node:any = {
            hasAttribute: () => false
        };

        // act
        const result = sut(node);

        // assert
        expect(result.name).to.equal('template');
    });

    it('must set the bindable property on the attributes object if it exists', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name) => name === 'bindable',
            getAttribute: () => '',
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('bindable');
    });

    it('must set the bindings on the attributes object if it exists', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name) => name === 'bindable',
            getAttribute: () => 'a,b',
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['bindable'].value).to.equal('a,b');
    });
});