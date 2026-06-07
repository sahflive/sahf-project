import React from 'react'
import Children1 from '../../../assets/children1.jpg';
import Children2 from '../../../assets/children2.jpg';
import Children3 from '../../../assets/children2.jpg';
import Children4 from '../../../assets/children4.jpg';
import './Children.css';
import { Link } from 'react-router-dom';
const Children = () => {
    return (
        <>
            <section className='children-wrapper-cont'>
                <div className="children-heading">
                    <h2>Children at Risk</h2>
                </div>
                <div className="children-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Children1} alt="Mother1" />
                            <h3>Disaster relief</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Children2} alt="Mother2" />
                            <h3>Home repair</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Children3} alt="Mother1" />
                            <h3>Long term shelter</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Children4} alt="Mother2" />
                            <h3>Rescue from a dangerous situation</h3>
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

export default Children