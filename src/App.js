import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
// import logo from './logo.svg';
import "./App.css";
import Messages from "./components/Message";

const Senders = [
  { id: "1", name: "Zeeshan" },
  { id: "2", name: "Afzal" },
  { id: "3", name: "Tariq" },
  { id: "4", name: "Cheema" },
  { id: "5", name: "Adeel" }
];

function App() {
  const socket = socketIOClient("http://localhost:3001");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("initial_data");
    socket.on("get_data", data => {
      console.log("Initial Data recieved from user", data);
      setMessages(data);
    });

    return () => {
      socket.emit("disconnect");
    };
  }, []);

  return (
    <div className="container">
      <div className="row mt-5 bg-light">
        <div className="col-sm-12 border-bottom">
          <h1 className="p-3">Chat</h1>
        </div>
      </div>
      <div className="row mb-5 bg-light">
        <div className="col-sm-4">
          {Senders.map(sender => {
            return (
              <div
                className="d-block p-3 border-bottom border-right"
                key={sender.id}
              >
                <img
                  className="d-inline-block"
                  width="40"
                  src="https://image.flaticon.com/icons/svg/149/149071.svg"
                />
                <span className="ml-3 lead">{sender.name}</span>
              </div>
            );
          })}
        </div>
        <div className="col-sm-8">
          <div className="d-block p-4">
            {messages.length > 0 ? (
              <Messages messages={messages} />
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
}

export default App;
