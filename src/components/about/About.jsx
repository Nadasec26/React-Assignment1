import React from 'react'

export default function About() {
  return <>
    <section className='bg-success text-white text-center py-5 mt-5'>
        <div className="container py-5">
            <h1 className="fw-bold pt-5">ABOUT COMPONENT</h1>
            <div className="d-flex justify-content-center align-items-center my-3">
                <div style={{ width: '100px', height: '4px', background: 'white' }}></div>
                <i class="mx-3 fa-solid fa-star"></i>
                <div style={{ width: '100px', height: '4px', background: 'white' }}></div>
            </div>
            <div className='d-flex my-3'>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
      </section>
    </>
}
