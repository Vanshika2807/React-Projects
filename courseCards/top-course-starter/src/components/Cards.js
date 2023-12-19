import React, { useState } from 'react'
import Card from './Card'


function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);

    //it returns a list of all courses received from api response
    function getCourses() {
        if(category == "All"){
            let allCourses = [];  
            //object.values(courses) will return the array having only values not keys
            Object.values(courses).forEach( array => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }

        else{
            //only specific category array is passed
            return courses[category];
        }
       
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
        getCourses().map( (course) => {
            return <Card key = {course.id} course = {course} likedCourses={likedCourses}  setLikedCourses={setLikedCourses} />
        })
    }
    </div>
  )
}

export default Cards 