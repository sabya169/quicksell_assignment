import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1.5rem;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .user_id {
    font-size: 2.1rem;
  }
`;

export const Avatar = styled.div`
  & .avatar_img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 10px;
  }
  position: relative;
`;

export const StatusIndicator = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => (props.available ? "#6cd969" : "grey")};
  border-radius: 50%;
  margin-left: 5px;
  position: absolute;
  bottom: 4px;
  left: 2.4rem;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

export const H3 = styled.h3`
  text-align: left;
  flex: 90%;
  width: 2rem;
`;

export const IconContainer = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: ${(props) => (props.border ? "10%" : "0%")};
  box-shadow: ${(props) =>
    props.border ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const PriorityAndTagsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  border: 1px solid black;
`;

export const TagContainer = styled.div`
  flex: 90%;
  text-align: left;
`;
