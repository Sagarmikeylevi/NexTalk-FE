import { useState } from "react";
import { Link, Form, useNavigation } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formLabelStyle = "font-semibold text-[#0000337a]";
  const formInputStyle =
    "mt-2 pl-4 w-[18rem] h-[2.5rem] border-[1px] bg-transparent rounded-md outline-none text-[#0000337a]";

  return (
    <div className="h-auto mt-8 w-full grid place-content-center mb-8">
      <div className="w-[28rem] h-[32rem] rounded flex flex-col items-center justify-between pt-8 pb-4 bg-white shadow-sm">
        <div className="w-[90%] grid  place-content-center gap-2">
          <div className="flex flex-row space-x-1 pl-5">
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/128/14099/14099305.png"
              alt="hello"
            />
            <h1 className="text-2xl font-bold tracking-wide text-[#000033]">
              Create your account
            </h1>
          </div>

          <p className="tracking-wider text-[#0000337a] text-lg ">
            Embark on your chat adventure with us!
          </p>
        </div>

        <Form method="POST" className="flex flex-col gap-2 mt-[-1rem]">
          <div className="flex flex-col">
            <label htmlFor="name" className={formLabelStyle}>
              Name <span className="text-[#6A4DFF]">*</span>
            </label>
            <input
              className={`${formInputStyle} ${
                name.trim().length === 0
                  ? "border-[#00001a] "
                  : "border-[#9999ff]"
              }`}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className={formLabelStyle}>
              Email<span className="text-[#6A4DFF]">*</span>
            </label>
            <input
              className={`${formInputStyle} ${
                email.trim().length === 0 || email.indexOf("@") === -1
                  ? "border-[#00001a]"
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
            className={`mt-4 w-[18rem] h-[2.5rem] ${
              isSubmitting ? "bg-[#6A4DFF]" : "bg-[#000033]"
            } text-white rounded mt-2 hover:bg-teal-400 transition duration-300 ease-in-out ${
              name.trim().length === 0 ||
              email.trim().length === 0 ||
              email.indexOf("@") === -1 ||
              password.trim().length === 0
                ? `pointer-events-none`
                : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </Form>
        <p className="text-sm tracking-wider text-[#0000337a]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-base font-semibold text-[#000033] cursor-pointer"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
