import React from "react";
import {
  CardHeader,
  Avatar,
  StatusIndicator,
  Name,
  Count,
  PlusIcon,
  MoreIcon,
  StartElements,
  EndElements,
} from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
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
  todo: <FcTodoList size={22} />,
  inprogress: <TbProgressCheck size={22} color="orange" />,
  done: <GoCheckCircleFill size={22} color="blue" />,
  cancelled: <MdCancel size={22} color="grey" />,
  backlog: <IoScanCircle size={22} color="black" />,
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

const ColumnTitleCard = ({ group, groupingOption, joinedData }) => {
  const modifiedString = group.replace(/ /g, "").toLowerCase();
  let count = 0;
  const countUsers = joinedData.filter((item) => item.name === group);
  const countPriority = joinedData.filter((item) => {
    return item.priority === +group;
  });
  const countStatus = joinedData.filter((item) => {
    return item.status === group;
  });
  if (groupingOption === "user") {
    count = countUsers.length;
  } else if (groupingOption === "priority") {
    count = countPriority.length;
  } else {
    count = countStatus.length;
  }
  return (
    <CardHeader>
      <StartElements>
        {groupingOption === "user" ? (
          <Avatar>
            <img src={userAvatarUrl} alt="User Avatar" className="avatar_img" />
            <StatusIndicator
              className="status-indicator"
              status={countUsers[0].available}
            />
          </Avatar>
        ) : (
          <div>
            {groupingOption === "status"
              ? statusIcon[modifiedString]
              : priorityIcon[group].icon}
          </div>
        )}
        <Name>
          {groupingOption === "priority" ? priorityIcon[group].text : group}
        </Name>
        <Count>{count}</Count>
      </StartElements>
      <EndElements>
        <PlusIcon>
          <AiOutlinePlus />
        </PlusIcon>
        <MoreIcon>
          <FaEllipsisH />
        </MoreIcon>
      </EndElements>
    </CardHeader>
  );
};

export default ColumnTitleCard;
