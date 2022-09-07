import logo from "./logo.svg";
import "./App.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Testt from "./components/BT/ClassLife";
import { faKe_data, generateId, Userinterface } from "./models/user";
import TableUser from "./components/BT/table";
import ModalUser, { NewUserType } from "./components/BT/ModalUser";
import { Button } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import { Router, Routes, BrowserRouter, Route, Link } from "react-router-dom";

{
  /* <Test 
  show={show} title="Xin chào" onClick={() => {}} onClick */
}

// const data: any[] = [
//   {
//     Company: "ahfaf",
//     Contact: "ahfafzzz",
//     Country: "ahfafmm",
//   },
//   {
//     Company: "ifef",
//     Contact: "eif",
//     Country: "iownef",
//   },
// ];
// Table
// const App = () => {
//   return (
//     <div className="abc">
//       <table>
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th>Contact</th>
//             <th>Country</th>
//           </tr>
//         </thead>
//         <tbody>
//         {data.map((element) => {
//           return (
//             <tr key={element.company}>
//               <th>{element.Company}</th>
//               <th>{element.Contact}</th>
//               <th>{element.Country}</th>
//             </tr>
//           );
//         })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const AppU = () => {
  const [showw, setShow] = useState<boolean>(() => false);
  const [data, setData] = useState<Userinterface[]>(faKe_data);
  const [selectedUser, setSelectedUser] = useState<Userinterface>();
  const onClick = () => {
    setSelectedUser(undefined);
    setShow(true);
  };

  const onSubmitForm = (value: NewUserType) => {
    console.log("submitform", value);
    setShow(false);
    if (value.Id !== undefined) {
      setData((s) => {
        const index = s.findIndex((i) => i.Id === value.Id);
        if (index >= 0) {
          s[index] = {
            ...s[index],
            ...value,
          };
          return [...s];
        }
        return s;
      });
      return;
    }
    setData((s) => [...s, { ...value, Id: generateId() }]);
  };
  const onCancel = () => {
    setShow(false);
  };
  const onDeleted = (value: Userinterface) => {
    setData((s) => s.filter((i) => i.Id !== value.Id));
  };
  const onEdit = (value: Userinterface) => {
    setSelectedUser(value);
    setShow(true);
  };
  return (
    <div className="container">
      <div>
        <Button onClick={onClick}>Create</Button>
      </div>
      <TableUser onEdit={onEdit} onDeleted={onDeleted} data={data} />
      <ModalUser
        user={selectedUser}
        onCancel={onCancel}
        onFinished={onSubmitForm}
        visible={showw}
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route key="home" path="Customers" element={<table />} />
            </Route>
          </Routes>

          {/* <MainDash /> */}
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
