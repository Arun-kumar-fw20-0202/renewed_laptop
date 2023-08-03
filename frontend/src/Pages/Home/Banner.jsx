import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Items } from "./Items";

// Add more images as needed

export const MySlider = () => {
  let image1 =
    "https://www.shutterstock.com/shutterstock/photos/2041227701/display_1500/stock-vector-business-webinar-horizontal-banner-template-design-modern-banner-design-with-black-and-white-2041227701.jpg";
  let image2 =
    "https://marketplace.canva.com/EAE9QjX6rhA/1/0/1600w/canva-blue-pink-gradient-fashion-banner-cVzLo3B1IHE.jpg";
  let image3 =
    "https://futurevisioncomputers.com/wp-content/uploads/2021/03/banner_design_for_computer_institute.jpg";
  // Array of images to be displayed in the slider
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Function to show the next image
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to show the previous image
  //   const showPreviousImage = () => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   };

  // Function to start the automatic slideshow
  const startSlideshow = () => {
    const intervalId = setInterval(showNextImage, 3000); // Change image every 3 seconds
    return intervalId;
  };

  // Function to stop the automatic slideshow
  const stopSlideshow = (intervalId) => {
    clearInterval(intervalId);
  };

  // Start the slideshow when the component mounts
  React.useEffect(() => {
    const intervalId = startSlideshow();

    // Stop the slideshow when the component unmounts
    return () => {
      stopSlideshow(intervalId);
    };
  }, []);

  return (
    <Box
      m="10px"
      border={"10px"}
      width={"100%"}
      height="100%"
      position="relative"
    >
      {/* Display the current image */}
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        width="100%"
        objectFit={"container"}
        height="500px" // Adjust the height as needed
      />
      {/* Buttons to navigate to the next and previous images */}
      {/* <Button
        onClick={() => {
          stopSlideshow();
          showPreviousImage();
        }}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          stopSlideshow();
          showNextImage();
        }}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
      >
        Next
      </Button> */}
      <Items /> {/* using from Home/items.jsx */}
    </Box>
  );
};
