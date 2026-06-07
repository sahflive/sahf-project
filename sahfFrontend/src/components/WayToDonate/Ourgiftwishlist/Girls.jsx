import React from 'react'
import Girl1 from '../../../assets/girl1.jpg';
import Girl2 from '../../../assets/girl2.jpg';
import Girl3 from '../../../assets/girl3.jpg';
import Girl4 from '../../../assets/girl4.jpg';
import Girl5 from '../../../assets/girl5.jpg';
import Girl6 from '../../../assets/girl6.jpg';
import Girl7 from '../../../assets/girl7.jpg';
import Girl8 from '../../../assets/girl8.jpg';
import Girl9 from '../../../assets/girl9.jpg';
import Girl10 from '../../../assets/girl10.jpg';
import './Girls.css';
import { Link } from 'react-router-dom';

const Girls = () => {
    return (
        <>
            <section className='girl-wrapper-cont'>
                <div className="girl-heading">
                    <h2>For Girls/Women</h2>
                </div>
                <div className="girl-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Girl1} alt="Girl1" />
                            <h3>Pesonal hygeine & health</h3>
                            <p>Menstrual Products: Sanitary pads, menstrual cups, or tampons
                                Personal Care: Soap, shampoo, conditioner, toothpaste, toothbrush,
                                deodorant, lotion, Moisturizer, Sunscreen, Lip balm and
                                hairbrushes Health Supplies: Over-the-counter medications
                                (e.g., pain relievers, allergy medication)
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Girl2} alt="Girl2" />
                            <h3>Outerwear</h3>
                            <p>Outerwear: T-shirts, blouses, sweaters, jeans, shorts,
                                dresses, jackets, and coats
                                Undergarments: Bras, panties, Socks
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Girl3} alt="Girl3" />
                            <h3>Footwears</h3>
                            <p>Footwear: Sneakers, boots, sandals, slipper, shoes</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Girl4} alt="Girl4" />
                            <h3>Bottoms</h3>
                            <p>Bottoms: Jeans, pants, leggings, skirts</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -3 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Girl5} alt="Girl3" />
                            <h3>Support & services</h3>
                            <p>Emotional Support: A safe space to express feelings and concerns.
                                Nutrition: A balanced diet to support growth and development.
                                Education: Access to quality education and opportunities for personal growth.
                                Healthcare: Regular check-ups and access to healthcare services.</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Girl6} alt="Girl4" />
                            <h3>School supplies</h3>
                            <p>Stationery: Notebooks, pens, pencils, erasers, rulers, highlighters
                                Technological Devices: Calculator, laptop or tablet (optional)
                                Bags: Backpacks, purses </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>


                    {/* section -4 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Girl7} alt="Girl3" />
                            <h3>Kitchenware</h3>
                            <p>Utensils (spoons, forks, knives)Plates and bowls,
                                Cups  and glasses, Cleaning, Supplies, Detergent,
                                Soap, Disinfectant, Cleaning cloths</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Girl8} alt="Girl4" />
                            <h3>Personal belongings</h3>
                            <p>Personal Belongings: Phone, charger, headphones </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>


                    {/* section -5 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Girl9} alt="Girl3" />
                            <h3>Textile</h3>
                            <p>Towels, Bed linens, Blankets</p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Girl10} alt="Girl4" />
                            <h3>Cosmetics</h3>
                            <p>Cosmetic Items: Foundation, Concealer, Powder,
                                Blush, Eyes shadow, Mascara, Lipstick or lip gloss,
                                Eyeliner, Jewellery, hair accessories
                            </p>
                            <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default Girls