import React from "react";
import { Table } from "antd";

// Dữ liệu mẫu
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description: "Some description about John Brown.",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description: "Some description about Jim Green.",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description: "Some description about Joe Black.",
  },
];

// Hàm để render nội dung mở rộng
const expandedRowRender = (record) => {
  return <p>{record.description}</p>;
  // <>
  //   {record.orderDetail.map((item, index) => {
  //     return (
  //       <>
  //         <table className="table">
  //           <thead>
  //             <tr>
  //               <th>ID</th>
  //               <th>Image</th>
  //               <th>Name</th>
  //               <th>Price</th>
  //               <th>Quantity</th>
  //               <th>Total</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {order.orderDetail?.map((item, index) => {
  //               return (
  //                 <tr key={index}>
  //                   <td>{order.id}</td>
  //                   <td>
  //                     <img src={item.image} alt="..." />
  //                   </td>
  //                   <td>{item.name}</td>
  //                   <td>{item.price}</td>
  //                   <td>{item.quantity}</td>
  //                   <td>{item.price * item.quantity}</td>
  //                 </tr>
  //               );
  //             })}
  //           </tbody>
  //         </table>
  //       </>
  //     );
  //   })}
  // </>
};

const Test = () => {
  return (
    <Table
      columns={[
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Age", dataIndex: "age", key: "age" },
        { title: "Address", dataIndex: "address", key: "address" },
      ]}
      expandable={{
        expandedRowRender,
        rowExpandable: (record) => true, // Cho phép tất cả các hàng có thể mở rộng
      }}
      dataSource={data}
    />
  );
};

export default Test;
