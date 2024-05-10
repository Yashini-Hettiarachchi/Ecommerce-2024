import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { saveAs } from "file-saver"; // Import file-saver for saving files
import image1 from "../../src/assets/1.png"; // Import image directly
import image2 from "../../src/assets/2.png"; // Import image directly
import image3 from "../../src/assets/aenter.jpg"; // Import image directly
import image4 from "../../src/assets/bmain.jpg"; // Import image directly
import image5 from "../../src/assets/5.png"; // Import image directly
import image6 from "../../src/assets/3.png"; // Import image directly
import image7 from "../../src/assets/4.png"; // Import image directly
import image8 from "../../src/assets/dupstair.png"; // Import image directly
import image9 from "../../src/assets/efloor.png"; // Import image directly
import image10 from "../../src/assets/guright.jpg"; // Import image directly
import image11 from "../../src/assets/hleft.jpg"; // Import image directly
import image12 from "../../src/assets/icloth.jpg"; // Import image directly
import image13 from "../../src/assets/icloth2.jpg"; // Import image directly
import image14A from "../../src/assets/cinside.jpg"; // Import image directly

import image14 from "../../src/assets/jdownstair.png"; // Import image directly
import image15 from "../../src/assets/kfirst.png"; // Import image directly
import image16 from "../../src/assets/qfright.jpeg"; // Import image directly
import image17 from "../../src/assets/rleft.jpg"; // Import image directly
import image18 from "../../src/assets/sstair.jpg"; // Import image directly
import image19 from "../../src/assets/tground.jpg"; // Import image directly
import image20 from "../../src/assets/ueright.jpg"; // Import image directly
import image21 from "../../src/assets/vexit2.jpg"; // Import image directly

import youMusic from "../../src/assets/You.mp3";
import happyMusic from "../../src/assets/happy.mp3";

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14A,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

const Home = () => {
  const [shops, setShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [image, setImage] = useState(image1); // Initial image
  const [music, setMusic] = useState(null); // State to store selected music

  useEffect(() => {
    getAllShop();
    // Play music when component mounts
    playMusic();

    const timer = setTimeout(() => {
      setImage((prevImage) => {
        const currentIndex = imageArray.indexOf(prevImage); // Get the current index of the image
        const nextIndex = (currentIndex + 1) % imageArray.length; // Calculate the next index
        if (nextIndex === 21) {
          // Check if next index is image22
          return image1; // Reset to image1
        } else {
          return imageArray[nextIndex]; // Set the next image
        }
      });
    }, 20000); // Change image after 20 seconds

    return () => clearTimeout(timer);
  }, [image]); // Run the effect every time image changes

  // Get all Shops
  const getAllShop = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/Shop/get-Shop`
      );
      setShops(data.shops);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter shops based on search query
  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle button click and change image
  const handleButtonClick = () => {
    setImage(image2);
  };

  // Function to select music
  const selectMusic = (musicFile) => {
    // Set new music
    setMusic(musicFile);

    // Stop currently playing music
    stopMusic();
  };

  // Function to play selected music
  const playMusic = () => {
    if (music) {
      const audio = new Audio(music);
      audio.play();
    }
  };

  // Function to stop currently playing music
  const stopMusic = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset the playback to the beginning
    }
  };

  // Function to handle button click and change image to image3
  const handleSecondButtonClick = () => {
    setImage(image3);
  };

  // Function to handle button click and change image to image4
  const handleThirdButtonClick = () => {
    setImage(image4);
  };

  // Function to handle button click and change image to image5
  const handleForthButtonClick = () => {
    setImage(image5);
  };

  // Function to handle button click and change image to image5
  const handleFifthButtonClick = () => {
    setImage(image6);
  };

  // Function to handle button click and change image to image6
  const handleSixthButtonClick = () => {
    setImage(image7);
  };

  // Function to handle button click and change image to image7
  const handleSeventhButtonClick = () => {
    setImage(image8);
  };

  // Function to handle button click and change image to image8
  const handleEighthButtonClick = () => {
    setImage(image9);
  };

  // Function to handle button click and change image to image9
  const handleNinthButtonClick = () => {
    setImage(image10);
  };

  // Function to handle button click and change image to image10
  const handleTenthButtonClick = () => {
    setImage(image11);
  };

  // Function to handle button click and change image to image11
  const handleEleventhButtonClick = () => {
    setImage(image12);
  };

  // Function to handle button click and change image to image12
  const handleTwelfthButtonClick = () => {
    setImage(image13);
  };

  // Function to handle button click and change image to image12
  const handleTwelfth1ButtonClick = () => {
    setImage(image14A);
  };

  // Function to handle button click and change image to image13
  const handleThirteenthButtonClick = () => {
    setImage(image14);
  };

  // Function to handle button click and change image to image14
  const handleFourteenthButtonClick = () => {
    setImage(image15);
  };

  // Function to handle button click and change image to image15
  const handleFifteenthButtonClick = () => {
    setImage(image16);
  };

  // Function to handle button click and change image to image16
  const handleSixteenthButtonClick = () => {
    setImage(image17);
  };

  // Function to handle button click and change image to image17
  const handleSeventeenthButtonClick = () => {
    setImage(image18);
  };

  // Function to handle button click and change image to image18
  const handleEighteenthButtonClick = () => {
    setImage(image19);
  };

  // Function to handle button click and change image to image19
  const handleNineteenthButtonClick = () => {
    setImage(image20);
  };

  // Function to handle button click and change image to image20
  const handleTwentiethButtonClick = () => {
    setImage(image21);
  };

  // Function to handle button click and change image to image1
  const handleTwentyFirstButtonClick = () => {
    setImage(image1);
  };

  const buttonStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginRight: "10px",
  };

  // Rest of your code...

  // Function to download PDF with shop details
  const downloadPDF = () => {
    // Create a new instance of jsPDF
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF();

    // Set properties for PDF
    doc.text("Miracle Shopping Mall", 10, 10); // Add mall name

    // Add shop details to PDF in table format
    let y = 20;
    // Set column widths for the table
    const columnWidths = [100, 200]; // Adjust width as needed

    // Add table header
    doc.text("Available Categories", 10, y);
    doc.text("Shop Names", 110, y);
    // Draw horizontal line bar after the header
    doc.line(10, y + 3, 310, y + 3);
    // Draw vertical lines between columns
    doc.line(110, y, 110, y + 15); // Vertical line after the first column
    y += 8; // Move down slightly for table header and line bar

    filteredShops.forEach((shop) => {
      doc.text(shop.name, 10, y);
      doc.text(shop.details, 110, y);
      // Draw vertical line between columns
      doc.line(110, y - 2, 110, y + 15);
      y += 15; // Increase y by 15 to create space between rows
    });

    // Save the PDF
    doc.save("shops.pdf");
  };

  return (
    <Layout title={"Home"}>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-6" style={{ position: "relative" }}>
            {/* Button on the image */}
            {image === image1 && (
              <button
                onClick={handleButtonClick}
                className="btn btn-primary"
                style={{ position: "absolute", top: "300px", right: "20px" }} // Align button to the top-right
              >
                ➡️
              </button>
            )}
            {image === image2 && (
              <button
                onClick={handleSecondButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ⬅️
              </button>
            )}
            {image === image3 && (
              <button
                onClick={handleThirdButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ⬆️
              </button>
            )}
            {image === image4 && (
              <button
                onClick={handleForthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                👁️👁️⬆️
              </button>
            )}
            {image === image5 && (
              <button
                onClick={handleFifthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "45%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ⬆️
              </button>
            )}
            {/* // Button for image6 */}
            {image === image6 && (
              <button
                onClick={handleSixthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ⬆️
              </button>
            )}
            {/* // Button for image7 */}
            {image === image7 && (
              <button
                onClick={handleSeventhButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ↖️
              </button>
            )}
            {/* // Button for image8 */}
            {image === image8 && (
              <button
                onClick={handleEighthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ↪️
              </button>
            )}
            {/* // Button for image9 */}
            {image === image9 && (
              <button
                onClick={handleNinthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ➡️
              </button>
            )}
            {/* // Button for image10 */}
            {image === image10 && (
              <button
                onClick={handleTenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ➡️
              </button>
            )}
            {/* // Button for image11 */}
            {image === image11 && (
              <button
                onClick={handleEleventhButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                🔼
              </button>
            )}
            {/* // Button for image12 */}
            {image === image12 && (
              <button
                onClick={handleTwelfthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ➡️
              </button>
            )}
            {/* // Button for image13 */}
            {image === image13 && (
              <button
                onClick={handleTwelfth1ButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ➡️
              </button>
            )}
            {/* // Button for image13 */}
            {image === image14A && (
              <button
                onClick={handleThirteenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "60%",
                  left: "70%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ↙️
              </button>
            )}

            {/* // Button for image14 */}
            {image === image14 && (
              <button
                onClick={handleFourteenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ↙️
              </button>
            )}
            {/* // Button for image15 */}
            {image === image15 && (
              <button
                onClick={handleFifteenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                Go Inside
              </button>
            )}
            {/* // Button for image16 */}
            {image === image16 && (
              <button
                onClick={handleSixteenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ➡️
              </button>
            )}
            {/* // Button for image17 */}
            {image === image17 && (
              <button
                onClick={handleSeventeenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ↩️
              </button>
            )}
            {/* // Button for image18 */}
            {image === image18 && (
              <button
                onClick={handleEighteenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ↘️
              </button>
            )}
            {/* // Button for image19 */}
            {image === image19 && (
              <button
                onClick={handleNineteenthButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                ➡️
              </button>
            )}
            {/* // Button for image20 */}
            {image === image20 && (
              <button
                onClick={handleTwentiethButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                THANKS FOR VISITING US
              </button>
            )}
            {/* // Button for image21 */}
            {image === image21 && (
              <button
                onClick={handleTwentyFirstButtonClick}
                className="btn btn-primary"
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }} // Center button
              >
                Go Inside
              </button>
            )}
            <img
              src={image} // Dynamically change image source
              alt="Miracle Shopping Mall"
              style={{ width: "100%", height: "auto" }} // Add this line to set image height to auto
            />
          </div>
          {/* Available Shops */}
          <div className="col-md-4">
            <h2 className="bg-dark p-2 text-white text-center">
              Available Shops
            </h2>
            {/* Search bar */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search shops' categories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul className="list-group">
              {filteredShops.map((shop) => (
                <li key={shop._id} className="list-group-item">
                  <h4>{shop.name}</h4>
                  <p>{shop.details}</p>
                </li>
              ))}
            </ul>
            {/* Button to download PDF */}
            <button className="btn btn-primary mt-3" onClick={downloadPDF}>
              Download PDF
            </button>
          </div>
        </div>
        <div>
          <br/><br/>
          <center>
            <button style={buttonStyle} onClick={() => selectMusic(youMusic)}>
              Play Nils Frahm - You Music
            </button>
            <button style={buttonStyle} onClick={() => selectMusic(happyMusic)}>
              Play happy-santa_60sec-175537 Music
            </button>
          </center>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
