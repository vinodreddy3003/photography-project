import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const reviews = [
    {
      name: "Snigdha laasya & Sudarshan",
      review: "We were also thrilled with how quickly Sairam and Bhavani edited the photos and got them to us, allowing us to share those beautiful memories with our family and friends right away.We would definitely hire them again—not just for weddings, but for any important events that need a truly talented photographer",
      stars: 5,
      fullReview: "Our Wedding photos were just gorgeous, thanks to Sairam. He was very professional yet made my husband and me feel very relaxed. So much so that we really had a lot of fun on our wedding day! We were also really happy with the results, and the way he captured the moments was exceptional."
    },
    {
      name: "Gayathri & Pramod",
      review: "We had an incredible experience with our pre-wedding photoshoot! Sairam and Bhavani made us feel completely comfortable and guided us through every step, capturing the essence of our relationship perfectly. The photos came out beyond our expectations—natural, romantic, and full of emotion. Their attention to detail and creativity really shined through in every shot. We couldn’t be happier with the results and highly recommend them to anyone looking for stunning photography!",
      stars: 5,
      fullReview: "Wow...wow! The best photographer I have ever hired. I am so in love with all of my photographs that I can't thank him enough, he made the most special moment of my life even more special by capturing it in a way I never thought possible."
    },
    {
      name: "Anushtha",
      review: "I had an incredible experience with Sairam and Bhavani for my modeling photoshoot! They made me feel comfortable and confident throughout the entire session. Their creativity and attention to detail really brought out my best features, and the photos turned out stunning. The direction they gave was spot on, and they knew exactly how to capture the perfect lighting and angles. I’m thrilled with the final images and can’t wait to add them to my portfolio. Highly recommended for any model looking to elevate their portfolio",
      stars: 5,
      fullReview: "Sairam is an absolute artist and complete professional! He did so much more than just photography for our special day and I can very comfortably say our day would not be nearly as amazing if it weren’t for him. His attention to detail and creativity made everything perfect."
    },
    {
      name: "Emma",
      review: "Our birthday photoshoot with Sairam and Bhavani was absolutely amazing! They captured every special moment with creativity and attention to detail, making the entire experience so much fun. The photos turned out vibrant and full of life, perfectly reflecting the joy of the day. We couldn't have asked for better photographers, and we’ll definitely be coming back for future events! Highly recommended!",
      stars: 5,
      fullReview: "Sairam is not only a world-class photographer but he is a born wedding/event planner with an innate sense of what works and doesn’t work in any particular situation. He of all service providers had the best input in terms of order and flow of the event."
    },
   
    
  ];

  const handleReadMore = (review) => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // Stop autoplay when reading a review
    }
    setSelectedReview(review);
  };

  const handleCloseModal = () => {
    setSelectedReview(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Heartfelt Testimonials</h2>
      <p className="testimonials-subtitle">
        Explore rave reviews from treasured clients. Find out why couples are over the moon about their wedding photography experience.
      </p>
      <Swiper
  ref={swiperRef} // Set the ref here
  className="homepage-swiper testimonials-swiper" // Combine class names if needed
  spaceBetween={10}
  slidesPerView={1}
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 7000, disableOnInteraction: false }}
  loop={true} 
>
  {reviews.map((review, index) => (
    <SwiperSlide key={index} className="testimonial-slide">
      <div className="testimonial-card">
        <div className="stars">
          {'★'.repeat(review.stars)}
        </div>
        <p>{review.review}</p>
        
        <h4>{review.name}</h4>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      {selectedReview && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close-icon" onClick={handleCloseModal}>&times;</span>
            <h4>{selectedReview.name}</h4>
            <p>{selectedReview.fullReview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
