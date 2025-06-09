import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { src: img1, bg: '#b4455e' },
    { src: img2, bg: '#24aeb6' },
    { src: img3, bg: '#151111' },
    { src: img1, bg: '#b4455e' },
    { src: img2, bg: '#24aeb6' },
    { src: img3, bg: '#151111' },
  ];

  return (
    <>
      <section className='py-5'>
        <div className="container py-5 text-center">
          <h1 className="fw-bold pt-5">PORTFOLIO COMPONENT</h1>
          <div className="d-flex justify-content-center align-items-center my-3">
            <div style={{ width: '100px', height: '4px', background: '#2c3e50' }}></div>
            <i className="mx-3 fa-solid fa-star"></i>
            <div style={{ width: '100px', height: '4px', background: '#2c3e50' }}></div>
          </div>

          <div className="row g-4">
            {images.map((img, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ backgroundColor: img.bg, cursor: 'pointer' }}
                  onClick={() => setSelectedImg(img.src)}
                >
                  {/* Hover effect */}
                  <div className="hover-layer d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-plus text-white fs-1"></i>
                  </div>
                  <img
                    src={img.src}
                    alt={`Portfolio ${index}`}
                    className="img-fluid d-block mx-auto py-4"
                    style={{ width: '300px', borderRadius: '50%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal show={!!selectedImg} onHide={() => setSelectedImg(null)} centered>
        <Modal.Body className="text-center">
          <img src={selectedImg} alt="Full View" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
}

