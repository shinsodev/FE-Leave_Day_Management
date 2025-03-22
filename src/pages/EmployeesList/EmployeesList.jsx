import React from "react";
import { Space, Table, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
const { Search } = Input;

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
        // render: (status) => {
        //     let color = "";
        //     if (status === "Accept") {
        //         color = "green";
        //     } else if (status === "Reject") {
        //         color = "red";
        //     }
        //     return <Tag color={color}>{status.toUpperCase()}</Tag>;
        // },
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

            {/* <Space direction="vertical" size="middle">
                <Space.Compact size="large">
                    <Input addonBefore={<SearchOutlined />} placeholder="large size" />
                </Space.Compact>
            </Space>

            <Select defaultValue=".com">
                <Option value=".com">.com</Option>
                <Option value=".jp">.jp</Option>
                <Option value=".cn">.cn</Option>
                <Option value=".org">.org</Option>
            </Select> */}
            {/* Search and Sort */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative w-1/3">
                    <Input
                        size="large"
                        prefix={<SearchOutlined />}
                        placeholder="Search"
                        className="w-full rounded-lg"
                    />
                </div>
                <Select defaultValue="Newest" size="large" className="w-40">
                    <Option value="Newest">Newest</Option>
                    <Option value="Oldest">Oldest</Option>
                </Select>
            </div>

            <Table
                className="rounded-lg border"
                columns={columns}
                dataSource={EmployessListData}
            />

            {/* Pagination
            <div className="flex justify-center mt-8">
                <Pagination defaultCurrent={1} total={40} pageSize={5} />
            </div> */}
        </div>
    );
};

export default EmployeesList;
