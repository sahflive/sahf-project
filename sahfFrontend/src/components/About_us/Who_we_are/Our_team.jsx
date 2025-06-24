import styles from './Our_team.module.css';
import { coreTeam, departments } from '../../../assets/assets';

const TeamCard = ({ img, name, position, about }) => (
  <div className={styles.card}>
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <h4>{position}</h4>
    <p>{about}</p>
  </div>
);

const Our_team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Core Team</h1>
        <p className={styles.subheading}>"Driven by Purpose, Working for Humanity"</p>

        <section className={styles.founderSection}>
          {coreTeam.map(member => (
            <TeamCard key={member.name} {...member} />
          ))}
        </section>

        {departments.map(dept => (
          <section key={dept.title} className={styles.department}>
            <h2>{dept.title}</h2>
            <div className={styles.departmentGrid}>
              {dept.members.map(member => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Our_team;
