import styled from "styled-components";

export const Container = styled.div`
    width: 80%;

  input {
    background-color: ${({ theme }) => theme.COLORS.BG_BTN_INPUT};
    border: none;
    border-radius: 50px;
    color: ${({ theme }) => theme.COLORS.TEXT_BTN_INPUT};
    font-size: 1.2rem;
    text-align: center;

    height: 100%;
    width: 100%;
  }
`