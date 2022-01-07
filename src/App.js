import { useState } from "react";
import { ListGroup } from "react-bootstrap";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [chat, setchat] = useState("");

  const handlechange = (e) => {
    setchat(e.target.value);
  };

  const addUser = () => {
    console.timeLog(chat);

    const newList = [...list];
    StyleSheetList(newList);
  };
  return (
    <div>
      <h1 className="bg-dark text-light p-3">myChatApp by 059_pranjal_JH</h1>
      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          placeholder="lets chat here"
          value={chat}
          onChange={handlechange}
        />
      </div>
      <div>
        <input className="btn btn secondary w-100" type="button" value="send" />

        {List.map((item, index) => (
          <div key={index}> (item.chat) </div>
        ))}
      </div>
    </div>
  );
}
