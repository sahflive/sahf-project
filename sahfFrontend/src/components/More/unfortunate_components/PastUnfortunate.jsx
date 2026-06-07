import React from 'react'
import { Link } from 'react-router-dom';
import './PastUnfortunate.css'

const PastUnfortunate = () => {
    return (
        <>
            <div className="past-unfortunate-main-cont">
                <div className="past-unfortunate-details-cont">
                    <h4>Share Your Past Unfortunate To Secure/Empower My Future - by Someone </h4>
                    <p>Tell Your Incident & Opinion/Suggestion in video/written form at sahfofficial.care@gmail.com/Whatsapp at 7705085933</p>
                    <ul className='first-ul'>

                        {/* first */}
                        <li className='first-li'>
                            <h4>Topics which must be added -</h4>
                            <ul className='second-ul'>
                                <li>Topic/Subject </li>
                                <li>What you learn from that incident  </li>
                                <li>Suggestions For Someone  </li>
                                <li>Want to publicize your name or not?  </li>
                            </ul>
                        </li>

                        <p>Writing incident? You are giving us consent to share/publish. (Life of a Commoner by SAHF)</p>
                        <p>❌ There are very strict laws for personal data protection in India. Please don't share someone else's incident without their consent.</p>
                        <p>मेरे भविष्य को सुरक्षित/सशक्त करने के लिए अपना अतीत साझा करें - किसी के द्वारा
                            <br />
                            अपनी घटना और राय/सुझाव वीडियो/लिखित रूप में sahfofficial.care@gmail.com/Whatsapp 7705085933 पर बताएं</p>
                        {/* second  */}
                        <li className='first-li'>
                            <h4>विषय जो जोड़े जाने चाहिए -   </h4>
                            <ul className='second-ul'>
                                <li>विषय/विषय  </li>
                                <li>उस घटना से आप क्या सीखते हैं    </li>
                                <li>किसी के लिए सुझाव    </li>
                                <li>अपना नाम प्रचारित करना चाहते हैं या नहीं?   </li>
                            </ul>
                        </li>
                        <p>घटना लिख रहे है? आप हमें साझा/प्रकाशित करने की सहमति दे रहे हैं। (एसएएचएफ द्वारा लाइफ ऑफ ए कॉमनर) </p>
                        <p>❌ भारत में व्यक्तिगत डेटा सुरक्षा के लिए बहुत सख्त कानून हैं। कृपया किसी और की घटना को उनकी सहमति के बिना साझा न करें।</p>
                    </ul>

                    <div className="apply-btn-cont">
                        <Link className='apply-btn' title='Life of a commoner' to='/home'>Life of a commoner</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PastUnfortunate