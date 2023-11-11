import React from "react";
import {
  CardContainer,
  CardHeader,
  Avatar,
  StatusIndicator,
  H3,
  StatusContainer,
  IconContainer,
  PriorityAndTagsContainer,
  TagContainer,
} from "./style";
import { FcTodoList } from "react-icons/fc";
import { TbProgressCheck } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { IoScanCircle } from "react-icons/io5";
import { TbAlertSquareFilled } from "react-icons/tb";
import { AiOutlineDash } from "react-icons/ai";
import {
  PiCellSignalHighBold,
  PiCellSignalMediumBold,
  PiCellSignalLowBold,
} from "react-icons/pi";

const userAvatarUrl =
  "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg";

const statusIcon = {
  todo: <FcTodoList size={15} />,
  inprogress: <TbProgressCheck size={18} color="orange" />,
  done: <GoCheckCircleFill size={18} color="blue" />,
  cancelled: <MdCancel size={18} color="grey" />,
  backlog: <IoScanCircle size={18} color="black" />,
};

const priorityIcon = {
  0: {
    icon: <AiOutlineDash size={22} />,
    text: "No Priority",
  },
  1: {
    icon: <PiCellSignalLowBold size={22} />,
    text: "Low",
  },
  2: {
    icon: <PiCellSignalMediumBold size={22} />,
    text: "Medium",
  },
  3: {
    icon: <PiCellSignalHighBold size={22} />,
    text: "High",
  },
  4: {
    icon: <TbAlertSquareFilled size={22} color="orange" />,
    text: "Urgent",
  },
};

const Card = ({ data }) => {
  const { id, title, tag, status, priority, available } = data;
  const modifiedString = status.replace(/ /g, "").toLowerCase();
  return (
    <CardContainer>
      <CardHeader>
        <span className="user_id">{id}</span>
        <Avatar>
          <img src={userAvatarUrl} alt="User Avatar" className="avatar_img" />
          <StatusIndicator className="status-indicator" available={available} />
        </Avatar>
      </CardHeader>
      <StatusContainer>
        <IconContainer>{statusIcon[modifiedString]}</IconContainer>
        <H3>{title}</H3>
      </StatusContainer>
      <PriorityAndTagsContainer>
        <IconContainer border={true}>
          {priorityIcon[priority].icon}
        </IconContainer>
        <TagContainer>{tag.join(", ")}</TagContainer>
      </PriorityAndTagsContainer>
    </CardContainer>
  );
};

export default Card;
