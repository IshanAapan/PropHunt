import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="text-lg font-bold">PropHunt</h4>
            <p className="text-sm">Helping you find the perfect space.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">© 2025 PropHunt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
