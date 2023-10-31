import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputHandle = ({ label }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <label
        htmlFor="exampleFormControlInput3"
        className=" capitalize text-base mb-2"
      >
        Enter Your {label}
      </label>

      <div className="relative mb-6" data-te-input-wrapper-init="">
        <input
          type={label}
          className="w-full py-2 text-[1.1rem] rounded focus:outline-none focus:text-black pl-2 mt-2"
          id="exampleFormControlInput3"
          placeholder={`Enter Your ${label}`}
          onChange={(e) => {
            setInput({ ...input, [label]: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default InputHandle;
