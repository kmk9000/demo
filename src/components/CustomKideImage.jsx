import KideImage from "../assets/KIDE-kansikuvia.png.webp";

const CustomKideImage = () => {
  const svg = `
<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    fill="rgba(255,255,255,0.4)"
    transform="translate(12,12)" />
</svg>
`;

  const iconPattern = "data:image/svg+xml;base64," + btoa(svg);

  const styles = {
    kideContainer: {
      display: "flex",
      width: "100%",
      height: "40vh",
      position: "relative",
    },
    blankSpace: {
      backgroundColor: "black",
      width: "50%",
      height: "100%",
      position: "relative",
    },
    iconCanvas: {
      backgroundColor: "teal",
      width: "50%",
      height: "100%",
      backgroundImage: `url(${iconPattern})`,
      backgroundRepeat: "repeat",
      backgroundSize: "48px 48px",
    },
    image: {
      //   width: "80%",
      height: "70%",
      //   margin: "10% 40%",
      zIndex: "10",
      position: "absolute",
      top: "15%",
      left: "70%",
    },
  };

  return (
    <div className="Container" style={styles.kideContainer}>
      <div className="blankSpace" style={styles.blankSpace}>
        <img src={KideImage} style={styles.image}></img>
      </div>
      <div className="iconCanvas" style={styles.iconCanvas}></div>
    </div>
  );
};

export default CustomKideImage;
