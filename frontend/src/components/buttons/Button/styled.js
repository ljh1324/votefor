import styled from "styled-components";

const Button = styled.div`
  width: ${props => props.width};
  max-width: 300px;
  text-align: center;
  padding: 10px;
  margin: 15px;
  background: ${props => props.color};
  color: ${props => props.fontColor};
  cursor: pointer;
  border: ${props => props.border};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: ${props => props.fontSize};
  user-select: none;
  &:active {
    background: ${props => props.activeColor};
  }

  @media only screen and (max-width: 464px) {
    font-size: 1.3rem;
  }
`;

export { Button };
