const NewWallet = () => {
  return (
    <>
      <form className="flex flex-row lg:w-1/3 md:w-1/2">
        <div className="flex flex-col">
          <div className="flex m-3">
            <label className="mt-1 mr-3">Name</label>
            <input
              type="text"
              className="w-3/5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
          text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
            />
          </div>
          <div className="flex m-3">
            <label className="mt-1 mr-3">Phone</label>
            <input
              type="text"
              className="w-3/5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
          text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
            />
          </div>
          <div className="flex m-3">
            <label className="mt-1 mr-3">Amount (Rs)</label>
            <input
              type="text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
            text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
            />
            <div className="ml-4">
              <button className="text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewWallet;
