import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Modeling.css';

// Importing images
import img1 from '../assets/wedding/Copy of Apple (396).jpg';
import img2 from '../assets/wedding/Copy of Apple (408).jpg';
import img3 from '../assets/wedding/Copy of Apple (410).jpg';
import img4 from '../assets/wedding/Copy of Apple (415).jpg';
import img5 from '../assets/wedding/Copy of Apple (416).jpg';
import img6 from '../assets/wedding/Copy of Apple (417).jpg';
import img7 from '../assets/wedding/Copy of Apple (418).jpg';
import img8 from '../assets/wedding/Copy of Apple (419).jpg';
import img9 from '../assets/wedding/Copy of Apple (420).jpg';
import img10 from '../assets/wedding/Copy of Apple (426).jpg';
import img11 from '../assets/wedding/Copy of Apple (428).jpg';
import img12 from '../assets/wedding/Copy of Apple (431).jpg';
import img13 from '../assets/wedding/Copy of Apple (432).jpg';

import FooterR from './FooterR';

// Array of imported images
const images = [
  img1, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13]

const Wedding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const navigate = useNavigate();  // Hook to navigate back

  const openModal = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <div className="image-container" key={index} onClick={() => openModal(img)}>
            <img loading="lazy" src={img} alt={`Modeling ${index}`} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={currentImage} alt="Selected" />
        </div>
      )}
      <FooterR />
    </>
  );
};

export default Wedding;
