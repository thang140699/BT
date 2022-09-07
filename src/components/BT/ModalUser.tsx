import { Form, Input, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Userinterface } from "../../models/user";

export type NewUserType = Omit<Userinterface, "Id"> & { Id?: number };

type ModelUserProps = {
  visible?: boolean;
  onFinished?: (value: NewUserType) => void;
  onCancel?: () => void;
  user?: Userinterface;
};

const ModalUser: React.FC<ModelUserProps> = ({
  visible,
  onFinished,
  onCancel,
  user,
}) => {
  const [Gender, setGender] = useState<string>("");
  // ví dụ khác nhé
  const [firstName, setFirstname] = useState<string>("");
  // phải khai báo cái trên này, rồi mới gọi bên dưới đc chứ,

  useEffect(() => {
    console.log("user", user);
    setGender(user?.Gender ?? "");
  }, [user]);
  const onSubmit = () => {
    const value: NewUserType = {
      ...(user ?? {
        firstName: "",
        lastName: "",
        Gender: "",
        Birthday: "",
        Phone: "",
        Email: "",
        province: "",
        city: "",
        address: "",
        Active: 1,
      }),
      Gender,
    };
    onFinished?.(value);
  };
  return (
    <Modal visible={visible} onCancel={onCancel} onOk={onSubmit}>
      <Form onFinish={onSubmit}>
        <Form.Item label="gender">
          <Input
            value={Gender}
            onChange={(text) => setGender(text.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalUser;
