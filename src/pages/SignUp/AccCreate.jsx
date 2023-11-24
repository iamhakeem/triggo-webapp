import React from "react";
import world from "../../assets/world.png";

function AccCreate() {
  return (
    <>
    <div className="flex justify-center">
      <img src={world} className="w-2/3 mt-10" alt='' />
    </div>
    <div className="text-center text-3xl font-bold w-2/3 mx-auto">
      Creating your account
    </div>
    </>
  );
}

export default AccCreate;
