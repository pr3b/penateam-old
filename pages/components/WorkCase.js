import Image from "next/image";
import React, { useState } from "react";
import Arrow from "../../public/assets/images/icons/arrow.png";
import Oxla from "../../public/assets/images/portfolio/workcase/oxla.png";
import Babylon from "../../public/assets/images/portfolio/workcase/babylon.png";
import Mojito from "../../public/assets/images/portfolio/workcase/mojito.png";
import Pay from "../../public/assets/images/portfolio/workcase/pay.png";
import Rippey from "../../public/assets/images/portfolio/workcase/rippey.png";
import Vonigo from "../../public/assets/images/portfolio/workcase/vonigo.png";
import Ocr from "../../public/assets/images/portfolio/workcase/ocr.png";
import Buildify from "../../public/assets/images/portfolio/workcase/buildify.png";
import Dock from "../../public/assets/images/portfolio/workcase/dock.png";
import Canvas from "../../public/assets/images/portfolio/workcase/canvas.png";
import Windward from "../../public/assets/images/portfolio/workcase/windward.png";
import Polisiair from "../../public/assets/images/portfolio/workcase/polisiair.png";
import Link from "next/link";

function WorkCase() {
  const cardsPerPage = 6;
  const totalCards = 12;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = [
    { image: Oxla, title: "Oxla" },
    { image: Babylon, title: "Babylon" },
    { image: Mojito, title: "Mojito" },
    { image: Pay, title: "Pay" },
    { image: Rippey, title: "Rippey" },
    { image: Vonigo, title: "Vonigo" },
    { image: Ocr, title: "OCR Labs" },
    { image: Buildify, title: "Buildify" },
    { image: Dock, title: "Dock" },
    { image: Canvas, title: "Canvas" },
    { image: Windward, title: "Windward" },
    { image: Polisiair, title: "Polisiair" },
  ].slice(startIndex, endIndex);

  return (
    <div id="workcase">
      <div className="workcase-container">
        <div className="workcase-card-container">
          {visibleCards.map((card, index) => (
            <div className="workcase-card" key={index}>
              <Image src={card.image} alt={`${card.title} Logo`} />
              <div className="text-arrow">
                <p>{card.title}</p>
                <Image src={Arrow} alt="Arrow shape" />
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            className="previous-button"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <Link href="#workcase" scroll={false}>
              Previous
            </Link>
          </button>
          <span className="page-number">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="next-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <Link href="#workcase" scroll={false}>
              Next
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkCase;
