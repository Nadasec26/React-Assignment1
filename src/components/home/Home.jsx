import React from 'react'
import avatar from '../../assets/avataaars.svg' // غير المسار حسب الصورة

export default function Home() {
  return <>
    <section className='bg-success text-white text-center py-5'>
      <div className="container py-5">
        <img src={avatar} alt="avatar" className="rounded-circle mb-4 pt-5" width="200" />
        <h1 className="fw-bold">START FRAMEWORK</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div style={{ width: '100px', height: '4px', background: 'white' }}></div>
          <i class="mx-3 fa-solid fa-star"></i>
          <div style={{ width: '100px', height: '4px', background: 'white' }}></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  </>
}
