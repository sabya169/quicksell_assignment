/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import ColumnTitleCard from "../ColumnTitleCard/ColumnTitleCard";
import { GroupContainer, Group } from "./style";

const KanbanBoard = ({ tickets, users }) => {
  const combinedData = {
    joinedData: tickets.map((ticket) => {
      const user = users.find((u) => u.id === ticket.userId);
      return { ...user, ...ticket };
    }),
  };
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem("groupingOption") || "status"
  );
  const [orderingOption, setOrderingOption] = useState(
    localStorage.getItem("orderingOption") || "priority"
  );
  const [groupedData, setGroupedData] = useState({});

  const handleApplyClick = (grouping, ordering) => {
    setGroupingOption(grouping);
    setOrderingOption(ordering);
    localStorage.setItem("groupingOption", grouping);
    localStorage.setItem("orderingOption", ordering);
    const newGroupedData = groupData(grouping, ordering);
    setGroupedData(newGroupedData);
  };

  const groupData = (grouping, ordering) => {
    let groupedData = {};
    switch (grouping) {
      case "status":
        groupedData = groupByStatus();
        break;
      case "user":
        groupedData = groupByUser();
        break;
      case "priority":
        groupedData = groupByPriority();
        break;
      default:
        groupedData = groupByStatus();
        break;
    }
    if (ordering === "priority") {
      Object.keys(groupedData).forEach((key) => {
        groupedData[key].sort((a, b) => b.priority - a.priority);
      });
    }

    if (ordering === "title") {
      Object.keys(groupedData).forEach((key) => {
        groupedData[key].sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    return groupedData;
  };

  const groupByStatus = () => {
    const statusGroups = {};
    combinedData.joinedData.forEach((ticket) => {
      const { status } = ticket;
      if (!statusGroups[status]) {
        statusGroups[status] = [];
      }
      statusGroups[status].push(ticket);
    });

    return statusGroups;
  };

  const groupByUser = () => {
    const userGroups = {};
    combinedData.joinedData.forEach((ticket) => {
      const { name } = ticket;
      if (!userGroups[name]) {
        userGroups[name] = [];
      }
      userGroups[name].push(ticket);
    });

    return userGroups;
  };

  const groupByPriority = () => {
    const priorityGroups = {};
    combinedData.joinedData.forEach((ticket) => {
      const { priority } = ticket;
      if (!priorityGroups[priority]) {
        priorityGroups[priority] = [];
      }
      priorityGroups[priority].push(ticket);
    });
    return priorityGroups;
  };

  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
    localStorage.setItem("orderingOption", orderingOption);
    const newGroupedData = groupData(groupingOption, orderingOption);
    setGroupedData(newGroupedData);
  }, [groupingOption]);

  return (
    <div>
      <Navbar handleApplyClick={handleApplyClick} />
      <GroupContainer>
        {Object.keys(groupedData).map((group, index) => (
          <ColumnTitleCard
            key={index}
            group={group}
            groupingOption={groupingOption}
            joinedData={combinedData.joinedData}
          />
        ))}
      </GroupContainer>
      <GroupContainer>
        {Object.entries(groupedData).map(([group, groupData]) => (
          <Group key={group}>
            {groupData.map((ticket, idx, groupData) => (
              <Card
                key={ticket.id}
                data={ticket}
                count={groupData.length}
                groupingOption={groupingOption}
              />
            ))}
          </Group>
        ))}
      </GroupContainer>
    </div>
  );
};

export default KanbanBoard;
