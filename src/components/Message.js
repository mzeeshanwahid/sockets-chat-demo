import React from "react";
import { Row, Col } from "reactstrap";

const Messages = props => {
  return (
    <div className="container">
      {props.messages.map((message, index) => {
        return (
          <div key={message.id}>
            {message.sender !== props.sender && props.messages[index -1].sender !== message.sender && <Row className="mb-1"><Col><small className="text-muted">Zunaib</small></Col></Row>}
          <Row className="mb-3">
            <Col>
              <span
                className={
                  message.sender === props.sender
                    ? "p-2 bg-info text-white float-right"
                    : "p-2 bg-secondary text-white"
                }
              >
                {message.message}
              </span>
            </Col>
          </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
