import styled from "styled-components";

const ResultWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 2rem;
  user-select: none;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const PartyWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const CategoryText = styled.div`
  border: 5px solid ${props => (props.finish ? "#5758BB" : "#16a085")};
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  color: black;
  font-size: 2rem;

  @media only screen and (max-width: 464px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.span`
  font-size: ${props => props.fontSize};
  word-break: keep-all;
  word-wrap: break-word;
`;

const Line = styled.hr`
  width: ${props => props.width};
  color: ${props => props.color};
  background: ${props => props.color};
  height: ${props => props.height};
  border-radius: 10px;
  margin: 0 10px;
`;

export { ResultWrapper, PartyWrapper, ImageWrapper, CategoryText, Text, Line };
