import React, { useRef, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Messages from "./Message";
import SendMessage from "./SendMessage";
import Senders from "./Senders";

const senders = [
  { id: "1", name: "Zeeshan" },
  { id: "2", name: "Afzal" },
  { id: "3", name: "Tariq" },
  { id: "4", name: "Cheema" },
  { id: "5", name: "Adeel" },
  { id: "11", name: "Zeeshan" },
  { id: "21", name: "Afzal" },
  { id: "31", name: "Tariq" },
  { id: "41", name: "Cheema" },
  { id: "51", name: "Adeel" }
];

const ChatBox = () => {
  const socket = socketIOClient("http://localhost:3001");
  const [initData, setInitData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const inputContainer = useRef();

  useEffect(() => {
    socket.emit("initial_data");
    socket.on("get_data", data => {
      setInitData(data);
    });

    return () => {
      socket.emit("disconnect");
    };
  }, []);

  useEffect(() => {
    if (inputContainer.current) {
      inputContainer.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className="container">
      <div className="row mt-5 bg-light">
        <div className="col-sm-12 border-bottom">
          <h1 className="p-3">Chat</h1>
        </div>
      </div>
      <div className="row mb-5 bg-light" style={{ maxHeight: "400px" }}>
        <div
          className="col-sm-4"
          style={{ maxHeight: "400px", overflow: "auto" }}
        >
          <Senders senders={senders} />
        </div>
        <div className="col-sm-8">
          <div className="d-block pt-2">
            {messages.length > 0 ? (
              <>
                <div
                  style={{
                    maxHeight: "330px",
                    overflow: "auto",
                    marginBottom: "10px"
                  }}
                >
                  <Messages messages={messages} sender="1" />
                  <div ref={inputContainer} />
                </div>
                <div style={{ height: "60px" }}>
                  <SendMessage />
                </div>
              </>
            ) : (
              <div className="text-center">
                <span>No messages yet!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
