import React from 'react'
import Income1 from '../../../assets/income1.jpg';
import Income2 from '../../../assets/income2.jpg';
import Income3 from '../../../assets/income2.jpg';
import Income4 from '../../../assets/income4.jpg';
import './Income.css';
import { Link } from 'react-router-dom';
const Income = () => {
    return (
        <>
            <section className='income-wrapper-cont'>
                <div className="income-heading">
                    <h2>Income Generation</h2>
                </div>
                <div className="income-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Income1} alt="Mother1" />
                            <h3>Hen</h3>
                            <p>
                            </p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Income2} alt="Mother2" />
                            <h3>Cows</h3>
                            <p>
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Income3} alt="Mother1" />
                            <h3>Vegetable/Fruit/tree seeds</h3>
                            <p>
                            </p>
                              <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Income4} alt="Mother2" />
                            <h3>Goats</h3>
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

export default Income