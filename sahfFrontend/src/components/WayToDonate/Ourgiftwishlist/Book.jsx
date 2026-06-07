import React from 'react'
import Book1 from '../../../assets/book1.jpg';
import Book2 from '../../../assets/book2.jpg';
import Book3 from '../../../assets/book3.jpg';
import Book4 from '../../../assets/book4.jpg';
import './Book.css';
import { Link } from 'react-router-dom';
const Book = () => {
    return (
        <>
            <section className='book-wrapper-cont'>
                <div className="book-heading">
                    <h2>For Book</h2>
                </div>
                <div className="book-main-cont">

                    {/* section -1 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Book1} alt="Mother1" />
                            <h3>Textbooks</h3>
                            <p>
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Book2} alt="Mother2" />
                            <h3>Magazine/story books</h3>
                            <p>
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                    </section>

                    {/* section -2 */}
                    <section className='section-1'>
                        <div className="left-image-description-cont">
                            <img src={Book3} alt="Mother1" />
                            <h3>Motivational books</h3>
                            <p>
                            </p>
                               <Link className='btn' to='/home'>Donate Now</Link>
                        </div>
                        <div className="right-image-description-cont">
                            <img src={Book4} alt="Mother2" />
                            <h3>Dictionaries</h3>
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

export default Book