import React from 'react';
import CourseSlider from '../Components/CourseSlider/CourseSlider';


import HomeTop from '../Components/HomeTop/HomeTop';
import JobSec from '../Components/JobSec/JobSec';
import Work from '../Components/Work/Work';
const Home = () => {
    return (
       <div>
        <HomeTop></HomeTop>
       <JobSec></JobSec>
       <Work></Work>
       <CourseSlider></CourseSlider>
  
       </div>
         );
};

export default Home;