import styled from "styled-components";

export const Container = styled.div`
    width: 80%;

  input {
    background-color: ${({ theme }) => theme.COLORS.BG_BTN_INPUT};
    border: none;
    border-radius: 50px;
    color: ${({ theme }) => theme.COLORS.TEXT_BTN_INPUT};
    font-size: 1.2rem;
    //padding: 1.25rem 3.4rem 1.25rem 1rem;
    padding-left: 1rem;

    height: 100%;
    width: 100%;
  }
`