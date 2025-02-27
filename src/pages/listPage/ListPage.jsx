import React from "react";
import "./listPage.scss";
import { listData } from "../../lib/dummyData";
import FilterLists from "../../components/filterList/FilterLists";
import ListItemCard from "../../components/listItemCard/ListItemCard";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <FilterLists />

          {data.map((item) => (
            <ListItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
};

export default ListPage;
