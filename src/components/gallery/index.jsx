import React, { useState } from 'react';
import './styles.css';

export default ({ images }) => {
  const [active, setActive] = useState(0);
  return (
    <section className="gallery">
      <img
        alt={`${images[active].name}: ${images[active].alt}`}
        src={images[active].src}
        className="gallery__active"
      />
      {images.length <= 1 ? null : (
        <div className="gallery__list">
          {images.map((img, i) => (
            <button
              type="button"
              className="gallery__list-button"
              onClick={() => {
                setActive(i);
              }}
            >
              <img
                alt={`Painting #${i}: ${img.title}`}
                className="gallery__list-image"
                src={img.src}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
