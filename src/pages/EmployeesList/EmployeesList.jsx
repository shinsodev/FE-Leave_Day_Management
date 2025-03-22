import React, { useState } from "react";
import { Form, Modal, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import Search_Input from "../../components/Search_Input/Search_Input";
import FilterInput from "../../components/FilterInput/FilterInput";
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";

const columns = [
    {
        title: "name",
        dataIndex: "name",
        id: "name",
    },
    {
        title: "email",
        dataIndex: "email",
        id: "email",
    },
    {
        title: "password",
        dataIndex: "password",
        id: "password",
    },
    {
        title: "role",
        dataIndex: "role",
        id: "role",
    },
    {
        title: "leaveDays",
        dataIndex: "leaveDays",
        id: "leaveDays",
    },
    {
        title: "manager_id",
        id: "manager_id",
        dataIndex: "manager_id",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <button onClick={() => handleUpdateRequest(record)}>
                    <FaPencil size={20} className="text-yellow-500" />
                </button>
                <button onClick={() => handleDeleteRequest(record.id)}>
                    <IoTrashBin size={20} className="text-red-500" />
                </button>
            </Space>
        ),
    },
];

const EmployessListData = [
    {
        id: "1",
        name: "John Brown",
        email: "John Brown",
        password: "01/01/2025",
        role: "01/01/2025",
        leaveDays: "Sick",
        manager_id: "Accept",
    },
    {
        id: "2",
        name: "John Brown",
        email: "John Brown",
        password: "01/01/2025",
        role: "01/01/2025",
        leaveDays: "Sick",
        manager_id: "Accept",
    },
    {
        id: "3",
        name: "John Brown",
        email: "John Brown",
        password: "01/01/2025",
        role: "01/01/2025",
        leaveDays: "Sick",
        manager_id: "Accept",
    },
];

const handleUpdateRequest = (record) => {
    console.log("me");
};

const handleDeleteRequest = (id) => {
    console.log(`delete request ${id}`);
};

const EmployeesList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="bg-white rounded-xl p-8 shadow-lg">
            <h1 className="text-2xl font-semibold mb-6">All Employees</h1>
            <div className="flex items-center justify-between mb-6">
                <Search_Input />
                <FilterInput />
            </div>
            <Table
                className="rounded-lg border"
                columns={columns}
                dataSource={EmployessListData}
            />

            <Modal
                title="Update Request"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
            // onOk={() => console.log("Updated Data:", editData)}
            >
                {/* <Form layout="vertical">
          <Form.Item label="Employee ID">
            <Input
              value={editData?.employee_id}
              onChange={(e) =>
                setEditData({ ...editData, employee_id: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Manager ID">
            <Input
              value={editData?.manager_id}
              onChange={(e) =>
                setEditData({ ...editData, manager_id: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Start Date">
            <Input
              value={editData?.startDate}
              type="date"
              onChange={(e) =>
                setEditData({ ...editData, startDate: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="End Date">
            <Input
              value={editData?.endDate}
              type="date"
              onChange={(e) =>
                setEditData({ ...editData, endDate: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Reason">
            <Input
              value={editData?.reason}
              onChange={(e) =>
                setEditData({ ...editData, reason: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Status">
            <Select
              value={editData?.status}
              onChange={(value) => setEditData({ ...editData, status: value })}
            >
              <Option value="Accept">APPROVED</Option>
              <Option value="Reject">REJECT</Option>
              <Option value="Pending">PENDING</Option>
            </Select>
          </Form.Item> */}
                {/* </Form> */}
            </Modal>

        </div >
    );
};

export default EmployeesList;
