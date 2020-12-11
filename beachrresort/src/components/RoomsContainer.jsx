import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
          console.log("VALUE", value)
          const{loading, sortedRooms, rooms} = value

          if(loading){
              return loading
          }

        return (
          <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainer;
