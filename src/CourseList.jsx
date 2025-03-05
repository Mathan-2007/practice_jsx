import Sasukee from './course'
import sasuke from './assets/sasuke.jpg'
import sasuke2 from './assets/sasuke2.png'
import sasuke3 from './assets/sasuke3.jpg'
import sasuke4 from './assets/sasuke4.jpg'
import { useEffect, useState } from 'react'

function CourseList(){
const [sasukes,setsasukes] =useState( [
        {
            id:1,
            name : "sasuke",
            skill:"rinnegan",
            image:sasuke
        },
        {
            id:2,
            name:"sasuke 2",
            skill:"sharingan",
            image:sasuke2
        },
        {
            id:3,
            name:"sasuke 3",
            skill:"susano",
            image:sasuke3
        },
        {
            id:4,
            name:"sasuke 4",
            skill:"chidori",
            image:sasuke4
        }
    ]);

    useEffect(()=>{
        console.log("Delete")
    });

    sasukes.sort((y,x) => y.id-x.id)

    const Sasukes = sasukes.filter((sasukes) => sasukes.id<5)

    const coursesList=Sasukes.map(
        (sasukes) => <Sasukee 
        key={sasukes.id}
        name={sasukes.name} 
        id={sasukes.id}
        skill={sasukes.skill} 
        image={sasukes.image}
        delete={handleDelete}/>

    )
return(<>
  {coursesList}
  </>)

  
  function handleDelete(id) {
    const Newcourse =sasukes.filter((sasuke)=> sasuke.id != id)
    setsasukes(Newcourse)
}
}
export default CourseList