import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BG_BTN_INPUT};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.COLORS.TEXT_BTN_INPUT};
  font-size: 2rem;
  height: 60px;
  width: 60px;
`