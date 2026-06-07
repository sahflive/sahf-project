import React,{useState,useEffect} from 'react'
import styles from './Achivement.module.css'
import Odometer from "react-odometerjs"
import "odometer/themes/odometer-theme-default.css";
const Achivement = () => {
    const [groundevents,setGroundevents]=useState(0);
    const [students,setStudents]=useState(0);
    const [beneficiary,setBeneficiary]=useState(0);
    const [coaching,setCoaching]=useState(0);
    const [onlineevents,setOnlineevents]=useState(0);
    const [activecampaigns,setActivecampaigns]=useState(0);

    useEffect(()=>{
        const timeOutId=setTimeout(()=>{
            setGroundevents(15);
            setStudents(15);
            setBeneficiary(1600);
            setCoaching(2);
            setOnlineevents(10);
            setActivecampaigns(1);
        },5000)
        return()=>clearTimeout(timeOutId);
    },[])

  return (
    <div className={styles.achievement_container}>
        <div className={styles.card}>
            <div className={styles.flex_center}>
                <Odometer value={groundevents} className={styles.digit}/>
                <h1 className={styles.title}>+</h1>
            </div>
            <p className={styles.muted_name}>GROUND EVENTS
            </p>
        </div>
        <div className={styles.card}>
            <div className={styles.flex_center}>
                <Odometer value={students}  className={styles.digit}/>
                <h1 className={styles.title}>+</h1>
            </div>
            <p className={styles.muted_name}>STUDENTS</p>
        </div>
        <div className={styles.card}>
            <div className={styles.flex_center}>
                <Odometer value={beneficiary}  className={styles.digit}/>
                <h1 className={styles.title}>+</h1>
            </div>
            <p className={styles.muted_name}>BENEFICIARY
            </p>
        </div>
        <div className={styles.card}>
            <div className={styles.flex_center}>
                <Odometer value={coaching}  className={styles.digit}/>
                <h1 className={styles.title}>+</h1>
            </div>
            <p className={styles.muted_name}>COACHING CENTER</p>
        </div>
        <div className={styles.card}>
            <div className={styles.flex_center}>
                <Odometer value={onlineevents}  className={styles.digit}/>
                <h1 className={styles.title}>+</h1>
            </div>
            <p className={styles.muted_name}>ONLINE EVENTS
            </p>
        </div>

        <div className={styles.card}>
            <div className={styles.flex_center}>
                <Odometer value={activecampaigns}  className={styles.digit}/>
                <h1 className={styles.title}>+</h1>
            </div>
            <p className={styles.muted_name}>
            ACTIVE CAMPAIGNS
            </p>
        </div>

        </div>
  )
}

export default Achivement