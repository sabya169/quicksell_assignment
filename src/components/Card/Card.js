import React from "react";
import {
  CardContainer,
  CardHeader,
  Avatar,
  StatusIndicator,
  TitelContainer,
  H3,
  StatusContainer,
  IconContainer,
  PriorityAndTagsContainer,
  TagContainer,
  Chip,
  ChipLabel,
} from "./style";
import { BsCircle } from "react-icons/bs";
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
import { BsCircleFill } from "react-icons/bs";

const userAvatarUrl =
  "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg";

const statusIcon = {
  todo: <BsCircle size={18} color="#E8E9EA" />,
  inprogress: <TbProgressCheck size={18} color="orange" />,
  done: <GoCheckCircleFill size={18} color="blue" />,
  cancelled: <MdCancel size={18} color="grey" />,
  backlog: <IoScanCircle size={18} color="grey" />,
};

const priorityIcon = {
  0: {
    icon: <AiOutlineDash size={18} />,
    text: "No Priority",
  },
  1: {
    icon: <PiCellSignalLowBold size={18} />,
    text: "Low",
  },
  2: {
    icon: <PiCellSignalMediumBold size={18} />,
    text: "Medium",
  },
  3: {
    icon: <PiCellSignalHighBold size={18} />,
    text: "High",
  },
  4: {
    icon: <TbAlertSquareFilled size={18} color="orange" />,
    text: "Urgent",
  },
};

const Card = ({ data, groupingOption }) => {
  const { id, title, tag, status, priority, available } = data;
  const modifiedString = status.replace(/ /g, "").toLowerCase();
  console.log(tag);
  return (
    <CardContainer>
      <CardHeader>
        <span className="user_id">{id}</span>
        {groupingOption === "user" ? null : (
          <Avatar>
            <img src={userAvatarUrl} alt="User Avatar" className="avatar_img" />
            <StatusIndicator available={available} />
          </Avatar>
        )}
      </CardHeader>
      <StatusContainer>
        {groupingOption === "status" ? null : (
          <IconContainer>{statusIcon[modifiedString]}</IconContainer>
        )}
        <TitelContainer>
          <H3>{title.substring(0, 40).concat("...")}</H3>
        </TitelContainer>
      </StatusContainer>
      <PriorityAndTagsContainer>
        {groupingOption === "priority" ? null : (
          <IconContainer border={true}>
            {priorityIcon[priority].icon}
          </IconContainer>
        )}
        <TagContainer>
          {tag.map((t, i) => (
            <Chip key={i}>
              <BsCircleFill size={12} color="#BEC2C8" />
              <ChipLabel>{t}</ChipLabel>
            </Chip>
          ))}
        </TagContainer>
      </PriorityAndTagsContainer>
    </CardContainer>
  );
};

export default Card;
