import Image from "next/image";
import React from "react";
import ChainEngine from "../../public/assets/images/logo/client-logo/logo-white/chain.png";
import Cymbio from "../../public/assets/images/logo/client-logo/logo-white/cymbio.png";
import Dialog from "../../public/assets/images/logo/client-logo/logo-white/dialog.png";
import Dock from "../../public/assets/images/logo/client-logo/logo-white/dock.png";
import Draftbit from "../../public/assets/images/logo/client-logo/logo-white/draftbit.png";
import Ficx from "../../public/assets/images/logo/client-logo/logo-white/ficx.png";
import Ludeo from "../../public/assets/images/logo/client-logo/logo-white/ludeo.png";
import Microsoft from "../../public/assets/images/logo/client-logo/logo-white/microsoft.png";
import Mojito from "../../public/assets/images/logo/client-logo/logo-white/mojito.png";
import Ocr from "../../public/assets/images/logo/client-logo/logo-white/ocr.png";
import Oxla from "../../public/assets/images/logo/client-logo/logo-white/oxla.png";
import Polisiair from "../../public/assets/images/logo/client-logo/logo-white/polisiair.png";
import Prepr from "../../public/assets/images/logo/client-logo/logo-white/prepr.png";
import Rippey from "../../public/assets/images/logo/client-logo/logo-white/rippey.png";
import Rms from "../../public/assets/images/logo/client-logo/logo-white/rms.png";
import Rpa from "../../public/assets/images/logo/client-logo/logo-white/rpa.png";
import Skype from "../../public/assets/images/logo/client-logo/logo-white/skype.png";
import Tetsuyu from "../../public/assets/images/logo/client-logo/logo-white/tetsuyu.png";
import Vonigo from "../../public/assets/images/logo/client-logo/logo-white/vonigo.png";
import Wia from "../../public/assets/images/logo/client-logo/logo-white/wia.png";
import Windward from "../../public/assets/images/logo/client-logo/logo-white/windward.png";
import Babylon from "../../public/assets/images/logo/client-logo/logo-white/babylon.png";
import Buildify from "../../public/assets/images/logo/client-logo/logo-white/buildify.png";

function Logo() {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Image src={ChainEngine} alt="ChainEngine icon" />
          </div>
          <div className="slide">
            <Image src={Cymbio} alt="Cymbio icon" />
          </div>
          <div className="slide">
            <Image src={Dialog} alt="Dialog icon" />
          </div>
          <div className="slide">
            <Image src={Dock} alt="Dock icon" />
          </div>
          <div className="slide">
            <Image src={Draftbit} alt="Draftbit icon" />
          </div>
          <div className="slide">
            <Image src={Ficx} width={60} alt="Ficx icon" />
          </div>
          <div className="slide">
            <Image src={Mojito} alt="Mojito icon" />
          </div>
          <div className="slide">
            <Image src={Ocr} alt="Ocr icon" />
          </div>
          <div className="slide">
            <Image src={Oxla} alt="Oxla icon" />
          </div>
          <div className="slide">
            <Image src={Polisiair} alt="Polisiair icon" />
          </div>
          <div className="slide">
            <Image src={Prepr} alt="Prepr icon" />
          </div>
          <div className="slide">
            <Image src={Rms} alt="Rms icon" />
          </div>
          <div className="slide">
            <Image src={Rpa} width={60} alt="Rpa icon" />
          </div>
          <div className="slide">
            <Image src={Skype} width={50} alt="Skype icon" />
          </div>
          <div className="slide">
            <Image src={Tetsuyu} width={40} alt="Tetsuyu icon" />
          </div>
          <div className="slide">
            <Image src={Vonigo} alt="Vonigo icon" />
          </div>
          <div className="slide">
            <Image src={Windward} alt="Windward icon" />
          </div>
          <div className="slide">
            <Image src={Babylon} alt="Babylon icon" />
          </div>
          <div className="slide">
            <Image src={Buildify} alt="Buildify icon" />
          </div>
          <div className="slide">
            <Image src={Microsoft} alt="Microsoft icon" />
          </div>
          <div className="slide">
            <Image src={Rippey} alt="Rippey icon" />
          </div>
          <div className="slide">
            <Image src={Wia} width={50} alt="Wia icon" />
          </div>
          <div className="slide">
            <Image src={Ludeo} width={50} alt="Ludeo icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Logo;
