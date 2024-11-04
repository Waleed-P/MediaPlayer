import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import feature1 from '../assets/feature1.webp'
import feature2 from '../assets/feature2.webp'
import feature3 from '../assets/feature3.webp'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container '>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'> Get Started </Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='ms-5 img-fluid' src={landingImg} alt="landing Image" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant="top" height={'250px'} src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
              <Card className='p-2' style={{ width: '20rem' }}>
                <Card.Img variant="top" height={'250px'} src={feature2} />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                  </Card.Text>
                </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
              <Card className='p-2' style={{ width: '20rem' }}>
                <Card.Img variant="top" height={'250px'} src={feature3} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                  Users can manage the watch history of all videos.
                  </Card.Text>
                </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* links */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
        <h3 className='text-warning'>Simple, Fast and Powerful</h3>
        <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</p>

        <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</p>
        <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="497" height="360" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing