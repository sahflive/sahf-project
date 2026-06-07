import React from 'react'
import CampaignImage from "../../assets/img4.jpg";
import CampaignGif from "../../assets/img1.jpg";
import './Dreamoflife.css'

const Dreamoflife = () => {
    return (
        <>
            <div className="dream-of-life-wrapper-container">
                <div className="dream-of-life-main-container">
                    <div className="cover-image-container">
                        <img src={CampaignImage} alt="Campaign-image" />
                    </div>
                    <div className="campaign-cont">
                        <h2>CAMPAIGN</h2>
                    </div>
                    <div className="campaign-image-and-description-cont">
                        <div className="left-image">
                            <img src={CampaignGif} alt="" />
                            {/* <video src={CampaignGif}
                            autoPlay
                            muted
                            loop
                            playsInline
                            >
                            </video> */}
                        </div>
                        <div className="right-description">
                            <h3>CAMPAIGN: DREAM OF LIFE</h3>
                            <p>SAFEZONE ActiveHumanityFoundation has inaugurated a 'hindi medium'
                                coaching institute for children 'up to the 8th standard' in the company
                                of qualified and trained volunteers. The institute is located at SAHF head office,
                                near Dharam Talkis Cinema Hall in Bariya, Uttar Pradesh. Our foundation's goal is
                                to provide free education to financially disadvantaged students, enabling them to
                                compete in the world with an educational advantage. SAHF offers complimentary
                                coaching to support their academic journey. This initiative aims to bridge the
                                educational gap, empowering underprivileged students and creating a more equitable society.
                            </p>
                            <button>Sponsor a child</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dreamoflife