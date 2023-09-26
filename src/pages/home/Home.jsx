import Navbar from "../../components/navbar/Navbar";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../use-follow-pointer";
import Header from "../../components/header/Header";

const Home = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <div>
    <Navbar />
    <Header />
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 200,
        restDelta: 0.001
      }}
    />
  </div>;
};

export default Home;
