import React from 'react'
import Parent1 from '../../../assets/parent1.jpg';
import Parent2 from '../../../assets/parent2.jpeg';
import Parent3 from '../../../assets/parent3.jpg';
import Parent4 from '../../../assets/parent4.jpg';
import './Parent.css';
import { Link } from 'react-router-dom';
const Parent = () => {
    return (
        <>
            <section className='parent-wrapper-cont'>
                <div className="parent-heading">
                    <h2>For Parent</h2>
                </div>
                <div className="parent-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Parent1} alt="Mother1" />
                            <h3>Essential household Items</h3>
                            <p>Personal Care: toiletries, hygiene products
                                Cleaning Supplies: detergents, disinfectants, cleaning tool
                                Food and Beverage: groceries, pantry staples, household drinks
                                Health and Wellness: over-the-counter medications, first-aid
                                supplies, vitamins and supplements
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Parent2} alt="Mother2" />
                            <h3>Child-related needs</h3>
                            <p>Infant Care: diapers, formula, baby food, bottles, pacifiers
                                Child Care: clothing, toys, books, educational materials
                                Healthcare: pediatric appointments, vaccinations, medications
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Parent3} alt="Mother1" />
                            <h3>Home maintenance & Improvements</h3>
                            <p>Repair and Maintenance: tools, hardware, light bulbs, batteries
                                Home Improvement: paint, wallpaper, flooring materials
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Parent4} alt="Mother2" />
                            <h3>Support & services</h3>
                            <p>Counseling and Therapy: individual, couples, family
                                Support Groups: parent groups, community organizations
                                Stress Management Techniques: mindfulness, meditation, yoga
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default Parent