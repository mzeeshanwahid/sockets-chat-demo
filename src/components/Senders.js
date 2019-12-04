import React from "react";

const Senders = props => {
  return (
    <>
      {props.senders.map((sender, index) => {
        return (
          <div
            className={index === 0 ? "d-block p-3 border-bottom bg-dark text-white": "d-block p-3 border-bottom"}
            key={sender.id}
          >
            <img
              className="d-inline-block"
              width="40"
              src="https://image.flaticon.com/icons/svg/149/149071.svg"
              alt="Profile"
            />
            <span className="ml-3 lead">{sender.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default Senders;