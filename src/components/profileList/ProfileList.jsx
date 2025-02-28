import React from "react";
import "./profileList.scss";
import { listData } from "../../lib/dummyData";
import ListItemCard from "../../components/listItemCard/ListItemCard";

const ProfileList = () => {
  return (
    <div className="profileList">
      {listData.map((item) => (
        <ListItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProfileList;
