import React from 'react'
import WaterEnergy1 from '../../../assets/waterenergy1.jpg';
import WaterEnergy2 from '../../../assets/waterenergy2.jpg';
import WaterEnergy3 from '../../../assets/waterenergy3.jpg';
import './WaterEnergy.css';
import { Link } from 'react-router-dom';
const WaterEnergy = () => {
  return (
    <>
      <section className='waterenergy-wrapper-cont'>
        <div className="waterenergy-heading">
          <h2>Water & Energy</h2>
        </div>
        <div className="waterenergy-main-cont">

          {/* section -1 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={WaterEnergy1} alt="Mother1" />
              <h3>Water well/ Hand pump</h3>
              <p>
              </p>
                <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            <div className="right-image-description-cont">
              <img src={WaterEnergy2} alt="Mother2" />
              <h3>Electricity arrangement</h3>
              <p>
              </p>
                 <Link className='btn' to='/home'>Donate Now</Link>
            </div>
          </section>

          {/* section -2 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={WaterEnergy3} alt="Mother1" />
              <h3>water filter</h3>
              <p>
              </p>
                 <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            {/* <div className="right-image-description-cont">
              <img src={WaterEnergy3} alt="Mother2" />
              <h3>water filter</h3>
              <p>
              </p>
              <button>Donate Now</button>
            </div> */}
          </section>

        </div>
      </section>
    </>
  )
}

export default WaterEnergy