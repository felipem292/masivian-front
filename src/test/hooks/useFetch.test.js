const { renderHook } = require("@testing-library/react-hooks")
const { useFetch } = require("../../hooks/useFetch")
import '@testing-library/jest-dom';
describe('unit test for useFetch', () => {
    test('should return default info', async() => {
        const{result, waitForNextUpdate}=renderHook(()=>useFetch('https://xkcd.com/614/info.0.json'));       
        const{data,loading,error}=result.current  
        await waitForNextUpdate();     
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });
    test('should return data from api',  async() => {
        const {result, waitForNextUpdate}=renderHook(()=>useFetch('https://xkcd.com/614/info.0.json'));  
      
        await waitForNextUpdate();        
        const {loading,error} =result.current;
        expect(loading).toBe(false);
        expect(error).toBe('no se pudo cargar la peticion');

       
    })

    
    
    
})
