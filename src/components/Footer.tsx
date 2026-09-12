import React from "react";

import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
      <div>
        <hr className="text-gray-300 mt-18"/>
        <div className="container mx-auto my-8 ">
      <div className="flex md:flex-row space-y-4 flex-col justify-between pt-5">
        <div className="space-y-3">
          <img src={FooterLogo} alt="" />
          <p>
            Curated tools, technologies, and <br /> resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 font-bold">
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>
        </div>
        <div>
            <h2 className="font-bold">PRODUCT</h2>
            <p>Home</p>
            <p>Technologies</p>
            <p>Projects</p>
        </div>
        <div>
            <h2 className="font-bold">COMPANY</h2>
            <p>About</p>
            <p>Contact</p>
            <p>Careers</p>
        </div>
        <div>
            <h2 className="font-bold">LEGAL</h2>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
      </div>
      <hr className="text-gray-300 my-7"/>
      <div className="flex justify-between text-sm px-5">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
            <p>Privacy</p>
            <p>Terms</p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Footer;
