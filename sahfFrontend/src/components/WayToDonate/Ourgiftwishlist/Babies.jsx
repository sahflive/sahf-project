import React from 'react'
import Babie1 from '../../../assets/babie1.jpg';
import Babie2 from '../../../assets/babie2.jpg';
import Babie3 from '../../../assets/babie3.jpg';
import Babie4 from '../../../assets/babie4.jpg';
import Babie5 from '../../../assets/babie5.jpg';
import Babie6 from '../../../assets/babie6.jpg';
import './Babies.css';
import { Link } from 'react-router-dom';

const Babies = () => {
    return (
        <>
            <section className='babies-wrapper-cont'>
                <div className="babie-heading">
                    <h2>For Babie</h2>
                </div>
                <div className="babies-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Babie1} alt="babie1" />
                            <h3>Nutrients for babies</h3>
                            <p>Breast milk, Baby bottles and nipples (if formula-feeding), Bottle warmer, Bottle sterilizer</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Babie2} alt="babie2" />
                            <h3>Sleep</h3>
                            <p>Crib or bassinet, Crib mattress, Crib sheets, Blankets,<br /> Swaddles</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Babie3} alt="babie1" />
                            <h3>Diapering</h3>
                            <p>Diapers, Diaper wipes, Changing pad, Diaper rash cream</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Babie4} alt="babie2" />
                            <h3>Clothing</h3>
                            <p>Onesies, Bodysuits, Sleep sacks, Hats, Socks, Mittens </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -3 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Babie5} alt="babie1" />
                            <h3>Hygiene</h3>
                            <p>Baby shampoo, Baby soap, Baby lotion, Baby brush and comb, Nail clippers, Cotton balls and swabs</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Babie6} alt="babie2" />
                            <h3>Comfort</h3>
                            <p>Pacifier, Teethers, Rattles, Soft toys</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -4 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Babie1} alt="babie1" />
                            <h3>Babies medical care</h3>

                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        {/* <div className="right-image-description-cont">
                            <img src={Babie2} alt="babie2" />
                            <h3>Sleep</h3>
                            <p>Crib or bassinet, Crib mattress, Crib sheets, Blankets,<br /> Swaddles</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div> */}
                    </section>
                </div>
            </section>
        </>
    )
}

export default Babies