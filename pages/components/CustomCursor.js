import React, { useEffect, useState } from "react";
import styles from "../../styles/CustomCursor.module.css";
import Image from "next/image";

const CustomCursor = ({ customCursor }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setShowCursor(false); // Hide the custom cursor
    };

    const handleMouseLeave = () => {
      setShowCursor(true); // Show the custom cursor
    };

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={styles.customCursor}
        style={{ left: position.x, top: position.y }}
      >
        <Image
          src={customCursor}
          alt="Custom Cursor"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
