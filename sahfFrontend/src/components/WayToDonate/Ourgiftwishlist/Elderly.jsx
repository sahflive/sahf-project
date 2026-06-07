import React from 'react'
import Elderly1 from '../../../assets/elderly1.jpg';
import Elderly2 from '../../../assets/elderly2.jpg';
import Elderly3 from '../../../assets/elderly3.jpg';
import Elderly4 from '../../../assets/elderly4.jpg';
import './Elderly.css';
import { Link } from 'react-router-dom';
const Elderly = () => {
    return (
        <>
            <section className='elderly-wrapper-cont'>
                <div className="elderly-heading">
                    <h2>For Elderly</h2>
                </div>
                <div className="elderly-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Elderly1} alt="Mother1" />
                            <h3>Mobility Aids</h3>
                            <p>Walking Aids: Canes, walkers, and rollators.
                                Wheelchairs: Manual or motorized, depending on individual needs.
                            </p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Elderly2} alt="Mother2" />
                            <h3>Hearing Aids</h3>
                            <p>Hearing Aids: To enhance auditory capabilities.
                                Magnifiers: To improve visual acuity.
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Elderly3} alt="Mother1" />
                            <h3>Nutrients</h3>
                            <p>
                            </p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Elderly4} alt="Mother2" />
                            <h3>Clothing</h3>
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

export default Elderly