    import Sasukee from './course'
    import { useEffect, useState } from 'react'

    function CourseList(){
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