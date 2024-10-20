import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      // link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'Correct Steps Consultancy LLP',
      role: 'Software Developer Intern (3 Months).',
      test: '– Utilized 20+ Git commands to optimize version control and collaboration. – Built Communication Channel with real-time chat Using Socket.io and React JS for 30+ users to make remote jobs easier. – Debugged BETA CLASSES - online Testing platform, resolving 10+ critical bugs.',
    },
    {
      id: 2,
      // link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'Brain Box Apps',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "– Developed a full-stack e-commerce site using React JS and Tailwind CSS, Node hence increasing interaction by 50%. – Independently Conducted market analysis across 18 areas to assess product viability",
    },
   
  ];
  return (
    <section id="testmonials">
      <h2>Experience</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials