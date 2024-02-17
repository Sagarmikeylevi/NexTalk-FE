import { FaSpinner } from "react-icons/fa";
export default function Loader({ message }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner className="animate-spin mr-2" />
      <p>{message}</p>
    </div>
  );
}
