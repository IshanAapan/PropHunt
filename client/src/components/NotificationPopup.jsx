import React, { useState, useEffect } from "react";

const NotificationPopup = () => {
  const [show, setShow] = useState(false);

  // Show popup after page loads
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full mx-4 text-center">
        <h2 className="text-xl font-bold mb-2">📢 Notifications</h2>
        <p className="text-gray-600 mb-4">
          Welcome to PropHunt! Don’t miss our latest offers on properties near
          you.
        </p>
        <button
          onClick={() => setShow(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg self-center"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
