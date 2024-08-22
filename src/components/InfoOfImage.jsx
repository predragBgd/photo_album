export default function InfoOfImage({ selectedImage, handleCloseInfoPopup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">{selectedImage.name}</h2>
        <p>{selectedImage.description}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCloseInfoPopup}
        >
          Close
        </button>
      </div>
    </div>
  );
}
