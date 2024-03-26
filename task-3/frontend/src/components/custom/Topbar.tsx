//asset import

export const Topbar = () => {
  return (
    <div>
      {/* mobile view */}
      <div className="flex flex-col gap-6 md:hidden">
        <div className="flex justify-between py-2">
          {/* logo */}
          <div>
            <img src="../../assets/react.svg" alt="logo" />
          </div>
          {/* avatar */}
          <div>
            <img src="../../assets/avatar.png" alt="avatar" />
          </div>
        </div>

        {/* search-box */}
        <div className="px-4">
            <FromInput/>
        </div>
      </div>

      {/* desktopView */}
      <div className="hidden bg-white px-8 py-2 border-b border-[#EAECF0] md:flex md:justify-between gap-2">
        {/* search-box */}
        <div className="w-full">
            <FromInput/>
        </div>

        {/* items */}
        <div className="w-[208px] flex gap-4 items-center justify-between">
          {/* icons */}
          <div className="w-full flex justify-between">
            <img src="../../assets/bolt.png" alt=""/>
            <img src="../../assets/bolt.png" alt=""/>
            <img src="../../assets/bolt.png" alt=""/>
          </div>

          {/* avatar */}
          <div>
            <img src="../../assets/avatar.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

const FromInput = () => {
  return (
    <>
      <form className="flex border-2 rounded-sm px-4 py-1">
        <img src="../../assets/search.png" height={"1rem"} width={"rem"} alt="searicon"></img>
        <input onChange={() => {}} type="text" className="w-full outline-none" placeholder="Search..."></input>
      </form>
    </>
  );
};
