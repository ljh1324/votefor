import styled from "styled-components";

const Button = styled.div`
  width: ${props => props.width};
  max-width: 300px;
  text-align: center;
  padding: 10px;
  margin: 20px;
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
`;

export { Button };
