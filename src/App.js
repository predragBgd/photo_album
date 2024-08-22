import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import SingleImage from "./components/SingleImage";
import AddImage from "./components/AddImage";

function App() {
  const [images, setImages] = useState([
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      name: "Materhorn",
      description:
        "The Matterhorn has a pyramidal shape with four faces nearly facing the four compass points.",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg",
      name: "Materhorn 2",
      description:
        "The Matterhorn has a pyramidal shape with four faces nearly facing the four compass points.",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg",
      name: "sssaa",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg",
      name: "zzzz",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg",
      tag: "",
      name: "sdf",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/1021808/pexels-photo-1021808.jpeg",
      tag: "",
      name: "sccs",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg",
      tag: "",
      name: "",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
      tag: "",
      name: "",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg",
      tag: "",
      name: "",
      description: "",
    },
    {
      id: uuidv4(),
      img: "https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg",
      tag: "qwer",
      name: "qwer",
      description: "qwer",
    },
  ]);
  const addImage = (img, tag, name, description) => {
    setImages((prewImages) => [
      { id: uuidv4(), img, tag, name, description },
      ...prewImages,
    ]);
  };
  const handleDeleteImage = (id) => {
    const newImages = images.filter((image) => image.id !== id);
    setImages(newImages);
  };
  const handleEditImage = (id, newTag, newName, newDescription) => {
    console.log([id, newTag, newName, newDescription]);

    const newImages = images.map((image) => {
      if (image.id === id) {
        return {
          ...image,
          tag: newTag,
          name: newName,
          description: newDescription,
        };
      }
      return image;
    });
    setImages(newImages);
  };
  return (
    <div className="App">
      <h1 className="text-4xl font-extrabold dark:text-white">Photo album</h1>
      <AddImage addImage={addImage} />
      <div className="columns-2xs gap-2 mx-2 ">
        {images.map((image) => {
          return (
            <div key={image.id} className="relative group">
              <SingleImage
                image={image}
                handleDeleteImage={handleDeleteImage}
                handleEditImage={handleEditImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
