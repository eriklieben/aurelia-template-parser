import { expect } from 'chai';
import { RequireElementParser as sut } from './requireElementParser';

describe('RequireElementParser', () => {
  
    it('must have the name require', () => {
      
        // arrange
        const node:any = {
            hasAttribute: () => false
        };

        // act
        const result = sut(node);

        // assert
        expect(result.name).to.equal('require');
    });

    it('must create attribute as when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'as';
            },
            getAttribute: () => {
                return 'as-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('as');
    });

    it('must create attribute from when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'from';
            },
            getAttribute: () => {
                return 'from-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('from');
    });

    it('must set attribute as when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'as';
            },
            getAttribute: () => {
                return 'as-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['as'].value).to.equal('as-value');
    });

    it('must set attribute from when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'from';
            },
            getAttribute: () => {
                return 'from-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['from'].value).to.equal('from-value');
    });

});