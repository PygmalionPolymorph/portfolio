import React, { useState } from 'react';
import './styles.css';

export const Gallery = ({ elements, detailView, listView }) => {
  const [active, setActive] = useState(0);
  return (
    <section className="gallery">
      {detailView(elements[active])}
      {elements.length <= 1 ? null : (
        <div className="gallery__list">
          {elements.map((elem, i) => (
            <button
              type="button"
              className="gallery__list-button"
              onClick={() => {
                setActive(i);
              }}
            >
              {listView(elem, i)}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
