import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { loginUser } from "../http";
import Error from "./UI/showError";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ loginData }) => loginUser(loginData),
    onSuccess: () => {
      navigate("/");
    },
  });

  const loginHandler = (event) => {
    event.preventDefault();
    mutate({ loginData: { email, password } });
  };

  if (isError) {
    return <Error message={error.response.data.error} />;
  }

  const formLabelStyle = "font-semibold text-[#0000337a]";
  const formInputStyle =
    "mt-2 pl-4 w-[100%] text-[#0000337a] h-[2.5rem] rounded border-[1px] bg-transparent outline-none";
  return (
    <div className="h-auto mt-8 w-full grid place-content-center mb-8">
      <div className="w-[80vw] max-w-[28rem] h-[26rem] rounded flex flex-col items-center justify-center pt-8 pb-4 gap-8 bg-white shadow-md">
        <div className="w-[90%] grid  place-content-center gap-2">
          <div className="flex flex-row space-x-2">
            <h1 className="text-3xl font-bold tracking-wide text-[#000033] pl-8">
              Hey, hello
            </h1>
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/128/5821/5821940.png"
              alt="select items"
            />
          </div>

          <p className="tracking-wider text-[#0000337a] text-lg">
            Enter your login credentials
          </p>
        </div>

        <Form
          onSubmit={loginHandler}
          method="POST"
          className="mt-[-1rem] flex flex-col gap-2 w-[80%]"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className={formLabelStyle}>
              Email<span className="text-[#6A4DFF]">*</span>
            </label>
            <input
              className={`${formInputStyle} ${
                email.trim().length === 0
                  ? " border-[#00001a]"
                  : "border-[#9999ff]"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className={formLabelStyle}>
              Password <span className="text-[#6A4DFF]">*</span>
            </label>
            <input
              className={`${formInputStyle} ${
                password.trim().length === 0
                  ? "border-[#00001a]"
                  : "border-[#9999ff]"
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className={`mt-4 w-[100%] h-[2.5rem]  ${
              isPending ? "bg-[#6A4DFF]" : "bg-[#000033]"
            } text-white rounded mt-2 hover:bg-[#6A4DFF] transition duration-300 ease-in-out ${
              email.trim().length === 0 || password.trim().length === 0
                ? `pointer-events-none`
                : ""
            }`}
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Loging in..." : "Log in"}
          </button>
        </Form>
        <p className="text-sm tracking-wider text-[#0000337a]">
          Don't have an account?
          <Link
            to="/register"
            className="text-base font-semibold text-[#000033] cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
