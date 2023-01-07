import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./item.css";
import Sidebar from "./sidebar";
function Items() {
  //   const [user, setUser] = useState("");
  let user = "Sumit";
  return (
    <>
      <div className="Item_main_Container">
        <Header props={user} />
        <Sidebar />
        <button id="Add_Activity_btn">Add Activity</button>
        <div className="todo_table">
          <table id="main_table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Status</th>
                <th>
                  Time Taken <br />
                  (Hrs:Min:Sec)
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Drinking</td>
                <td>Completed</td>
                <td>0:00</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
              <tr>
                <td>Running</td>
                <td>Pending</td>
                <td>0:05</td>
                <td>
                  <span>Start</span>
                  <span>End</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default React.memo(Items);
