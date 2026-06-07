import React from 'react'
import { Link } from 'react-router-dom';
import Feedback1 from '../../../../../assets/feedback/feedback1.jpg'
import './EventManageDepartment.css'
const EventManageDepartment = () => {
    return (
        <>
            <div className="even-department-main-cont">
                <div className="even-department-heading-cont">
                    <h2>Event Management Department  </h2>
                </div>
                <div className="even-department-details-cont">

                    <div className="even-department-heading-2-cont">
                        <h3>Manage All Events </h3>
                    </div>

                    <div className="left-right-list-container">
                        <div className="left-list">

                            <ul className='first-ul'>
                                <h4>For babies  </h4>
                                <li>Nutrients for babies,   </li>
                                <li>Baby bottles and nipples,   </li>
                                <li>Crib mattress,    </li>
                                <li>Crib sheets,     </li>
                                <li>Blankets,    </li>
                                <li>Diapers,    </li>
                                <li>Clothing,     </li>
                                <li>Onesies,       </li>
                                <li>Hats,     </li>
                                <li>Socks,     </li>
                                <li>Baby shampoo,       </li>
                                <li>Baby soap,       </li>
                                <li>Baby lotion,        </li>
                                <li>Baby brush and comb,        </li>
                                <li>Cotton balls and swabs,        </li>
                                <li>Pacifier,         </li>
                                <li>Teethers,          </li>
                                <li>Rattles,          </li>
                                <li>Soft toys          </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>For mothers   </h4>
                                <li>Nutrition for mother,    </li>
                                <li>Healthy and balanced diet,    </li>
                                <li>Prenatal vitamins,      </li>
                                <li>Maternity pads,      </li>
                                <li>Perineal spray,     </li>
                                <li>Breast pads,     </li>
                                <li>Nursing bras,      </li>
                                <li>Nipple cream,         </li>
                                <li>Comfortable clothing     </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>For girls/women   </h4>
                                <li>Menstrual Products: Sanitary pads, menstrual cups, or tampons   </li>
                                <li>Personal Care: Soap, shampoo, conditioner, toothpaste, toothbrush, deodorant, lotion, Moisturizer, Sunscreen, Lip balm and hairbrushes      </li>
                                <li>Health Supplies: Over-the-counter medications (e.g., pain relievers, allergy medication)      </li>
                                <li>Cloths, Footwears, Support & services, School supplies, Kitchenware, Personal belongings, Textile, Cosmetics    </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>Hunger   </h4>
                                <li>Human relief Bundle,   </li>
                                <li>Emergency food packs,   </li>
                                <li>Newborn care package  </li>
                            </ul>

                        </div>

                        <div className="right-list">

                            <ul className='first-ul'>
                                <h4>For boys/men    </h4>
                                <li>Nutrients,     </li>
                                <li>Hygiene,     </li>
                                <li>Personal care,     </li>
                                <li>Apparel, Outwear,       </li>
                                <li>Footwear,      </li>
                                <li>School supplies,       </li>
                                <li>Nursing bras,      </li>
                                <li>Personal belongings</li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>For parent     </h4>
                                <li>Essential household Items,      </li>
                                <li>Child-related needs,     </li>
                                <li>Home maintenance & Improvements    </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>For elderly    </h4>
                                <li>Nutrients,       </li>
                                <li>Clothing     </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>Book     </h4>
                                <li>Textbooks,        </li>
                                <li>Magazine/story books,    </li>
                                <li>Motivational books,     </li>
                                <li>Dictionaries    </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>Income generation      </h4>
                                <li>Hen,         </li>
                                <li>Vegetable/Fruit/tree seeds  </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>Health      </h4>
                                <li>Dental kit,     </li>
                                <li>Food for malnourished child,  </li>
                                <li>Hygeinic kit,    </li>
                                <li>Mosquito nets,     </li>
                                <li>Parasitic protection    </li>
                            </ul>
                            <ul className='first-ul'>
                                <h4>Children at risk       </h4>
                                <li>Disaster relief,     </li>
                                <li>Home repair,    </li>
                                <li>Long term shelter,     </li>
                                <li>Rescue from a dangerous situation   </li>
                            </ul>

                            <ul className='first-ul'>
                                <h4>Water & Energy      </h4>
                                <li>Water well/ Hand pump,      </li>
                                <li>Electricity arrangement,   </li>
                                <li>Water filter     </li>
                            </ul>

                        </div>
                    </div>



                    <div className="apply-btn-cont">
                        <Link className='apply-btn' title='Apply Now' to='/home'>Apply Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventManageDepartment