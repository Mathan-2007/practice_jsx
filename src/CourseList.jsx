    import Sasukee from './course'
    import { useEffect, useState } from 'react'
    import useFetch from './useFetch'
    
    function CourseList(){
   
const[sasukes,error]=useFetch('http://localhost:3000/sasukes')
        // sasukes.sort((y,x) => y.id-x.id)

        // const Sasukes = sasukes.filter((sasukes) => sasukes.id<5)

        if(!sasukes){
            return(
                <>
                {!error && <p>Loading...</p>}
                <p>{error}</p>
                </>
                )}

        const coursesList=sasukes.map(
            (sasukes) => <Sasukee 
            key={sasukes.id}
            name={sasukes.name} 
            skill={sasukes.skill} 
            image={sasukes.image}
            delete={handleDelete}/>

        )
    return(<>
    {coursesList}
    </>)

    
    function handleDelete(event) {
        event.target.parentElement.remove()
    }
    }
    export default CourseList