import { Link } from "react-router-dom";

const firsthome = () => {
  return (
    <div className="">
      <h1 className="px-10 text-5xl mt-10 font-semibold">
        Motivation is what sets you in motion, <br /> habit is what keeps you
        going.
      </h1>
      <h2 className="px-10 mt-5 text-lg">
        learniverse is a place where you can develop your academic knowledge and
        practice <br /> questions. However, don&apos;t forget to become a member
        with us.
      </h2>
      <div className="px-10">
        <Link to="/SignUp">
          <button className="mt-5 rounded-md bg-[#FB6D48] text-white w-[100px] h-[40px]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default firsthome;
