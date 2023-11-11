import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 100vh;
  margin: 0 auto 100px;
  width: 60vw;

  .search {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin: 40px auto 0;
    width: 100%;
  }

  .degrees {
    align-items: center;
    display: flex;
    flex-direction: column;

    img {
      height: 224px;
      width: 224px;
    }
    
    p {
      font-size: 4rem;
      font-weight: 500;
    }
  }

  .min-temp,
  .max-temp {
    img {
      height: 50px;
    }
  }

  .desc p,
  .temp p:first-child {
    font-size: 2rem;
    font-weight: 500;
  }

  .infos {
    display: flex;
    gap: 50px;
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