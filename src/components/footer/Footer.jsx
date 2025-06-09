import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
    <footer className="text-white text-center pt-5 pb-3">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">LOCATION</h5>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3">
              <Link to='' className="btn btn-outline-light btn-social rounded-circle">
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link to='' className="btn btn-outline-light btn-social rounded-circle">
                <i class="fa-brands fa-twitter"></i>
              </Link>
              <Link to='' className="btn btn-outline-light btn-social rounded-circle">
                <i class="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link to='' className="btn btn-outline-light btn-social rounded-circle">
                <i class="fa-brands fa-dribbble"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">ABOUT FREELANCER</h5>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.
              </p>
          </div>
        </div>
      </div>
    </footer>
    <div className="bg-dark text-white text-center py-2">
        Copyright © Your Website 2021
      </div>
  </>
}
