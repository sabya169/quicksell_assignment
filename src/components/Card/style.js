import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem 0rem;
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
    font-size: 1.5rem;
    color: #898c91;
  }
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
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => (props.available ? "#6cd969" : "grey")};
  border-radius: 50%;
  margin-left: 5px;
  position: absolute;
  bottom: 0.4rem;
  left: 1.5rem;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;
export const TitelContainer = styled.div`
  flex: 98%;
`;
export const H3 = styled.h3`
  text-align: left;
  color: #25262d;
  /* max-width: 20rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const IconContainer = styled.div`
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
  flex: ${(props) => (props.border ? "2%" : "0%")};
  border: ${(props) =>
    props.border ? "1px solid rgba(6, 24, 44, 0.1)" : "none"};
  align-items: center;
`;

export const PriorityAndTagsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;
export const TagContainer = styled.div`
  flex: 90%;
  text-align: left;
  display: flex;
  gap: 1rem;
`;

export const Chip = styled.span`
  padding: 4px 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  border: 1px solid rgba(6, 24, 44, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  border-radius: 5px;
`;
export const ChipLabel = styled.label`
  margin-left: 5px;
  font-size: 12px;
  color: #b5b7ba;
`;
