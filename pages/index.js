import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";

//import { getSession } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";
import { ArrowRight, Video } from "react-feather";

import "react-modal-video/css/modal-video.min.css";

import { fadeInUp, slideIn, stagger } from "./../animation/motion";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Calmify | The Calming app</title>
      </Head>

      <motion.header
        className="header"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <motion.div className="header__text-box">
          <h1 className="heading-primary">
            <motion.span className="heading-primary--main">
              Get. Set. Calm.
            </motion.span>
            <motion.span className="heading-primary--sub">
              Productivity at it's finest!
            </motion.span>
          </h1>

          <motion.div className="header__btns">
            <motion.a href="/sounds" className="btn-main">
              <span className="btn-main__text">Let's Calm!</span>
              <ArrowRight size={28} className="icon-arrow" />
            </motion.a>

            <button className="btn-video" onClick={() => setIsOpen(true)}>
              <span className="btn-video__text">How it works?</span>
              <Video size={28} />
            </button>
          </motion.div>

          <motion.div className="maker">
            Made with ❤️ by{" "}
            <a
              href="https://twitter.com/Darshanshub"
              rel="noopener norefereer"
              target="__blank"
              className="maker__name"
            >
              Darshancodes
            </a>
          </motion.div>
        </motion.div>
      </motion.header>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="fBcwCXc8aQI"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Home;