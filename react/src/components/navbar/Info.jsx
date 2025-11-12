import React from 'react'

const Info = () => {
  return (
    <div className='info-section p-2'>
        <div className='container d-flex justify-content-between'>
            <div className='col-9 col-md-7 col-lg-5 col-xl-5 col-xxl-4'>
                <div className="row text-white">
                    <div className='d-flex justify-content-between'>
                        <div className="d-flex align-items-center">
                        <i class="fa-solid fa-location-dot"></i>
                        <a className='ms-2' href="">88 Road Broklyn Golden Street. New York</a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-envelope"></i>
                            <a className='ms-2' href="">support@agrios.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 col-md-5 col-lg-6 col-xl-7 col-xxl-8">
                <div className="row justify-content-end">
                    <div className="d-flex align-items-center justify-content-around info-icon">
                        <a className='' href=""><i class="fa-brands fa-twitter"></i></a>
                        <a className='' href=""><i class="fa-brands fa-facebook"></i></a>
                        <a className='' href=""><i class="fa-brands fa-pinterest-p"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info