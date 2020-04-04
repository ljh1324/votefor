import styled from "styled-components";

const FlexWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexWrapWithHorizontalCentering = styled.div`
  width: ${props => props.width};
  max-width: 600px;
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

const FlexRowDirWrapDependOnScreenSize = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 464px) {
    flex-direction: column;
  }
`;

const FlexColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 600px;
  min-width: 300px;
  background: ${props => props.color};
  border-radius: 25px;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  font-size: 0.9rem;
`;

export {
  FlexWrap,
  FlexWrapWithHorizontalCentering,
  FlexRowDirWrap,
  FlexRowDirWrapDependOnScreenSize,
  FlexColorContainer,
  MessageWrapper
};
