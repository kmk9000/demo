import { useNavigate } from "react-router";
import styles from "./About.module.css";
import CustomKideImage from "./CustomKideImage";

const About = () => {
  const navigate = useNavigate;
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.card}>
        <h1>About hrApp</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum
          purus felis, eu molestie nibh porta ut. Etiam elementum interdum
          rhoncus. Integer dictum sit amet enim vel mattis. Duis eget nulla non
          dolor aliquet pharetra. Ut turpis nibh, malesuada vitae suscipit a,
          vehicula feugiat risus. Aenean et tincidunt metus. Nullam vehicula
          feugiat neque. Suspendisse quis massa id ante dapibus volutpat vel sed
          erat. Nulla consequat eros at turpis elementum lobortis. Nulla quis
          faucibus massa. Suspendisse malesuada id sem a consectetur. Maecenas
          finibus nec quam et finibus. Maecenas ex felis, pulvinar vel faucibus
          posuere, hendrerit vitae nunc.
        </p>
        <p>
          Donec scelerisque ipsum nulla, at tincidunt mauris placerat a. Nullam
          et nibh et leo facilisis pharetra vitae eu urna. Duis facilisis ligula
          lobortis quam sodales eleifend. Mauris semper dolor ut fringilla
          consectetur. Maecenas pretium eros leo, non lobortis turpis ultrices
          ac. Ut a auctor purus, nec volutpat augue. Etiam maximus sem sed arcu
          volutpat ultricies. Proin vestibulum nibh nec tellus aliquet tempor.
          Morbi imperdiet pulvinar augue sed pulvinar. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nam porttitor ornare aliquam. Quisque in nisi quis orci
          finibus fringilla at non felis. Curabitur in fermentum libero.
          Curabitur venenatis sed tortor hendrerit fringilla. Maecenas commodo
          convallis nulla, non condimentum odio.
        </p>
      </div>
      <div style={{ width: "100%", height: "50%" }}>
        <CustomKideImage />
      </div>
    </div>
  );
};

export default About;
