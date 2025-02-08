import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const [user, setUser] = useState({});

  const fetchApi = async (url) => {
    try {
      const res = await axios.get(url);
      const result = res.data.results[0];
      //   const result = res.data.results[0].picture.large;
      console.log(result);
      setUser(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi("https://randomuser.me/api/?page=1&results=1&seed=abc/");
  }, []);

  return (
    <>
      <div className="w-[30%] h-[400px] mx-auto mt-[7rem] flex justify-center items-center gap-7 border bg-linear-to-r from-cyan-300 to-pink-200 shadow-2xl rounded-lg">
        {/* Img section */}
        <div className="w-[200px] border border-white rounded-lg">
          <img
            src={user?.picture?.large}
            alt="photo"
            className="rounded-lg w-[250px] h-[250px]"
          />
        </div>
        {/* Content Section */}
        <div className=" flex flex-col justify-start items-start gap-6">
          <h1 className="text-xl px-3 py-2">
            {user?.name?.first} {user?.name?.last}
          </h1>
          <h1 className="text-lg px-3 py-2">{user.gender}</h1>
          <h1 className="text-lg px-3 py-2">{user.cell}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
