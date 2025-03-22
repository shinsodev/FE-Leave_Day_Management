import React from "react";
import { Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import Search_Input from "../../components/Search_Input/Search_Input";
import FilterInput from "../../components/FilterInput/FilterInput";

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
                <a>Update</a>
                <a>Delete</a>
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

const EmployeesList = () => {
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
        </div>
    );
};

export default EmployeesList;
