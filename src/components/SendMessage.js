import React from "react";
import { Row, Col, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const SendMessage = () => {
  return (
    <Row>
      <Col>
        <InputGroup>
          <Input placeholder="Type Message.." />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Send</Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SendMessage;
