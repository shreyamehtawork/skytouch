import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WaitlistPopup from "./WaitingList";
import gif1 from "../assets/pinkplus.gif";
import gif2 from "../assets/skinline.gif";
import gif3 from "../assets/yeelowplus.gif";
import gif4 from "../assets/yellowline.gif";
import bg1 from "../assets/bg1.png"; // Import the background image

function ComingSoon() {
  const { scrollY } = useScroll();

  // Parallax for the main text
  const headlineY = useTransform(scrollY, [0, 900], [0, -200]);
  const subtextY = useTransform(scrollY, [0, 900], [0, -200]);

  // Parallax for the background GIFs
  const gif1Y = useTransform(scrollY, [0, 500], [0, -300]);
  const gif2Y = useTransform(scrollY, [0, 500], [0, -300]);
  const gif3Y = useTransform(scrollY, [0, 500], [0, -200]);
  const gif4Y = useTransform(scrollY, [0, 500], [0, -150]);

  // New parallax for the main background image
  const backgroundY = useTransform(scrollY, [0, 1000], [10, 2]);

  const [showPopup, setShowPopup] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const handleSubscriptionSuccess = () => {
    setShowPopup(false);
    setHasSubscribed(true);
  };

  return (
    // Create a motion.div for the background image
    <motion.div
      className="app-background"
      style={{
        backgroundImage: `url(${bg1})`,
        y: backgroundY, // Apply the parallax effect here
      }}
    >
      <section className="founder-note">
        <div className="about-container container text-center">
          <motion.div className="about-section bg-overlay p-5 rounded">
            <div className="parallax-gifs">
              <motion.img
                src={gif1}
                alt="Pink Plus"
                className="corner-gif top-left"
                style={{ y: gif1Y }}
              />
              <motion.img
                src={gif2}
                alt="Skyline"
                className="corner-gif top-right"
                style={{ y: gif2Y }}
              />
              <motion.img
                src={gif3}
                alt="Yellow Plus"
                className="corner-gif bottom-left"
                style={{ y: gif3Y }}
              />
              <motion.img
                src={gif4}
                alt="Yellow Line"
                className="corner-gif bottom-right"
                style={{ y: gif4Y }}
              />
            </div>

            <motion.h1 className="mb-4 headline" style={{ y: headlineY }}>
              READY TO <br /> TAKE OFF ?
            </motion.h1>
            <br></br>
            <motion.h3
              className="mb-4"
              style={{ color: "#e6b8a2", y: subtextY }}
            >
              <button
                className="btn btn-dark px-4 py-2"
                onClick={() => setShowPopup(true)}
                disabled={hasSubscribed}
              >
                {hasSubscribed
                  ? "You're on the waitlist!"
                  : "Join our waitlist now!"}
              </button>
            </motion.h3>
          </motion.div>
        </div>

        <WaitlistPopup
          show={showPopup}
          onClose={() => handleSubscriptionSuccess()}
        />
      </section>
    </motion.div>
  );
}

export default ComingSoon;
