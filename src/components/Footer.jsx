import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 text-center mt-8">
      <div>
        &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="https://github.com/your-repo" className="underline">GitHub</a>
      </div>
    </footer>
  );
}