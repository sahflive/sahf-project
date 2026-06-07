import React from 'react'
import Hunger1 from '../../../assets/hunger1.jpg';
import Hunger2 from '../../../assets/hunger2.jpg';
import './Hunger.css';
import { Link } from 'react-router-dom';
const Hunger = () => {
    return (
        <>
            <section className='hunger-wrapper-cont'>
                <div className="hunger-heading">
                    <h2>Hunger</h2>
                </div>
                <div className="hunger-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Hunger1} alt="Mother1" />
                            <h3>Human relief Bundle</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Hunger2} alt="Mother2" />
                            <h3>Emergency food packs</h3>
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

export default Hunger