import axios from "axios";
import React from "react";

export default async function Stats() {
  const res = await axios.get("http://localhost:4000/users/userInfo");
  const data = res.data;

  return (
    <div className="container -mt-16 flex flex-col justify-center gap-16 md:flex-row">
      <div className="flex w-[400px] max-w-full flex-shrink flex-col items-center gap-8 rounded-lg bg-bg-100 py-12 shadow-md duration-200 hover:scale-105 hover:shadow-2xl xl:max-w-[300px]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-semibold">{data.user}</span>
          <span className="text-text-200">User</span>
        </div>
        <p className="w-1/2 text-center text-sm text-text-200">Users</p>
      </div>
      <div className="flex w-[400px] max-w-full flex-shrink flex-col items-center gap-8 rounded-lg bg-bg-100 py-12 shadow-md duration-200 hover:scale-105 hover:shadow-2xl xl:max-w-[300px]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-semibold">{data.proj}</span>
          <span className="text-text-200">User</span>
        </div>
        <p className="w-1/2 text-center text-sm text-text-200">Users</p>
      </div>
      <div className="flex w-[400px] max-w-full flex-shrink flex-col items-center gap-8 rounded-lg bg-bg-100 py-12 shadow-md duration-200 hover:scale-105 hover:shadow-2xl xl:max-w-[300px]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-semibold">{data.org}</span>
          <span className="text-text-200">User</span>
        </div>
        <p className="w-1/2 text-center text-sm text-text-200">qerewrwer</p>
      </div>
    </div>
  );
}
