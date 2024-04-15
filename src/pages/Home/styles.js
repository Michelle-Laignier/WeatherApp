import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 100vh;
  padding: 0 auto 100px;
  width: 100%;

  .load {
    font-size: 1.2rem;
    -webkit-text-stroke-width: 0px;
  }
`

export const Search = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;
  width: 80%;

  -webkit-text-stroke-width: 0px;
`

export const Degrees = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    height: 130px;
    width: 130px;
  }

  p {
    font-size: 5rem;
    font-weight: 500;
  }
    
  p:last-child {
    font-size: 4rem;
    font-weight: 500;
  }
`

export const Description = styled.div`
  p {
    font-size: 2rem;
    font-weight: 500;
  }
`

export const Infos = styled.div`
  display: flex;
  gap: 50px;

  .min-temp,
  .max-temp {
    img {
      height: 50px;
    }
  }

  .humidity,
  .wind,
  .temp {
    align-items: center;
    display: flex;
    gap: 10px;
  }

  .humidity img,
  .wind img {
    height: 30px;
  }

  .temp p:first-child {
    font-size: 2rem;
    font-weight: 500;
  }

  .temp-info,
  .humidity-info,
  .wind-info {
    font-size: 1.2rem;
  }

  .humidity-p,
  .wind-p {
    font-size: 2rem;
    font-weight: 500;
  }
`