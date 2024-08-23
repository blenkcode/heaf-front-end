import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-tr from-sky-600 to-sky-900 z-[9999]">
      <div className="w-16 h-16 border-8 border-gray-200 border-t-sky-900 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
