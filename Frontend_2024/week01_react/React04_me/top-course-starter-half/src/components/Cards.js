import React from 'react'
import Card from './Card'
const Cards = ({courses}) => {
  let allCourses=[];
  // yeah function sara courses ka data ek array mein la ka de raha ha jiss pehmm map lga saka
  const getCourses=()=>{
    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course)=>{
           allCourses.push(course);
      })
    })  
    return allCourses;
  }
  const coursesArray = getCourses();
  return (
    <div>
      {
       coursesArray.map((course)=>{
        return(
         <Card key={course.id} course={course}/>
        )
       })
      }
    </div>
  )
}

export default Cards