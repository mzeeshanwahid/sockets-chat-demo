import React from "react";
import { Row, Col } from "reactstrap";

const Messages = props => {
  return (
    <div className="container">
      {props.messages.map(message => {
        return (<Row className="mb-3" key={message.id}>
          <Col>
            <span className={message.sender === props.sender ? 'p-2 bg-secondary text-white float-right' : 'p-2 bg-secondary text-white'}>{message.message}</span>
          </Col>
        </Row>);
      })}
    </div>
  );
};

export default Messages;
