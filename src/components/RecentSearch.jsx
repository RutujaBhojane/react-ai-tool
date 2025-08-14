const RecentSearch = ({
  recentHistory,
  setRecentHistory,
  setSelectedHistory,
}) => {
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const clearSelectedHistory = (selectedItem) => {
    let history = JSON.parse(localStorage.getItem("history"));
    history = history.filter((item) => {
      if (item != selectedItem) {
        return item;
      }
    });
    setRecentHistory(history);
    localStorage.setItem("history", JSON.stringify(history));
  };
  return (
    <>
      <div className="col-span-1 dark:bg-zinc-800 bg-red-100 pt-3">
        <h1 className="text-xl dark:text-white text-black flex text-center justify-center">
          <span>Recent Search</span>
          <button
            onClick={clearHistory}
            className="cursor-pointer ml-2 hover:bg-zinc-900 bg-zinc-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </h1>
        <ul className="text-left overflow-auto mt-2">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <div className="flex justify-between pr-3 py-1">
                <li
                  key={index}
                  onClick={() => setSelectedHistory(item)}
                  className="w-full px-4 pl-4 truncate dark:text-zinc-400 text-zinc-700 text-lg cursor-pointer dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:bg-red-200 hover:text-zinc-900"
                >
                  {item}
                </li>
                <button
                  onClick={() => clearSelectedHistory(item)}
                  className="cursor-pointer ml-2 hover:bg-zinc-900 bg-zinc-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
