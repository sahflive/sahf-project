import React from 'react'
import { Link } from 'react-router-dom';
import NewAdmission1 from '../../../../assets/new_admission/newAdmission.jpg';
import './NewAdmission.css'

const NewAdmission = () => {
    return (
        <>
            <div className="new-admission-wrapper-cont">
                <div className="new-admission-main-cont">
                    <div className="new-admission-image">
                        <img src={NewAdmission1} alt="" />
                    </div>
                    <div className="new-admission-heading">
                        <h2>New Admission</h2>
                    </div>
                    <div className="new-admission-description">
                        <p>Education is fundamental to human life, empowering individuals and
                            shaping societies. It equips us with knowledge, critical thinking,
                            and problem-solving skills, essential for navigating an ever-changing world.
                        </p>
                        <p>On a personal level, education unlocks career opportunities,
                            fosters self-confidence, and promotes better decision-making.
                            It allows us to understand the world around us, think critically,
                            and innovate.
                        </p>
                        <p>
                            For society, education is the bedrock of progress. It drives
                            economic growth, fosters social harmony, and empowers citizens
                            to participate actively in their communities. Education is a powerful
                            tool that can bridge inequalities and create a brighter future for all.
                        </p>

                        <div className="new-admission-form-cont">
                             <h2>
                                For New Admission
                             </h2>
                             <Link className='apply-btn' to='/'>Apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewAdmission