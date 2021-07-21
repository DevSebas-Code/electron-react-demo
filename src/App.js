
import './App.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


function App() {
  const {data,isLoading,errorMessage} = useOpenWeather({
    key:'e5e14a520fd1b92f90c69c23cc751263',
    /* Se especifica la ubicación exacta mediante los valores de latitud y longitud
     en este caso en la ciudad de Viña Del Mar */
    lat:'-33.0245',
    lon:'-71.5518',
    lang:'es',
    unit:'metric',
  })
  return (
    <div className="App">
      <ReactWeather 
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="es"
        locationLabel="Viña del Mar"
        unitsLabels={{temperature: 'C', windSpeed:'Km/h'}}
        showForecast
      />
    </div>
  );
}

export default App;
