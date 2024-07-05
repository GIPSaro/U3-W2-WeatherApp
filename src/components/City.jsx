//mi manca la chiamata per i 5gg e tutte le altre funzionalità :(

const City = ({ city }) => {
  const currentWeather = city;
  const dailyWeather = city.weather;
  return (
    <div>
      <h2>{city.name}</h2>
      <h3>Meteo attuale:</h3>
      {currentWeather.temp !== undefined &&
      currentWeather.weather[0] !== undefined ? (
        <div>
          <p>Temperatura: {currentWeather.temp}°C</p>
          <p>Condizioni: {currentWeather.weather[0].description}</p>
        </div>
      ) : (
        <p>Dati meteo attuali non disponibili.</p>
      )}

      <h3>Previsioni per i prossimi 5 giorni:</h3>
      <ul>
        {dailyWeather.slice(1, 6).map((day, index) => (
          <li key={index}>
            {day.temp && day.weather[0] ? (
              <div>
                <p>Giorno: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                <p>Temperatura: {day.temp.day}°C</p>
                <p>Condizioni: {day.weather[0].description}</p>
              </div>
            ) : (
              <p>Previsioni per questo giorno non disponibili.</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default City;
