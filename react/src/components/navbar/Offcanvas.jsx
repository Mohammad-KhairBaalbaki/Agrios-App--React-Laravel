import React from "react"



const Offcanvas = () => {
  return (
    <div>
       <div class="dropdown mt-3">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Home
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown mt-3">
            <a class="btn" type="button" >
              About
            </a>
            
          </div>
          <div class="dropdown mt-3">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Services
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown mt-3">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Projects
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown mt-3">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
              News
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown mt-3">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Shop
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="dropdown mt-3">
            <a class="btn" type="button">
              Contact
            </a>
           
          </div>
    </div>
  )
}

export default Offcanvas