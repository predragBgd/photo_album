import { useState } from "react";
import InfoOfImage from "./InfoOfImage";
import EditImage from "./EditImage";

export default function SingleImage({
  image,
  handleDeleteImage,
  handleEditImage,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editImage, setEditImage] = useState({});

  const handleInfoClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const handleCloseInfoPopup = () => {
    setIsPopupOpen(false);
    setSelectedImage({});
  };
  const handleEditClick = (image) => {
    setEditImage(image);
    setIsEditPopupOpen(true);
  };
  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setEditImage({});
  };
  return (
    <>
      <img
        className="w-full mb-2 inline-block"
        loading="lazy"
        src={image.img}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-around bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity mb-2">
        <button className="text-sm" onClick={() => handleEditClick(image)}>
          Edit Info
        </button>
        <button className="text-sm" onClick={() => handleDeleteImage(image.id)}>
          Delete Photo
        </button>
        <button className="text-sm" onClick={() => handleInfoClick(image)}>
          Info
        </button>
      </div>
      {isPopupOpen && selectedImage && (
        <InfoOfImage
          selectedImage={selectedImage}
          handleCloseInfoPopup={handleCloseInfoPopup}
          handleEditImage={handleEditImage}
        />
      )}
      {isEditPopupOpen && editImage && (
        <EditImage
          id={editImage.id}
          tag={editImage.tag}
          name={editImage.name}
          description={editImage.description}
          handleCloseEditPopup={handleCloseEditPopup}
          handleEditImage={handleEditImage}
        />
      )}
    </>
  );
}
