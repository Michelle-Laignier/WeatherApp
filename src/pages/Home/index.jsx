import { IoMdSearch } from "react-icons/io"

import { Container } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Home() {
  return(
    <Container>
      
      <div className="search">
        <Input placeholder="Nome da cidade"/>
        <Button icon={IoMdSearch}/>
      </div>

      <div className="degrees">
        <img src="../../../src/assets/clear.png" alt="" />
        <p>20ºC</p>
        <p>London</p>
      </div>

      <div className="infos">
        <div className="humidity">
          <img src="../../../src/assets/humidity.png" alt="" />
          <div className="humidity-info">
            <p className="humidity-p">60%</p>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind">
          <img src="../../../src/assets/wind.png" alt="" />
          <div className="wind-info">
            <p className="wind-p">17km/h</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </Container>
  )
}