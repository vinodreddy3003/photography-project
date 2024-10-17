
.homepage-swiper-container {
    width: 100%;
    max-width: 1620px;
    position: relative;
}

.homepage-swiper {
   
    overflow: hidden;
}

.homepage-swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 115vh;
}

.homepage-slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}

.swiper-pagination-bullet {
    background: rgba(0, 0, 0, 0.6);
    width: 10px;
    height: 10px;
}

.swiper-pagination-bullet-active {
    background: #fff;
    width: 10px;
    height: 10px;
}

.homepage-text-section {
    text-align: center;
    padding: 50px 20px;
    color: #333;
}

.container {
    width: 100%;
    height: 100%;
    padding-top: 110px;
    padding-bottom: 51px;
    padding-left: 254px;
    padding-right: 253px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 55px;
    margin-top: 10px;
    
}

.header {
   
    padding: 8px 94px;
    border: 1px solid #6B707F;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: black;
    font-size: 40px;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    word-wrap: break-word;
    
}



.description p {
    
    color: black;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: center;
    gap: 30px;
    line-height: 25px;
   
    
   
}



.highlight {
    font-weight: 600;
}

.buttonsss {
    padding: 16px 64px;
    font-size: 32px;
    font-family: 'Playfair Display';
    color: white;
    border: 2px solid #BFD5C8;
    background-color: #BFD5C8;
    
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    display: block;
    margin: 0 auto;
}
.buttonsss:hover {
    background-color: #BFD5C8;
    color: #fff;
}



.homepage-engagement-section {
    display: flex;
    flex-direction: column;
    
    margin-top: 146px;
}

.homepage-engagement-card {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 12px;
    max-width: 1200px;
    margin: 20px auto;
    background-color: #fff;
}

.engagement-image {
    object-fit: cover;
    border-radius: 300px 300px 0 0;
    width: 447px;
    height: 544px;
    margin-bottom: 96px;
}

.engagement-content {
    flex: 1;
    margin-left: 128px;
    text-align: left;
}

.engagement-heading {
    font-family: 'Playfair Display';
    font-size: 60px;
    color: #b8953c;
    margin-bottom: 32px;
    text-align: center;
}

.engagement-description {
    font-family: 'Poppins';
    font-size: 20px;
    color: #333;
    margin-bottom: 40px;
    text-align: center;
}

.engagement-button {
    padding: 16px 64px;
    font-size: 32px;
    font-family: 'Playfair Display';
    color: #b8953c;
    border: 2px solid #b8953c;
    background-color: transparent;
    border-radius: 60px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    display: block;
    margin: 0 auto;
}

.engagement-button:hover {
    background-color: #c08e31;
    color: #fff;
}

.homepage-engagement-card.reverse {
    flex-direction: row-reverse;

}

.homepage-engagement-card.reverse .engagement-content {
    margin-left: 0;
    margin-right: 100px;
    

}

/* Phone version */
@media (max-width: 480px) {
    .homepage-swiper-slide {
        height: auto;
    }

    .container {
        padding-top: 80px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 40px;
        gap: 40px;
    }

    .header {
        font-size: 24px;
        padding: 10px 20px;
    }

    .description {
        font-size: 12px;
    }

    .buttonsss {
        padding: 12px 48px;
        font-size: 28px;
    }

    .homepage-engagement-section {
        gap: 20px; /* Reduced gap */
        margin-top: 80px; /* Reduced margin */
    }

    .homepage-engagement-card {
        flex-direction: column;
        max-width: 100%;
        margin: 10px auto; /* Reduced margin */
    }

    .engagement-image {
        width: 300px;
        height: 400px;
        margin-bottom: 40px;
    }

    .engagement-content {
        margin-left: 0;
        text-align: center;
        font-family: 'Playfair Display';
    }

    .engagement-heading {
        font-size: 2rem;
        margin-bottom: 20px; /* Reduced margin */
    }

    .engagement-description {
        font-size: 0.8rem;
        margin-bottom: 20px; /* Reduced margin */
    }

    .engagement-button {
        padding: 12px 28px;
        font-size: 14px;
        margin-bottom: 44px;
    }

    .homepage-engagement-card.reverse {
        flex-direction: column;
    }

    .homepage-engagement-card.reverse .engagement-content {
        margin-left: 0;
        margin-right: 0;
        text-align: center;
    }

    .homepage-engagement-card.reverse .engagement-image {
        width: 300px;
        height: 400px;
        margin-bottom: 40px;
    }

    .homepage-text-section {
        padding: 30px 15px; /* Reduced padding */
    }

    .homepage-engagement-card {
        padding: 15px;
    }
}

/* Small Phone version (max-width: 360px and max-height: 740px) */
@media (max-width: 360px) and (max-height: 740px) {
    .homepage-swiper-slide {
        height: auto;
    }
     .container {
        padding-top: 80px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 40px;
        gap: 40px;
    }

    .header {
        font-size: 24px;
        padding: 10px 20px;
    }

    

    .homepage-engagement-section {
        gap: 20px;
        margin-top: 60px; /* Reduced margin */
    }

    .homepage-engagement-card {
        flex-direction: column;
        padding: 10px; /* Reduced padding */
        margin: 10px auto; /* Reduced margin */
    }

    .engagement-image {
        width: 300px;
        height: 400px;
        margin-bottom: 40px;
    }

    .engagement-heading {
        font-size: 2rem;
        margin-bottom: 8px; /* Further reduced margin */
        font-family: 'Playfair Display';
    }

    .engagement-description {
        font-size: 0.75rem;
        margin-bottom: 20px; /* Further reduced margin */
    }

    .engagement-button {
        padding: 12px 28px;
        font-size: 14px;
        margin-bottom: 44px;
    }

    .homepage-text-section {
        padding: 20px 10px;
    }

    .homepage-engagement-card.reverse {
        flex-direction: column;
    }
    .homepage-engagement-card.reverse .engagement-image {
        width: 300px;
        height: 400px;
        margin-bottom: 40px;
    }
}

/* Tablet version */
@media (min-width: 481px) and (max-width: 1024px) {
    .homepage-swiper-container {
        width: 100%;
        max-width: 1000px;
    }

    .homepage-swiper-slide {
        height: 90vh;
    }

    .homepage-heading {
        font-size: 3rem;
        margin-top: 100px;
    }

    .homepage-description {
        font-size: 1.25rem;
        margin-top: 60px;
        padding: 0 20px;
    }

    .homepage-engagement-section {
        gap: 40px;
        margin-top: 120px;
    }

    .homepage-engagement-card {
        max-width: 100%;
        flex-direction: column;
        margin: 20px auto;
    }

    .engagement-image {
        width: 80%;
        height: auto;
        margin-bottom: 40px;
    }

    .engagement-heading {
        font-size: 3rem;
        margin-bottom: 24px;
    }

    .engagement-description {
        font-size: 1rem;
        margin-bottom: 24px;
    }

    .engagement-button {
        padding: 16px 48px;
        font-size: 1.5rem;
    }

    .swiper-pagination-bullet,
    .swiper-pagination-bullet-active {
        width: 9px;
        height: 9px;
    }

    .homepage-text-section {
        padding: 40px 20px;
    }
}
