import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Avatar = styled.div`
  & .avatar_img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 10px;
  }
  position: relative;
`;

export const StatusIndicator = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.status ? "#6cd969" : "grey")};
  border-radius: 50%;
  margin-left: 5px;
  position: absolute;
  bottom: 4px;
  left: 1.6rem;
`;

export const StartElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  width: 80%;
`;
export const EndElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 20%;

  /* Media query for screen sizes between 501px to 1000px */
  @media (max-width: 1246px) {
    display: none;
  }
`;

export const DropdownElem = styled.div`
  @media (min-width: 1247px) {
    display: none;
  }
  @media (max-width: 1246px) {
    display: block;
  }
`;

export const Name = styled.p`
  font-size: 1.5rem;
`;
export const Count = styled.p`
  font-size: 1.5rem;
  color: #6e7279;
`;
export const PlusIcon = styled.p`
  font-size: 1.5rem;
`;
export const MoreIcon = styled.p`
  font-size: 1.5rem;
`;
