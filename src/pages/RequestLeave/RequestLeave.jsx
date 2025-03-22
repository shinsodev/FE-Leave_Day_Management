import React from 'react'
import { Space, Table, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';
const { Search } = Input;

const columns = [
    {
        title: 'employee_id',
        dataIndex: 'employee_id',
        key: "employee_id"
    },
    {
        title: 'manager_id',
        dataIndex: 'manager_id',
        key: "manager_id"

    },
    {
        title: 'startDate',
        dataIndex: 'startDate',
        key: "startDate"

    },
    {
        title: 'endDate',
        dataIndex: 'endDate',
        key: "endDate"

    },
    {
        title: 'reason',
        dataIndex: 'reason',
        key: "reason"

    },
    {
        title: 'status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => {
            let color = '';
            if (status === "Accept") {
                color = 'green';
            } else if (status === "Reject") {
                color = 'red';
            }
            return (
                <Tag color={color}>
                    {status.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const RequestLeavedata = [
    {
        id: '1',
        employee_id: 'John Brown',
        manager_id: 'John Brown',
        startDate: "01/01/2025",
        endDate: "01/01/2025",
        reason: "Sick",
        status: "Accept"
    },
    {
        id: '2',
        employee_id: 'John Brown',
        manager_id: 'John Brown',
        startDate: "01/01/2025",
        endDate: "01/01/2025",
        reason: "Sick",
        status: "Accept"
    },
    {
        id: '3',
        employee_id: 'John Brown',
        manager_id: 'John Brown',
        startDate: "01/01/2025",
        endDate: "01/01/2025",
        reason: "Sick",
        status: "Accept"
    },
];

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
    },
];

const RequestLeave = () => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-lg">
            <h1 className="text-2xl font-semibold mb-6">Request Leave</h1>

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
                dataSource={RequestLeavedata}
            />

            {/* Pagination
            <div className="flex justify-center mt-8">
                <Pagination defaultCurrent={1} total={40} pageSize={5} />
            </div> */}
        </div>
    )

}

export default RequestLeave