import { expect } from 'chai';
import { ElementData } from '../ElementData';
import { NaiveIfAttributeParser as sut } from './NaiveIfAttributeParser';

describe('NaiveIfAttributeParser', () => {
  
    it('must add attribute data for naive-if attribute', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "naive-if"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes).to.have.property('naive-if');
    });

    it('must set the value of the naive-if attribute as the attribute data value', () => {
      
        // arrange
        const elementData = new ElementData('div');
        const node:any = {
            getAttribute: () => "a === b"
        };

        // act
        sut(elementData, node);

        // assert
        expect(elementData.attributes['naive-if'].value).to.equal('a === b');
    });
});