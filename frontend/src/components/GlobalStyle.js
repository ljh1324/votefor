import styled from "styled-components";

const FlexWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexWrapWithHorizontalCentering = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { FlexWrap, FlexWrapWithHorizontalCentering };
