import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const WrapperItem = styled.div`
  margin: 20px;
`;

const DummyItem = styled.div`
  width: ${props => props.width};
`;

export { Wrapper, WrapperItem, DummyItem };
