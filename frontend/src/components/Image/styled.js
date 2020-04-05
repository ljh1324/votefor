import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : "auto")};
`;

export { Image };
