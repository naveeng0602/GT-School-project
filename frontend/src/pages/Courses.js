import React from 'react';
 import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../utils/images/art-course.jpg';
import BusinessCourseImg from '../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../utils/images/education-course.jpg';
import HealthcareCourseImg from '../utils/images/healthcare-course.jpg';
import LawCourseImg from '../utils/images/law-course.jpg';
import MusicCourseImg from '../utils/images/music-course.jpg';
import SportCourseImg from '../utils/images/sport-course.jpg';
import FaqAccordion from './FaqAccordion';
import Header from './Header';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'ARTS',
        description: 'At GT Valley International School, we recognize the importance of nurturing creativity, self-expression, and artistic talent in our students. After completing 10th grade, students have the opportunity to immerse themselves in the world of art, exploring various art forms, developing their skills, and paving the way for a fulfilling and inspiring career in the arts.'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'COMMERCE',
        description: 'At GT Valley International School, we recognize the significance of commerce education in preparing students for dynamic and rewarding career paths in the world of business, finance, and entrepreneurship. After completing 10th grade, our students have the opportunity to explore a comprehensive range of commerce courses that equip them with essential skills and knowledge for success in the business world.'
    },
    
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'MATHEMATICES',
        description: 'At GT Valley International School, we believe that the study of mathematics goes beyond the classroom, fostering problem-solving skills, analytical thinking, and logical reasoning essential for success in various fields. After completing 10th grade, our students have the opportunity to explore a diverse range of mathematics courses that open doors to exciting career paths and higher education options'
    },
    {
        id: 4,
        img: [HealthcareCourseImg],
        title: 'SCIENCE',
        description: 'At GT Valley International School, we believe that science education is the foundation for innovation, discovery, and progress. After completing 10th grade, our students have the opportunity to delve deeper into the fascinating world of science, explore various scientific disciplines, and pursue diverse career paths in science, engineering, medicine, research, and beyond.'
    },
   
    {
        id: 5,
        img: [MusicCourseImg],
        title: 'Music Course',
        description: 'Students may learn about different genres of music, famous composers and musicians, musical notation, harmony, rhythm, and melody. They may also have opportunities to develop their skills in playing instruments, singing, and even music production.'
    },
    {
        id: 6,
        img: [SportCourseImg],
        title: 'Sport Course',
        description: 'Sports courses in schools typically cover a range of activities aimed at promoting physical fitness, teamwork, and sportsmanship.'
    },
];

function Courses() {
  return (
    <>
    <Header></Header>
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>From foundational subjects like mathematics, science, and language arts to enriching experiences in fine arts, physical education, and career and technical education, our curriculum empowers learners to explore, discover, and grow. </p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
    </>
  )
}

export default Courses;