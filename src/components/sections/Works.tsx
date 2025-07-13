import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

import { TProject } from "../../types/index";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  images,
  sourceCodeLink,
}) => {
  // Slideshow state for any project with images
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let interval: number;
    if (hovered && images && images.length > 1) {
      interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % images.length);
      }, 1200);
    } else {
      setSlideIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovered, images]);

  const handleMouseEnter = () => {
    if (images && images.length > 1) setHovered(true);
  };
  const handleMouseLeave = () => {
    if (images && images.length > 1) setHovered(false);
  };

  const displayImage = images && images.length > 1 && hovered
    ? images[slideIndex]
    : image;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div
          className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] border"
          style={{ borderColor: 'var(--accent)', borderWidth: 2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-[230px] w-full">
            <AnimatePresence mode="wait">
              <m.img
                key={displayImage}
                src={displayImage}
                alt={name}
                className="h-full w-full rounded-2xl object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag: { name: string; color: string }) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.works.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
