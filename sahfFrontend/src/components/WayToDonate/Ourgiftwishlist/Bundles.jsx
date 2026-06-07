import React from 'react'
import {Link,} from 'react-router-dom'
import Bundle1 from '../../../assets/bundle1.jpg';
import './Bundles.css';
const Bundles = () => {
    return (
        <>
            <section className='bundle-wrapper-cont'>
                <div className="bundle-heading">
                    <h2>Bundles</h2>
                </div>
                <div className="bundle-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Bundle1} alt="Mother1" />
                            <h3>Newborn care package</h3>
                            <p>
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        {/* <div className="right-image-description-cont">
                            <img src={Bundle2} alt="Mother2" />
                            <h3>Emergency food packs</h3>
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

export default Bundles