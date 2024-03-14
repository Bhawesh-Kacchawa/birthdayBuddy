import { useState } from "react";
import data from "./data"
import List from "./List";

const App = () => {
  const [users, setUsers] = useState(data)


  const deleteUser = (user) => {
    const filter = users.filter((item)=> item.id !== user.id)
    setUsers(filter)
  }

  const clearAllData = () => {
    setUsers([])
  }

  return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

    <div className="container" style={{ display: "flex", alignItems: "center", flexDirection: "column" , border:"2px solid #86198f" }}>

      <h2 style={{ margin: "20px" }}>five Birthday today</h2>

      {users.map((user) => {
        return <>
          <List user={user} deleteUser={deleteUser} key={user.id} />
        </>

      })}
      <button onClick={clearAllData} className="btn" style={{ width: "90%", height: "20%" }}>Clear all</button>
    </div>

  </div>;
};
export default App;
