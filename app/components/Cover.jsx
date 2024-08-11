import Image from "next/image";
import React from "react";

import coverImg from "/public/assets/images/cover-min.jpg";

const Cover = () => {
  return (
    <div class="mt-20">
      <h2 class="text-2xl font-medium text-dark text-center mb-10">
        Spring essential
      </h2>
      <Image
        src={coverImg}
        class="w-full rounded-lg h-[85vh] object-cover"
        alt=""
      />
    </div>
  );
};

export default Cover;
