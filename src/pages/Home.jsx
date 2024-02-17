import { useQuery } from "@tanstack/react-query";
import ChatUI from "../components/ChatUI";
import { getAllMembers } from "../http";
import Loader from "../components/UI/loader";
import { useChatAppContext } from "../context/ChatAppContext";

export default function HomePage() {
  const { userId } = useChatAppContext();
  const {
    data: members,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["members"],
    queryFn: () => getAllMembers(userId),
  });

  if (isPending) {
    return <Loader message="Feching members" />;
  }

  if (isError) {
    console.log(error);
    return <Error message="Error in fetching members" />;
  }

  return <ChatUI members={members} />;
}
