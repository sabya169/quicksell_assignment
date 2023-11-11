import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import data from "../../data.json";
import ColumnTitleCard from "../ColumnTitleCard/ColumnTitleCard";

const KanbanBoard = () => {
  const { tickets, users } = data;
  const [groupingOption, setGroupingOption] = useState("status");
  const [groupedData, setGroupedData] = useState({});

  const handleApplyClick = (grouping, ordering) => {
    setGroupingOption(grouping);
    const newGroupedData = groupData(grouping);
    setGroupedData(newGroupedData);
  };

  const groupData = (grouping) => {
    switch (grouping) {
      case "status":
        return groupByStatus();
      case "user":
        return groupByUser();
      case "priority":
        return groupByPriority();
      default:
        return groupByStatus();
    }
  };

  const groupByStatus = () => {
    const statusGroups = {};
    tickets.forEach((ticket) => {
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
    const userIdToInfo = {};
    users.forEach((user) => {
      userIdToInfo[user.id] = {
        name: user.name,
        available: user.available,
      };
    });
    tickets.forEach((ticket) => {
      const { userId } = ticket;
      if (!userGroups[userIdToInfo[userId].name]) {
        userGroups[userIdToInfo[userId].name] = {
          tickets: [],
          userInfo: userIdToInfo[userId],
        };
      }
      userGroups[userIdToInfo[userId].name].tickets.push(ticket);
    });

    return userGroups;
  };

  const groupByPriority = () => {
    const priorityGroups = {};
    tickets.forEach((ticket) => {
      const { priority } = ticket;
      if (!priorityGroups[priority]) {
        priorityGroups[priority] = [];
      }
      priorityGroups[priority].push(ticket);
    });
    return priorityGroups;
  };

  useEffect(() => {
    setGroupingOption("status");
    const newGroupedData = groupData("status");
    setGroupedData(newGroupedData);
  }, []);

  return (
    <div className="kanban-board">
      <Navbar handleApplyClick={handleApplyClick} />
      <div className="group-container">
        {Object.keys(groupedData).map((group, index) => (
          <ColumnTitleCard
            key={index}
            group={group}
            groupingOption={groupingOption}
          />
        ))}
      </div>
      <div className="group-container">
        {Object.entries(groupedData).map(([group, groupData], idx) => (
          <React.Fragment key={idx}>
            {groupingOption === "user" ? (
              <div key={group} className="group">
                {groupData.tickets.map((ticket, index) => (
                  <Card key={ticket.id} data={ticket} />
                ))}
              </div>
            ) : (
              <div key={group} className="group">
                {groupData.map((ticket, index) => (
                  <Card key={ticket.id} data={ticket} />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
