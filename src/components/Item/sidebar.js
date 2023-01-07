import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="sidebar_container">
        <p id="todo_list_title">ToDo List</p>
        <p id="todo_history">History</p>
        <div id="todo_history_list_container">
          <ul id="todo_history_list">
            <li>item-1</li>
            <li>item-2</li>
            <li>item-3</li>
            <li>item-4</li>
            <li>item-5</li>
          </ul>
        </div>
        <button id="logout_btn">Logout</button>
      </div>
    </>
  );
}
export default Sidebar;
