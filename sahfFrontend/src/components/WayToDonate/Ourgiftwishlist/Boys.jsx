import React from 'react'
import Boy1 from '../../../assets/boy1.jpg';
import Boy2 from '../../../assets/boy2.jpg';
import Boy3 from '../../../assets/boy3.jpg';
import Boy4 from '../../../assets/boy4.jpg';
import Boy5 from '../../../assets/boy5.jpg';
import Boy6 from '../../../assets/boy6.jpg';
import Boy7 from '../../../assets/boy7.jpg';
import Boy8 from '../../../assets/boy8.jpg';
import './Boys.css';
import { Link } from 'react-router-dom';
const Boys = () => {
    return (
        <>
            <section className='boy-wrapper-cont'>
                <div className="boy-heading">
                    <h2>For Boys/Men</h2>
                </div>
                <div className="boy-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Boy1} alt="Mother1" />
                            <h3>Nutrients</h3>
                            <p>Nutrition: A balanced diet rich in essential
                                nutrients to fuel their growing bodies.</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Boy2} alt="Mother2" />
                            <h3>Hygiene</h3>
                            <p>Hygiene: Access to clean water, soap, and other hygiene products.
                                Hygiene Essentials: Body wash, Shampoo, Conditioner,
                                Toothbrush, Toothpaste, Deodorant, Shaving cream and razor (as needed)
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Boy3} alt="Mother1" />
                            <h3>Personal care</h3>
                            <p>Hair Care: Hairbrush/comb, Hair styling products
                                (gel, pomade, etc.) as needed <br />

                                Skin Care: Facial cleanser and moisturizer (as needed), Sunscreen
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Boy1} alt="Mother2" />
                            <h3>Apparel; everyday wear</h3>
                            <p>Everyday Wear: T-shirts Shirts, Pants/Jeans, Shorts,
                                Underwear, Socks
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -3 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Boy5} alt="Mother1" />
                            <h3>Outwear</h3>
                            <p>Jackets, Hoodies, Sweaters
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Boy6} alt="Mother2" />
                            <h3>Footwear</h3>
                            <p>Sneakers, Athletic shoes, Boots (as needed), Sandals
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>


                    {/* section -4 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Boy7} alt="Mother1" />
                            <h3>School supplies</h3>
                            <p>Notebooks, Pens, Pencils, Erasers, Highlighters,
                                Calculators, Rulers, Backpack, Water, Bottle, Lunchbox,
                                Wallet, Watch, Books
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Boy8} alt="Mother2" />
                            <h3>Personal belongings</h3>
                            <p>Smartphone, Headphones, Charger, Laptop/Tablet
                                (optional, depending on academic needs)
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default Boys