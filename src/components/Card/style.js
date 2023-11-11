import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  width: 100%;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  position: relative;
`;

export const StatusIndicator = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.available ? "#6cd969" : "grey")};
  border-radius: 50%;
  margin-left: 5px;
  position: absolute;
  bottom: 4px;
  left: 24px;
`;

export const CardBody = styled.div``;
