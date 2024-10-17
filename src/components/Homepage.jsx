import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import the fade effect CSS
import './Homepage.css';

import { useNavigate } from 'react-router-dom';  
import ChatButton from './ChatButton';
import FooterR from './FooterR';

// Import images
import appleImage1 from '../assets/Copy of Apple (381).jpg';
import appleImage2 from '../assets/Copy of Apple (447).jpg';
import preWeddingImage1 from '../assets/preweddingpics/IMG-20240914-WA0019.jpg';
import preWeddingImage2 from '../assets/preweddingpics/IMG-20240914-WA0013.jpg';
import birthdayImage from '../assets/Birthday/IMG_9203.JPG';
import modelingImage from '../assets/modeling/LRM_EXPORT_156126289644336_20190412_230321069.jpeg';
import Testimonials from './Testimonials';
import modelingImages from '../assets/modeling/LRM_EXPORT_157500206535837_20190412_232614882 (1).jpeg';


const Homepage = () => {
  const navigate = useNavigate();  

  const handleBookNowClick = () => {
    navigate('/contact');  
  };
  const handlePortfolio = () => {
    navigate('/portfolio');  
  };

  return (
    <div className="homepage-swiper-container">
      <Swiper
        className="homepage-swiper"
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination, Autoplay, EffectFade]} // Include the EffectFade module
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade" // Set the effect to fade for smooth transitions
        speed={800} // Transition speed in milliseconds
        loop={true} // Enable looping of slides
      >
        {/* Swiper slides */}
        <SwiperSlide className="homepage-swiper-slide">
          <img src={appleImage1} alt="Slide 1" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={preWeddingImage1} alt="Slide 2" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={preWeddingImage2} alt="Slide 3" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={appleImage2} alt="Slide 4" className="homepage-slide-image" />
        </SwiperSlide>
        <SwiperSlide className="homepage-swiper-slide">
          <img src={modelingImages} alt="Slide 5" className="homepage-slide-image" />
        </SwiperSlide>
      </Swiper>
      <ChatButton />
      
      <div className="container">
    
        <div className="header">We cover all types of events</div>
    
    <div className="description">
      <p>Welcome to<b> Ajna clicks!</b> Called as the 3rd eye We are passionate about capturing the precious and significant moments in people's lives. Our joy and satisfaction come from seeing the beautiful smiles of individuals we've had the pleasure to photograph. Each click is a chance for us to preserve and celebrate those unique, joyous moments.</p>

    </div>
        <div className="buttonsss" onClick={handlePortfolio}>Snapshots</div>
    
</div>

      
      <div className="homepage-engagement-section">
        {/* Engagement Cards */}
        <div className="homepage-engagement-card">
          <img src={appleImage1} alt="Engagement Shoot 1" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Engagement Shoot</h2>
            <p className="engagement-description">
            We offer an unforgettable engagement photoshoot<br/> experience that captures the excitement and love <br/>of your relationship, creating lasting memories<br/> you'll hold dear forever.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card reverse">
          <img src={preWeddingImage1} alt="Engagement Shoot 2" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Pre-wedding Shoot</h2>
            <p className="engagement-description">We create a personalized pre-wedding photoshoot<br/> experience that captures the essence of your love<br/>  story, preserving the joy and excitement of this special<br/>time in stunning,timeless photos.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card">
          <img src={appleImage2} alt="Engagement Shoot 3" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Wedding Shoot</h2>
            <p className="engagement-description">
            We provide a unique wedding photoshoot experience<br/>  that will elevate your special day and capture<br/>  unforgettable memories you'll  cherish forever.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card reverse">
          <img src={birthdayImage} alt="Birthday Shoot" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Birthday Shoot</h2>
            <p className="engagement-description">
            Celebrate your special day with a fun and memorable<br/>  birthday photoshoot, creating lasting keepsakes you'll <br/> treasure forever.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>

        <div className="homepage-engagement-card">
          <img src={modelingImage} alt="Modeling" className="engagement-image" />
          <div className="engagement-content">
            <h2 className="engagement-heading">Modeling</h2>
            <p className="engagement-description">
            Enhance your portfolio with a professional modeling<br/>  photoshoot that captures your unique style and <br/> personality, delivering stunning images <br/> that make a lasting impression.
            </p>
            <button className="engagement-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </div>
      </div>
      <Testimonials />
      <FooterR />
    </div>
  );
};

export default Homepage;
