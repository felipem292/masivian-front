import React from 'react';
import { shallow } from 'enzyme';
const { ComicCard } = require("../../components/comicCard");
import '@testing-library/jest-dom';
import { useFetch } from '../../hooks/useFetch';
jest.mock('../../hooks/useFetch');

describe('unit test comic card', () => {
    
    test('should render correctly', () => {
        useFetch.mockReturnValue({ data: null, loading: true, error: null });
        const wrapper= shallow(<ComicCard/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show card item', () => {
        const resp={
            img: "https://imgs.xkcd.com/comics/woodpecker.png", 
            title: "Woodpecker"
        };
        useFetch.mockReturnValue({ data: resp, loading: false, error: null });
        const wrapper= shallow(<ComicCard/>);
        const text= (wrapper.find('div').text());
        console.log(text);
        expect(wrapper).toMatchSnapshot();
        expect(text).not.toBe('loading....') ;
       
    })
    test('should show loading text', () => {
      
        useFetch.mockReturnValue({ data: null, loading: true, error: null });
        const wrapper= shallow(<ComicCard/>);
        const text= (wrapper.find('div').text());
        expect(text).toBe('loading....');       
       
    })
    
    
})
