import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div>@lamamia, All Rights Reserved</div>
      <div>
        <Image src="/1.png" alt="socials" width={15} height={15} />
        <Image src="/2.png" alt="socials" width={15} height={15} />
        <Image src="/3.png" alt="socials" width={15} height={15} />
        <Image src="/4.png" alt="socials" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
