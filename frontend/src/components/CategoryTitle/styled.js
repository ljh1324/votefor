import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border: 5px solid #16a085;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 20px 0;
  user-select: none;
  max-width: 700px;
`;

const Text = styled.span`
  font-size: 2rem;
  vertical-align: middle;

  @media only screen and (max-width: 464px) {
    font-size: 1.5rem;
  }
`;

export { TitleWrapper, Text };
