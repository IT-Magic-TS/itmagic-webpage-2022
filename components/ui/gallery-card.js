import Image from "next/image";
import cls from "classnames";
import styles from "./gallery-card.module.css";
import { useEffect, useState } from "react";

const imgList = [
  {
    id: 0,
    src: "/images/main-photos/bob_rai_2.PNG",
    alt: "bob rai oval stairs and balustrade"
  },
  {
    id: 1,
    src: "/images/main-photos/bob_rai.PNG",
    alt: "bob rai oval stairs and balustrade"
  },
  {
    id: 2,
    src: "/images/main-photos/charybdis.PNG",
    alt: "award wining metal stair balustrade"
  },
  {
    id: 3,
    src: "/images/main-photos/glass_balcony.PNG",
    alt: "glass balcony"
  },
  {
    id: 4,
    src: "/images/main-photos/magnacarta_gates.PNG",
    alt: "magna carta main entrance gates"
  },
  {
    id: 5,
    src: "/images/main-photos/midguard_terrace.PNG",
    alt: "midguard terrace"
  },
  {
    id: 6,
    src: "/images/main-photos/midguard_terrace_2.PNG",
    alt: "midguard terrace"
  },
  {
    id: 7,
    src: "/images/main-photos/montreaux.PNG",
    alt: "stairs for 20 million montreaux house"
  },
  {
    id: 8,
    src: "/images/main-photos/pandora.PNG",
    alt: "metal stairs & glass balustrade"
  },
  {
    id: 9,
    src: "/images/main-photos/torland_helical.PNG",
    alt: "helical stair with glass balustrade"
  }
];

const GalleryCardComponent = () => {
  const [slideShow, setSlideShow] = useState(false);
  const [activeImg, setActiveImg] = useState(imgList[0]);

  const openslideShow = item => {
    setActiveImg(item);
    setSlideShow(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slideShow]);

  const slideRight = () => {
    let newId = activeImg.id + 1;
    if (newId === 10) newId = 0;
    setActiveImg(imgList[newId]);
  };

  const slideLeft = () => {
    let newId = activeImg.id - 1;
    if (newId === -1) newId = 9;
    setActiveImg(imgList[newId]);
  };

  return (
    <>
      <div className={cls("w3-card w3-round gallery", styles.gallery)}>
        <div className="w3-white">
          <div className="w3-padding w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
          </div>
          <div className="w3-container">
            <div className="w3-row-padding">
              <br />
              {imgList.map(item => (
                <div
                  key={item.id}
                  className="w3-half"
                  onClick={() => openslideShow(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1250}
                    height={850}
                    layout="responsive"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {slideShow && (
        <div className={styles.galleryMainImg}>
          <button
            onClick={() => setSlideShow(false)}
            className={cls("w3-button w3-red", styles.buttonClose)}
          >
            x
          </button>
          <Image
            src={activeImg.src}
            alt={activeImg.alt}
            width={1250}
            height={850}
            layout="responsive"
          />
          <button
            onClick={slideLeft}
            className="w3-button w3-black w3-display-left"
          >
            &#10094;
          </button>
          <button
            onClick={slideRight}
            className="w3-button w3-black w3-display-right"
          >
            &#10095;
          </button>
        </div>
      )}
      {slideShow && (
        <div
          onClick={() => setSlideShow(false)}
          className={styles.backdrop}
        ></div>
      )}
    </>
  );
};

export default GalleryCardComponent;
