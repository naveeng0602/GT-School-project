import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import ChooseSection from './ChooseSection';
import StartCoursesImg from '../utils/images/start-courses-img.jpg';
import FaqAccordion from './FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../utils/images/blog1-img.jpg'
import Blog2Img from '../utils/images/blog2-img.jpg';
import Blog3Img from '../utils/images/blog3-img.jpg';
import Blog4Img from '../utils/images/gallery1.jpg';
import Blog5Img from '../utils/images/gallery2.jpg';
import Blog6Img from '../utils/images/gallery3.jpg';
import Blog7Img from '../utils/images/gallery4.jpg';
// import Blog8Img from '../utils/images/blog3-img.jpg';

const blogs = [
    // {
    //     id: 1,
    //     img: [Blog1Img],
    //     title: 'Blog 1',
    //     // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    // },
    {
        id: 2,
        img: [Blog2Img],
        title: 'STUDENT IN LIBRARY'
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'STUDENT PASSED',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 4,
        img: [Blog4Img],
         title: 'FRIENDLY ENVIRONMENT',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
    ,
    {
        id: 5,
        img: [Blog5Img],
         title: 'LEARNING ENVIRONMENT',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 6,
        img: [Blog6Img],
         title: 'EXCITED STUDENT IN SCHOOL',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 7,
        img: [Blog7Img],
         title: 'GROUP STUDY IN SCHOOL LIFE',
        // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
];

const Home = () => {
  return (
    <>
     <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>GT Valley International School </h1>
                <p>At GT Valley International School, we are committed to providing an education that goes beyond textbooks and exams. <br></br>We believe in elevating the educational experience to empower students to become confident, capable, and compassionate <br></br>individuals who are ready to shape the world of tomorrow.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Exciting new course launching soon! Explore innovative topics and expand your horizons. Enroll today for success</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest Gallery </h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/gallery">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Gallery</button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
