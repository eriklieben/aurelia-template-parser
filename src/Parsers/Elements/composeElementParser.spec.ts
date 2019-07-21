import { expect } from 'chai';
import { ComposeElementParser as sut } from './composeElementParser';

describe('ComposeElementParser', () => {
  
    it('must have the name compose', () => {
      
        // arrange
        const node:any = {
            hasAttribute: () => false
        };

        // act
        const result = sut(node);

        // assert
        expect(result.name).to.equal('compose');
    });

    it('must set the view-model property on the attributes object if it exists', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name) => name === 'view-model',
            getAttribute: () => 'viewModel',
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('view-model');
    });

    it('must set the view property on the attributes object if it exists', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name) => name === 'view',
            getAttribute: () => 'view',
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('view');
    });

    it('must set the model property on the attributes object if it exists', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name) => name === 'model',
            getAttribute: () => 'model',
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('model');
    });
});