import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({ city, temp, icon, description }) => {
  const waves = [...city].map((letter, index) => (
    <span key={index} className={styles.wave}>
      {letter}
    </span>
  ));
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${icon}.png`}
      />
      <div className={styles.weatherInfo}>
        <h2>
          {waves}
        </h2>
        {temp && <p><strong>Temp:</strong> {temp} °C</p>}
      </div>
    </section>
  );
};

export default WeatherSummary;
