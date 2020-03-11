import styled from "styled-components";

const Button = styled.div`
  width: ${props => props.width};
  max-width: 350px;
  text-align: center;
  padding: 10px;
  margin: 20px;
  background: ${props => props.color};
  color: ${props => props.fontColor};
  cursor: pointer;
  &:active {
    background: ${props => props.activeColor};
  }
  border-radius: 5px;
  font-size: ${props => props.fontSize};
  user-select: none;
`;

export { Button };
