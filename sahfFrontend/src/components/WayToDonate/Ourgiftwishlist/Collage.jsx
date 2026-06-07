import React from 'react'
import collage1 from '../../../assets/college1.jpg';
import collage2 from '../../../assets/college2.jpg';
import collage3 from '../../../assets/college2.jpg';
import collage4 from '../../../assets/college4.jpg';
import collage5 from '../../../assets/college5.jpg';
import collage6 from '../../../assets/college6.jpg';
import collage7 from '../../../assets/college7.jpg';
import collage8 from '../../../assets/college8.jpg';
import collage9 from '../../../assets/college9.jpg';
import collage10 from '../../../assets/college10.jpg';
import './Collage.css';
import { Link } from 'react-router-dom';
const Collage = () => {
  return (
    <>
      <section className='collage-wrapper-cont'>
        <div className="collage-heading">
          <h2>Collage & Training</h2>
        </div>
        <div className="collage-main-cont">

          {/* section -1 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={collage1} alt="Mother1" />
              <h3>1 year apprenticeship</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            <div className="right-image-description-cont">
              <img src={collage2} alt="Mother2" />
              <h3>Art classes</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
          </section>

          {/* section -2 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={collage3} alt="Mother1" />
              <h3>Baking classes</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            <div className="right-image-description-cont">
              <img src={collage4} alt="Mother2" />
              <h3>Bussiness skills</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
          </section>


          {/* section -3 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={collage5} alt="Mother1" />
              <h3>Baking classes</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            <div className="right-image-description-cont">
              <img src={collage6} alt="Mother2" />
              <h3>Bussiness skills</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
          </section>

          {/* section -4 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={collage7} alt="Mother1" />
              <h3>Baking classes</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            <div className="right-image-description-cont">
              <img src={collage8} alt="Mother2" />
              <h3>Bussiness skills</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
          </section>


          {/* section -5 */}
          <section className='section-1'>
            <div className="left-image-description-cont">
              <img src={collage9} alt="Mother1" />
              <h3>Baking classes</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
            <div className="right-image-description-cont">
              <img src={collage10} alt="Mother2" />
              <h3>Bussiness skills</h3>
              <p>
              </p>
              <Link className='btn' to='/home'>Donate Now</Link>
            </div>
          </section>

        </div>
      </section>
    </>
  )
}

export default Collage