import React from 'react';
import './AboutMe.css';
import FooterR from './FooterR';
import topImage from '../assets/Films/Frame 35.png';
import portraitImage1 from '../assets/pic6.jpg';
import portraitImage2 from '../assets/pic9.jpg';
import ChatButton from './ChatButton';

const AboutMe = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="top-image-section">
          <img src={topImage} alt="Camera Setup" className="top-image" />
        </div>

        <div className="content-section">
          <div className="text-section">
            <h2>ABOUT US</h2>
            <p>
            From a young age, we discovered our shared passion for photography while exploring nature and capturing fleeting moments. Armed with our first camera, we found joy in framing the world around us, transforming everyday scenes into compelling stories. As we continued this journey together, our passion deepened, and we honed our skills through practice and experimentation, learning the art of lighting, composition, and post-processing.

Over the years, we’ve achieved several milestones in our photography journey. Our work has been featured in local exhibitions, and we’ve collaborated with various brands for promotional campaigns. Winning awards in photography contests has further validated our efforts and fueled our ambition to grow even more.


            </p>
            <p>Looking ahead, our goals are to expand our portfolio by exploring new styles and subjects, particularly in portrait and documentary photography. We aspire to host our own exhibitions, share our knowledge through workshops, and connect with fellow photographers globally. Ultimately, we aim to use our photography to tell impactful stories and inspire others to see the beauty in everyday life.</p>
          </div>
          <div className="image-section">
            <img src={portraitImage1} alt="Photographer 1" className="portrait-image" />
            <img src={portraitImage2} alt="Photographer 2" className="portrait-image" />
          </div>
        </div>
      </div>
      <ChatButton />
      <FooterR />
    </>
  );
};

export default AboutMe;
