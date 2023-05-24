import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '690px',
}

const slideImages = [
  {
    url: 'https://www.udacity.com/blog/wp-content/uploads/2021/03/Data-Science-and-ML-Careers_Blog.jpeg',
    caption: 'Slide 1'
  },
  {
    url: 'https://mediaandmore.co.uk/wp-content/uploads/2020/06/web-development-banner.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.ressources-marketing-internet.com/wp-content/uploads/2018/07/technologie.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    caption: 'Slide 4'
  },
  {
    url: 'https://images.unsplash.com/photo-1573165067541-4cd6d9837902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    caption: 'Slide 5'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;