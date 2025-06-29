import React, { useState } from 'react';
import styles from './Gallery_section.module.css'
import {events,photoData} from '../../assets/assets';
import {} from '../../assets/assets';
import Past_Glimpses from './Past_Glimpses';

const GallerySection = () => {
  const [filter, setFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');

  // Extract unique years for past events
  const pastEventYears = Array.from(
    new Set(events
      .filter(event => event.type === 'past')
      .map(event => new Date(event.date).getFullYear())
    )
  ).sort((a, b) => b - a); // descending

  let filteredEvents =
    filter === 'all' ? events : events.filter(event => event.type === filter);

  if (filter === 'past' && yearFilter !== 'all') {
    filteredEvents = filteredEvents.filter(
      event => new Date(event.date).getFullYear().toString() === yearFilter
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Events Gallery</h2>

      {/* Filter buttons */}
      <div className={styles.filterButtons}>
        {['all', 'upcoming', 'past'].map((item) => (
          <button
            key={item}
            onClick={() => {
              setFilter(item);
              setYearFilter('all'); // reset year filter on section change
            }}
            className={`${styles.filterButton} ${
              filter === item ? styles.active : ''
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Dropdown for year filtering */}
      {filter === 'past' && (
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <label className={styles.dropdown_section} htmlFor="yearSelect">Filter by Year: </label>
          <select className={styles.dropdown}
            id="yearSelect"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option  value="all">All</option>
            {pastEventYears.map(year => (
              <option className={styles.dropdown_option} key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      )}

      {/* Event cards */}
      <div className={styles.grid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <div className={styles.cardContent}>
              <div className={styles.cardDate}>
                {new Date(event.date).toDateString()}
              </div>
              <div className={styles.cardTitle}>{event.title}</div>
              <div className={styles.cardDesc}>{event.description}</div>
            </div>
          </div>
        ))}
      </div>
      <Past_Glimpses photos={photoData}/>
    </div>
  );
};

export default GallerySection;
