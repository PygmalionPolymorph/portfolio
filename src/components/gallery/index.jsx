import React from 'react';
import './styles.styl';

export const Gallery = ({
  elements, detailView, listView, active,
}) => (
  <section className="gallery">
    {elements.length === 0 ? null : detailView(elements[active()])}
    {elements.length <= 1 ? null : (
      <div className="gallery__list">
        {elements.map((elem, i) => (
          <button
            type="button"
            className="gallery__list-button"
            onClick={() => {
              active(i);
            }}
          >
            {listView(elem, i)}
          </button>
        ))}
      </div>
    )}
  </section>
);
