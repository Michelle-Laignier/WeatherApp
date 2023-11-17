import { useState } from "react"
import { IoMdSearch } from "react-icons/io"

import { Container, Search, Degrees, Description, Infos } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import clear from "../../../src/assets/clear.png"
import cloud from "../../../src/assets/cloud.png"
import clouds from "../../../src/assets/clouds.png"
import drizzle from "../../../src/assets/drizzle.png"
import rain from "../../../src/assets/rain.png"
import snow from "../../../src/assets/snow.png"
import thunder from "../../../src/assets/thunder.png"

import { api } from '../../services/api'

export function Home() {
  const [img, setImg] = useState(cloud)
  const [degrees, setDegrees] = useState("")
  const [city, setCity] = useState("")
  const [description, setDescription] = useState("")
  const [minTemperature, setMinTemperature] = useState("")
  const [maxTemperature, setMaxTemperature] = useState("")
  const [humidity, setHumidity] = useState("")
  const [windSpeed, setWindSpeed] = useState("")
  const [apiKey, setApiKey] = useState("");

  async function weatherSearch() {    
    let city = document.querySelector(".city-input")
    if(city.value === "") {
      return
    }
    
    try {
      const response = await api.get('/api/key');
      setApiKey(response.data.apiKey);

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=Metric&appid=${response.data.apiKey}&lang=pt_br`;
      let weatherResponse = await fetch(url);

      if (weatherResponse.status === 401) {
        console.error('Erro 401 - Chave da API inválida');
        return;
      }

      let data = await weatherResponse.json();

      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setImg(clear)
      } else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
        setImg(cloud)
      } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
        setImg(clouds)
      } else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        setImg(clouds)
      } else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
        setImg(rain)
      } else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
        setImg(drizzle)
      } else if(data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
        setImg(thunder)
      } else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
        setImg(snow)
      } else if(data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
        setImg(clouds)
      }
      
      setDegrees(Math.floor(data.main.temp))
      setCity(data.name)
      setDescription(data.weather[0].description)
      setMinTemperature(Math.floor(data.main.temp_min))
      setMaxTemperature(Math.floor(data.main.temp_max))
      setHumidity(data.main.humidity)
      setWindSpeed(Math.floor(data.wind.speed))
    } catch {
      alert("Cidade não encontrada. Dica: acentos fazem diferença.")
    }
  }

  return(
    <Container>
      
      <Search>
        <Input placeholder="Nome da cidade" className="city-input"/>
        <Button icon={IoMdSearch} onClick={weatherSearch}/>
      </Search>

      <Degrees>
        <img src={img} alt="" />
        <p>{degrees}ºC</p>
        <p>{city}</p>
      </Degrees>

      <Description>
        <p>{description}</p>
      </Description>

      <Infos>
        <div className="min-temp temp">
          <img src="../../../src/assets/minTemp.png" alt="Ícone de temperatura baixa." />
          <div className="temp-info">
            <p>{minTemperature}ºC</p>
            <p>Mínima</p>
          </div>
        </div>

        <div className="max-temp temp">
          <img src="../../../src/assets/maxTemp.png" alt="Ícone de temperatura alta." />
          <div className="temp-info">
            <p>{maxTemperature}ºC</p>
            <p>Máxima</p>
          </div>
        </div>
      </Infos>

      <Infos>
        <div className="humidity">
          <img src="../../../src/assets/humidity.png" alt="Ícone de umidade" />
          <div className="humidity-info">
            <p className="humidity-p">{humidity}%</p>
            <p>Umidade</p>
          </div>
        </div>

        <div className="wind">
          <img src="../../../src/assets/wind.png" alt="Ícone de vento" />
          <div className="wind-info">
            <p className="wind-p">{windSpeed}km/h</p>
            <p>Vento</p>
          </div>
        </div>
      </Infos>

    </Container>
  )
}