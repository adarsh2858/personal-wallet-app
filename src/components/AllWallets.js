const AllWallets = ({ allWallets, setAllWallets, newWallet, setNewWallet }) => (
  <>
    {allWallets ? (
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
    ) : null}
  </>
);

export default AllWallets;
