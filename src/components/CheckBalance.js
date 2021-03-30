const CheckBalance = () => (
  <>
    <div className="flex flex-row lg:w-1/3 md:w-1/2">
      <p className="mr-10 mt-5">User</p>

      <input
        className="bg-yellow-100 hover:bg-yellow-200 rounded-md m-1 mt-5"
        list="name-list"
      />
      <datalist id="name-list">
        <option value="Name 1" />
        <option value="Name 2" />
        <option value="Name 3" />
      </datalist>
    </div>
    <button className="m-2 p-2 bg-blue-400 rounded-md hover:bg-blue-500">
      Get Balance
    </button>
  </>
);

export default CheckBalance;
