import React from 'react'
import Mother1 from '../../../assets/mother1.jpg';
import Mother2 from '../../../assets/mother2.jpg';
import Mother3 from '../../../assets/mother3.jpg';
import Mother4 from '../../../assets/mother4.jpg';
import './Mother.css';
import { Link } from 'react-router-dom';

const Mother = () => {
    return (
        <>
            <section className='mother-wrapper-cont'>
                <div className="mother-heading">
                    <h2>For Mother</h2>
                </div>
                <div className="mother-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Mother1} alt="Mother1" />
                            <h3>Nutrition for mother</h3>
                            <p>Healthy and balanced diet, Prenatal vitamins</p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Mother2} alt="Mother2" />
                            <h3>Support & services</h3>
                            <p>Birth Attendant, Partner or family support, Support groups or
                                counseling, Healthcare: Regular check-ups for both mother and
                                baby, Emotional Support: Coping with postpartum depression or
                                anxiety, Education: Learning about infant care, breastfeeding,
                                and child development.</p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Mother3} alt="Mother1" />
                            <h3>Hygiene</h3>
                            <p>Maternity pads, Perineal spray, Breast pads,
                                Nursing bras, Nipple cream</p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Mother4} alt="Mother2" />
                            <h3>Comfort</h3>
                            <p>Comfortable clothing, Pillows for support,
                                during breastfeeding, Heating pads or ice
                                packs</p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default Mother