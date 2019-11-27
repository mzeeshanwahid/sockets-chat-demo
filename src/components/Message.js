import React from "react";

const Messages = props => {
  return (
    <>
      {props.messages.map(message => {
        return <span className="d-block">{message.message}</span>;
      })}
    </>
  );
};

export default Messages;
