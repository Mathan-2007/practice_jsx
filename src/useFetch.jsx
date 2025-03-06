import { useState,useEffect } from "react";

const useFetch =((url)=>{
    
    const [sasukes,setsasukes] =useState(null);
    const [error,seterror]=useState(null)

    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:3000/sasukes')
    .then(response => {console.log(response);
        if(!response.ok){
            throw Error ("couldn't retrive")
        }
                    return response.json()
    }).then(data=>setsasukes(data))
    .catch((error)=>{
        console.log(error.message)
        seterror(error.message)
    })
        }, 1000);
        
    },[]);

    return [sasukes,error]
})

export default useFetch