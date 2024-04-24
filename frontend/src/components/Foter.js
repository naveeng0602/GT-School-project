// import React from 'react'
import './footer.css';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Foter() {
  return (
    <>
    <Footer bgDark>
      <div className="main">
        <div className="content">
          <div>
            <Footer.Title title="CONTACT"className='title' />
            <Footer.LinkGroup className='col'>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Services</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="RECENT POSTS" className='title'/>
            <Footer.LinkGroup className='col'>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">Gallery</Footer.Link>
             </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="IMPORTANT LINKS" className='title' />
            <Footer.LinkGroup className='col'>
              <Footer.Link href="#">Message From Director</Footer.Link>
              <Footer.Link href="#">Departments</Footer.Link>
              <Footer.Link href="#">Team</Footer.Link>
            </Footer.LinkGroup>
          </div>
         
        </div>
        <div className='r1'>
          <Footer.Copyright href="#" by=" All right reserved GT Valley School Kateya Gopalganj Bihar™" year={2022} />
          <div className="r3">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  
    
    </>
  ) 
}
