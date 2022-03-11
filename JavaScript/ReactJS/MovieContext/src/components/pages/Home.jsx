import React from 'react'

function Home() {
  return (
    <div>
       <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Punny headline</h1>
          <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
          <a className="btn btn-outline-secondary" href="#">Coming soon</a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  )
}

export default Home