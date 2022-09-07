import React from "react";
import { Userinterface } from "../../models/user";
import { Button } from "antd";

type TableUserProps = {
  data: Userinterface[];
  onEdit?: (value: Userinterface) => void;
  onDeleted?: (value: Userinterface) => void;
};
const TableUser: React.FC<TableUserProps> = ({ data, onDeleted, onEdit }) => {
  return (
    <table border={1}>
      <tr>
        <th>Id</th>
        <th>firsName</th>
        <th>lastName</th>
        <th>Gender</th>
        <th>Birthday</th>
        <th>Phone</th>
        <th>Province</th>
        <th>City</th>
        <th>Address</th>
        <th>Email</th>
        <th>Active</th>
      </tr>
      {data.map((element) => {
        return (
          <tr key={element.Id}>
            <td>{element.Id}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.Gender}</td>
            <td>{element.Birthday}</td>
            <td>{element.Phone}</td>
            <td>{element.province}</td>
            <td>{element.city}</td>
            <td>{element.address}</td>
            <td>{element.Email}</td>
            <td>{element.Active}</td>
            <td>
              <Button
                onClick={() => {
                  onEdit?.(element);
                }}
              >
                Edit{" "}
              </Button>
              <Button
                onClick={() => {
                  onDeleted?.(element);
                }}
                type="ghost"
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default TableUser;
