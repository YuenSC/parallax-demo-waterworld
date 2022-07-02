import React from "react";

const OpenStatusTag = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`inline px-4 py-1 text-sm text-white rounded-full ${
        isOpen ? "bg-green-400" : "bg-red-400"
      } `}
    >
      {isOpen ? "開放" : "關閉"}
    </div>
  );
};

export default OpenStatusTag;
