import { BsFillCartFill } from "react-icons/bs";

const Right = () => {
  return (
    <div className={`flex items-center gap-5 flex-1 justify-center`}>
      <button>Register</button>
      <button>Sign up</button>
      <BsFillCartFill size={16}/>
    </div>
  );
};

export default Right;
