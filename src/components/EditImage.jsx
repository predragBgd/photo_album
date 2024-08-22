import { useEffect, useState } from "react";

export default function EditImage({
  id,
  tag,
  name,
  description,
  handleEditImage,
  handleCloseEditPopup,
}) {
  const [newTag, setNewTag] = useState(tag || "");
  const [newName, setNewName] = useState(name || "");
  const [newDescription, setNewDescription] = useState(description || "");
  useEffect(() => {
    setNewTag(tag || "");
    setNewName(name || "");
    setNewDescription(description || "");
  }, [tag, name, description]);

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2>EditImage</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditImage(id, newTag, newName, newDescription);
              handleCloseEditPopup();
            }}
            className="max-w-sm mx-auto p-2"
          >
            <div className="mb-5">
              <label
                htmlFor="tag"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tag:
              </label>
              <input
                id="tag"
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={newName}
                required
                onChange={(e) => setNewName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description:
              </label>
              <input
                id="description"
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          <button
            onClick={handleCloseEditPopup}
            className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
