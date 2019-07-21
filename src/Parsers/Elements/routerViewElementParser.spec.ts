import { expect } from 'chai';
import { RouterViewElementParser as sut } from './routerViewElementParser';

describe('RouterViewElementParser', () => {
  
    it('must have the name router-view', () => {
      
        // arrange
        const node:any = {
            hasAttribute: () => false
        };

        // act
        const result = sut(node);

        // assert
        expect(result.name).to.equal('router-view');
    });

    it('must create attribute layout-view when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'layout-view';
            },
            getAttribute: () => {
                return 'layout-view-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('layout-view');
    });

    it('must create attribute layout-view-model when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'layout-view-model';
            },
            getAttribute: () => {
                return 'layout-view-model-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('layout-view-model');
    });

    it('must create attribute layout-model when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'layout-model';
            },
            getAttribute: () => {
                return 'layout-model-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('layout-model');
    });

    it('must create attribute name when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'name';
            },
            getAttribute: () => {
                return 'name-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('name');
    });

    it('must create attribute swap-order when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'swap-order';
            },
            getAttribute: () => {
                return 'swap-order-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes).to.have.property('swap-order');
    });

    it('must create attribute layout-view when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'layout-view';
            },
            getAttribute: () => {
                return 'layout-view-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['layout-view'].value).to.equal('layout-view-value');
    });

    it('must create attribute layout-view-model when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'layout-view-model';
            },
            getAttribute: () => {
                return 'layout-view-model-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['layout-view-model'].value).to.equal('layout-view-model-value');
    });

    it('must create attribute layout-model when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'layout-model';
            },
            getAttribute: () => {
                return 'layout-model-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['layout-model'].value).to.equal('layout-model-value');
    });

    it('must create attribute name when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'name';
            },
            getAttribute: () => {
                return 'name-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['name'].value).to.equal('name-value');
    });

    it('must create attribute swap-order when it is set on the element', () => {
      
        // arrange
        const node:any = {
            hasAttribute: (name: string) => {
                return name === 'swap-order';
            },
            getAttribute: () => {
                return 'swap-order-value';
            }
        };

        // act
        const result = sut(node);

        // assert
        expect(result.attributes['swap-order'].value).to.equal('swap-order-value');
    });
});