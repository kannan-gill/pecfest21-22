import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const FullPageCarousel = ({ pageList }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {pageList?.length > 0 && (
        <div className="h-100 w-100">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {pageList.map((page, index) => (
              <Carousel.Item key={index}>
                <div className="w-100 vh-100">
                  {page}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default FullPageCarousel;