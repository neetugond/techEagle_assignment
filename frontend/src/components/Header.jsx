import React from 'react';

const Header = () => {
  return (
    <div className="shadow sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src='https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg' alt="Logo" className="cursor-pointer h-8" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white">Login</button>
          <button className="border p-1 text-black-700">
            Logout
          </button>

          <div className="block xl:hidden lg:hidden md:hidden sm:block">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;