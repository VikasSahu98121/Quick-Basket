import Carousel from 'react-bootstrap/Carousel';

export const Banner = () => {
  return (
    <div className="w-100  mb-2">
      <Carousel interval={3000} controls indicators fade>
        <Carousel.Item>
          <img
            src="/paan.webp"
            alt="Slide 1"
            className="d-block w-100"
            style={{
              height: '300px',
              objectFit: 'contain',
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
