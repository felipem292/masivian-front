import { useEffect, useRef } from "react";
import { useState } from "react"

export const useFetch = (url) => {
    
    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null });
    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {


                if (isMounted.current) {

                    setTimeout(()=>{
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    },1000)
                   
                }

            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'no se pudo cargar la peticion'
                })
            })
    }, [url])
    return state



}
