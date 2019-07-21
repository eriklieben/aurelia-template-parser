import { expect } from 'chai';
import { LetElementParser as sut } from './letElementParser';

describe('LetElementParser', () => {
  
    it('must have the name let', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => []
        };

        // act
        const result = sut(node);

        // assert
        expect(result.name).to.equal('let');
    });

    it('must set the to-binding-context property on the attributes object if it exists', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => ['to-binding-context']
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('to-binding-context');
    });

    it('must set the value of the to-binding-context property to true', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => ['to-binding-context']
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['to-binding-context'].value).to.be.true;
    });

    it('must create attribute for attribute on node with .bind command', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => ['foo.bind'],
            getAttribute: () => ''
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('foo');
    });

    it('must create multiple attribute for attribute on node with .bind command', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => ['foo.bind', 'bar.bind'],
            getAttribute: () => ''
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('foo');
        expect(result.attributes).to.have.property('bar');
    });

    it('must create attribute for attribute on node with .custom command', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => ['foo.custom'],
            getAttribute: () => ''
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('foo');
    });
    
    it('must create attribute and set value for attribute on node with .bind command', () => {
      
        // arrange
        const node:any = {
            getAttributeNames: () => ['foo.bind'],
            getAttribute: () => 'bar'
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['foo'].value).to.equal('bar');
    });
});