import { useState } from "react";

const ChatUI = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-[98vw] ml-[1vw] h-[84%] mt-[2vh] absolute left-0 top-[12%] rounded-md bg-[#FFFFFF] shadow-md">
      {showSidebar && (
        <div className="absolute left-0 top-0 h-full w-[80%] rounded-l-md flex flex-col items-center bg-[#FFFFFF] shadow-lg z-[100] md:w-[40%] lg:w-[35%]">
          <div className="w-full h-[20%] relative  border-b-[1px] border-[#353535] flex items-center">
            <div className="w-[80%] ml-[5%] h-[3rem] border-[1px] border-[#353535] rounded-md relative">
              <img
                src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
                alt="search_bar"
                className="h-6 w-6 absolute right-2 top-[50%] translate-y-[-50%] opacity-60"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-[80%] h-full px-4 rounded-md bg-transparent text-thin text-[#0000337a] outline-none tracking-wide"
              />
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/6130/6130456.png"
              alt="awipe-left"
              className="h-10 w-10 absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer"
              onClick={() => setShowSidebar(false)}
            />
          </div>
          <div className="w-full h-[80%] rounded-l-md overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[#0000337a] scrollbar-track-transparent transition-all duration-300">
            {/* person1 */}
            <div className="w-full h-[25%]  relative hover:bg-[#f2f2f2] ease-in-out duration-200">
              <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
                  alt="avatar"
                  className="h-14 w-14 "
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-[#353535]">
                    Ronald Richards
                  </h2>
                  <p className="text-sm text-[#0000337a]">I don't like this</p>
                </div>
              </div>

              <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-col items-center">
                <span className="px-2 py-1 bg-[#6A4DFF] rounded-md text-[#FFFFFF] text-sm">
                  4
                </span>
              </div>
            </div>
            {/* person1 */}

            {/* person-2 */}
            <div className="w-full h-[25%]  relative hover:bg-[#f2f2f2] ease-in-out duration-200">
              <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
                  alt="avatar"
                  className="h-14 w-14 "
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-[#353535]">
                    Ronald Richards
                  </h2>
                  <p className="text-sm text-[#0000337a]">I don't like this</p>
                </div>
              </div>

              <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-col items-center">
                <span className="px-2 py-1 bg-[#6A4DFF] rounded-md text-[#FFFFFF] text-sm">
                  4
                </span>
              </div>
            </div>
            {/* person-2 */}
            {/* person-3 */}
            <div className="w-full h-[25%]  relative hover:bg-[#f2f2f2] ease-in-out duration-200">
              <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
                  alt="avatar"
                  className="h-14 w-14 "
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-[#353535]">
                    Ronald Richards
                  </h2>
                  <p className="text-sm text-[#0000337a]">I don't like this</p>
                </div>
              </div>

              <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-col items-center">
                <span className="px-2 py-1 bg-[#6A4DFF] rounded-md text-[#FFFFFF] text-sm">
                  4
                </span>
              </div>
            </div>
            {/* person-3 */}
            {/* person-4 */}
            <div className="w-full h-[25%]  relative hover:bg-[#f2f2f2] ease-in-out duration-200">
              <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
                  alt="avatar"
                  className="h-14 w-14 "
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-[#353535]">
                    Ronald Richards
                  </h2>
                  <p className="text-sm text-[#0000337a]">I don't like this</p>
                </div>
              </div>

              <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-col items-center">
                <span className="px-2 py-1 bg-[#6A4DFF] rounded-md text-[#FFFFFF] text-sm">
                  4
                </span>
              </div>
            </div>
            {/* person-4 */}
            {/* person-4 */}
            <div className="w-full h-[25%]  relative hover:bg-[#f2f2f2] ease-in-out duration-200">
              <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
                  alt="avatar"
                  className="h-14 w-14 "
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-[#353535]">
                    Ronald Richards
                  </h2>
                  <p className="text-sm text-[#0000337a]">I don't like this</p>
                </div>
              </div>

              <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-col items-center">
                <span className="px-2 py-1 bg-[#6A4DFF] rounded-md text-[#FFFFFF] text-sm">
                  4
                </span>
              </div>
            </div>
            {/* person-4 */}
          </div>
        </div>
      )}

      {!showSidebar && (
        <div className="absolute left-0 top-0 h-full w-[10%] md:w-[5%] rounded-l-md flex flex-col items-center bg-[#FFFFFF] shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6130/6130466.png"
            alt="awipe-right"
            className="h-10 w-10 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      )}

      <div
        className={`h-full rounded-r-md absolute right-0 ${
          showSidebar ? "w-[90%] md:w-[60%] lg:w-[65%]" : "w-[90%] md:w-[95%]"
        }`}
      >
        <h1 className="text-lg font-bold text-[#0000337a] absolute left-[50%] translate-x-[-50%] top-2 tracking-wide">
          Ronald Richards
        </h1>

        <div className="absolute w-[90%] h-[70%] top-[10%] left-[50%] translate-x-[-50%] py-4">
          <div className="flex justify-start">
            <span className="px-4 py-2 bg-[#f2f2f2] w-auto rounded-md">
              Hello
            </span>
          </div>

          <div className="flex justify-end">
            <span className="px-4 py-2 bg-[#6A4DFF] text-[#FFFFFF] rounded-md">
              How are you?
            </span>
          </div>
        </div>

        <div className="h-[15%] w-full bg-[#e6e6e6] absolute bottom-0 rounded-br-md">
          <div className="absolute left-4 top-[50%] translate-y-[-50%] w-[70%] flex flex-row space-x-4 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10015/10015412.png"
              alt="message"
              className="w-8 h-8 opacity-40"
            />
            <input
              type="text"
              placeholder="Type here"
              className="w-full h-full bg-transparent outline-none text-lg text-thin text-[#0000337a]"
            />
          </div>

          <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1023/1023656.png"
              alt="emoji"
              className="w-8 h-8 opacity-40 cursor-pointer"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/128/13734/13734068.png"
              alt="submit"
              className="w-8 h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
