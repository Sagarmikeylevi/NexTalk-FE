import { useMutation, useQuery } from "@tanstack/react-query";
import { useChatAppContext } from "../context/ChatAppContext";
import Loader from "./UI/loader";
import Error from "./UI/showError";
import { getMessages, sendChat } from "../http";
import { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";

const MessageBox = () => {
  const [sendMessage, setSendMessage] = useState("");
  const scroll = useRef();

  const {
    showSidebar,
    secondPerson,
    activeChatId,
    userId,
    updateMessages,
    messages,
    updateNewMessage,
  } = useChatAppContext();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const {
    data,
    isPending: isMessagePending,
    isError: isMessageError,
    error: messageError,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getMessages(activeChatId),
    enabled: activeChatId !== null,
    initialData: [],
  });

  useEffect(() => {
    if (data) {
      updateMessages(data);
    }
  }, [data]);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ chatId, senderId, text }) =>
      sendChat(chatId, senderId, text),

    onSuccess: (data) => {
      messages.push(data);
      updateNewMessage(data);
    },
  });

  const sendMessageHandler = () => {
    if (sendMessage.trim().length > 0) {
      mutate({ chatId: activeChatId, senderId: userId, text: sendMessage });
      setSendMessage("");
    }
  };

  if (isError) {
    console.log(error);
    return <Error message="Error in sending messages" />;
  }

  if (isMessagePending) {
    return <Loader message="Fetching messages..." />;
  }

  if (isMessageError) {
    console.log(messageError);
    return <Error message="Unable to retrieve messages. Please try again" />;
  }

  return (
    <div
      className={`h-full rounded-r-md absolute right-0 ${
        showSidebar ? "w-[90%] md:w-[60%] lg:w-[65%]" : "w-[90%] md:w-[95%]"
      }`}
    >
      {!activeChatId && (
        <h1 className="text-lg font-bold text-[#0000337a] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] tracking-wide">
          No active chat
        </h1>
      )}
      {activeChatId && (
        <>
          <h1 className="text-lg font-bold text-[#0000337a] absolute left-[50%] translate-x-[-50%] top-2 tracking-wide">
            {secondPerson.name}
          </h1>

          <div className="absolute w-[90%] h-[70%] top-[10%] left-[50%] translate-x-[-50%] py-4 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[#eeeef1cf] scrollbar-track-transparent transition-all duration-300 px-4">
            {messages.length === 0 && <h1>No messages</h1>}
            {messages.map((message) => {
              if (message.senderId === secondPerson.id) {
                return (
                  <div
                    className="flex justify-start mb-2"
                    key={message._id}
                    ref={scroll}
                  >
                    <span className="px-4 py-2 bg-[#f2f2f2] w-auto rounded-md">
                      {message.text}
                    </span>
                  </div>
                );
              } else {
                return (
                  <div
                    className="flex justify-end mb-2"
                    key={message._id}
                    ref={scroll}
                  >
                    <span className="px-4 py-2 bg-[#6A4DFF] text-[#FFFFFF] rounded-md">
                      {message.text}
                    </span>
                  </div>
                );
              }
            })}
          </div>

          <div className="h-[15%] w-full bg-[#e6e6e6] absolute bottom-0 rounded-br-md">
            <div className="absolute left-4 top-[50%] translate-y-[-50%] w-[80%] sm-[85%] md:w-[90%] flex flex-row space-x-4 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10015/10015412.png"
                alt="message"
                className="w-8 h-8 opacity-40"
              />
              <InputEmoji
                type="text"
                placeholder="Type here"
                value={sendMessage}
                borderColor="transparent"
                cleanOnEnter
                onEnter={sendMessageHandler}
                onChange={setSendMessage}
              />
            </div>

            <div className="absolute right-4 top-[50%] translate-y-[-50%] flex flex-row space-x-4 items-center">
              {isPending && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3647/3647339.png"
                  alt="submit"
                  className="w-8 h-8 cursor-pointer"
                  onClick={sendMessageHandler}
                />
              )}

              {!isPending && (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/13734/13734068.png"
                  alt="submit"
                  className="w-8 h-8 cursor-pointer"
                  onClick={sendMessageHandler}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageBox;
