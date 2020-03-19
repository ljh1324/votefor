import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const AppName = styled.span`
  font-size: 2rem;
  vertical-align: middle;
  @media only screen and (max-width: 464px) {
    font-size: 1.7rem;
  }
`;

export { TitleWrapper, AppName };
