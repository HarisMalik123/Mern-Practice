import React from "react";

function Forms() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="blogTitle">
              Blog Title:
            </label>
            <input
              type="text"
              name="blogTitle"
              id="blogTitle"
              placeholder="Enter Title Here"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-2">Blog Content</h2>
            <textarea
              id="area"
              placeholder="Enter Your Content Here"
              className="w-full h-32 px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium mb-1">
              Three Tags:
            </label>
            <input
              type="text"
              name="Tag1"
              placeholder="Tag 1"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="Tag2"
              placeholder="Tag 2"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="Tag3"
              placeholder="Tag 3"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
