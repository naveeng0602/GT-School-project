import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../ChooseSection';
import Person1 from '../../utils/images/person1.jpg'
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';
import Footer from '../Footer';
import Header from '../Header';
import FaqAccordion from '../FaqAccordion';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <>
    <Header />
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                {/* <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.</p> */}
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <h1 className='justify-content-center'><b>FACILITY</b></h1>
                <br></br>
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>CAREER GUIDANCE</h2>
                    <p>At GT Valley International School, we understand the importance of empowering our students to make informed decisions about their future career paths. Our dedicated Career Guidance program is designed to provide personalized support, resources, and opportunities to help students explore their interests, skills, and aspirations, ensuring they are well-prepared for success in their chosen careers</p>
                    
                    <h3 className='mb-4 mb-lg-5'>MODERN CLASSROOM</h3>
                    <p>At GT Valley International School, we believe in creating innovative and engaging learning environments that prepare our students for the challenges and opportunities of the modern world. Our modern classrooms are designed to enhance the learning experience, foster collaboration, and inspire creativity. Step into our classrooms and discover the features that make them a hub of dynamic and interactive learning</p>
                    
                    <h3 className='mb-4 mb-lg-5'>UNLIMITED BOOKS IN LIBRARY</h3>
                    <p>At GT Valley International School, we believe in the transformative power of books and the endless possibilities they offer for learning, exploration, and imagination. Our library proudly presents an unlimited collection of books that cater to the diverse interests and academic needs of our students. With our wide range of books, students can embark on captivating journeys, expand their knowledge horizons, and discover new worlds. Explore the features of our unlimited books collection.</p>
                    
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>
        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default About;