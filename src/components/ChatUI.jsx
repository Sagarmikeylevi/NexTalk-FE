import { useChatAppContext } from "../context/ChatAppContext";
import { useMutation } from "@tanstack/react-query";
import { createChat } from "../http";
import Loader from "./UI/loader";
import Error from "./UI/showError";
import MessageBox from "./MessageBox";

const ChatUI = ({ members }) => {
  const {
    showSidebar,
    updateSideBar,
    userId: firstPerson,
    updateSecondPerson,
    updateActiveChatId,
    onlineUsers,
  } = useChatAppContext();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ firstPerson, secondPerson }) =>
      createChat(firstPerson, secondPerson),
    onSuccess: (chatId) => {
      updateActiveChatId(chatId);
    },
  });

  const chatHandler = (secondPerson, username) => {
    mutate({ firstPerson, secondPerson });
    updateSecondPerson({ id: secondPerson, name: username });
  };

  if (isPending) {
    return <Loader message="Setting Up Your Chat..." />;
  }

  if (isError) {
    console.log(error);
    return <Error message="Oops, something went wrong setting up your chat" />;
  }

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
              onClick={() => updateSideBar()}
            />
          </div>
          <div className="w-full h-[80%] rounded-l-md overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[#0000337a] scrollbar-track-transparent transition-all duration-300">
            {members.map((member) => (
              <div
                className="w-full h-[25%]  relative hover:bg-[#f2f2f2] ease-in-out duration-200"
                key={member.id}
                onClick={() => chatHandler(member.id, member.username)}
              >
                {onlineUsers?.some((user) => user?.userId === member.id) && (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/304/304286.png"
                    alt="online"
                    className="absolute right-4 top-[10%] translate-y-[-10%] h-4 w-4"
                  />
                )}

                <div className="absolute left-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4">
                  <img
                    src={member.avatar}
                    alt="avatar"
                    className="h-14 w-14 "
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-[#353535]">
                      {member.username}
                    </h2>
                    <p className="text-sm text-[#0000337a]">
                      I don't like this
                    </p>
                  </div>
                </div>

                <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-col items-center">
                  <span className="px-2 py-1 bg-[#6A4DFF] rounded-md text-[#FFFFFF] text-sm">
                    4
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showSidebar && (
        <div className="absolute left-0 top-0 h-full w-[10%] md:w-[5%] rounded-l-md flex flex-col items-center bg-[#FFFFFF] shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6130/6130466.png"
            alt="awipe-right"
            className="h-10 w-10 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] cursor-pointer"
            onClick={() => updateSideBar()}
          />
        </div>
      )}

      <MessageBox />
    </div>
  );
};

export default ChatUI;
