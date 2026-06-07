import React from 'react'
import Health1 from '../../../assets/health1.jpg';
import Health2 from '../../../assets/health2.jpg';
import Health3 from '../../../assets/health2.jpg';
import Health4 from '../../../assets/health4.jpg';
import Health5 from '../../../assets/health5.jpg';
import Health6 from '../../../assets/health6.jpg';
import Health7 from '../../../assets/health7.jpg';
import './Health.css';
import { Link } from 'react-router-dom';
const Health = () => {
    return (
        <>
            <section className='health-wrapper-cont'>
                <div className="health-heading">
                    <h2>Health</h2>
                </div>
                <div className="health-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Health1} alt="Mother1" />
                            <h3>Dental kit</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Health2} alt="Mother2" />
                            <h3>Food for malnourished child</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Health3} alt="Mother1" />
                            <h3>Hygeinic kit</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Health4} alt="Mother2" />
                            <h3>Mosquito nets</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>


                    {/* section -3 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Health5} alt="Mother1" />
                            <h3>Parasitic protection</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Health6} alt="Mother2" />
                            <h3>Urgent Medical Care</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -4 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Health7} alt="Mother1" />
                            <h3>Vaccination</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        {/* <div className="right-image-description-cont">
                            <img src={Health4} alt="Mother2" />
                            <h3>Goats</h3>
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

export default Health