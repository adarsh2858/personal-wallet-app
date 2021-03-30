const AllWallets = () => {
  const data = [
    {
      userId: "Usr1",
      name: "Name 1",
      phone: "9988999877",
      balance: 765.43,
    },
    {
      userId: "Usr2",
      name: "Name 2",
      phone: "7763423688",
      balance: 443.24,
    },
    {
      userId: "Usr3",
      name: "Name 3",
      phone: "3434545666",
      balance: 20.05,
    },
  ];

  const columns = [
    {
      Header: "User ID",
      accessor: "userId",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Balance",
      accessor: "balance",
    },
  ];
  return (
    <>
      <table className="w-1/2" style={{ background: "#fff" }}>
        <thead>
          <tr className=" bg-blue-200">
            <th className="py-1 px-2">User Id</th>
            <th className="px-2">Name</th>
            <th className="px-2">Phone</th>
            <th className="px-2">Balance (Rs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
          <tr>
            <td>Usr1</td>
            <td>Name 1</td>
            <td>9988999877</td>
            <td>765.43</td>
          </tr>
        </tbody>
      </table>
      {/* <Table
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[2, 4, 6]}
      /> */}
    </>
  );
};

export default AllWallets;
