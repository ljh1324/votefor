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
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexRowDirWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export { FlexWrap, FlexWrapWithHorizontalCentering, FlexRowDirWrap };
