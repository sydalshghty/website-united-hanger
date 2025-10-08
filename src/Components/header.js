import "../CSS/header.css";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import imgSlideOne from "../images/home (22).png";
import imgSlideTwo from "../images/home (24).png";
import imgHome23 from "../images/home (23).png";

function Header() {
  const [aboutus, setAboutus] = useState("");
  const [sliders, setSliders] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);


  const getAboutUs = useCallback(async () => {
    const res = await fetch(
      "https://united-hanger-2025.up.railway.app/api/settings"
    );
    const data = await res.json();
    setAboutus(data.settings.about_us);
  }, []);

  const getSliders = useCallback(async () => {
    const res = await fetch(
      "https://united-hanger-2025.up.railway.app/api/sliders"
    );
    const data = await res.json();
    setSliders([
      { image_path: imgSlideOne, title: "Durability & Strength", description: "High-quality hangers that can hold heavy weights." },
      { image_path: imgSlideTwo, title: "a style in every hang", description: "Extensive product range caters to various sectors." },
      ...data.sliders,
    ]);
  }, []);

  useEffect(() => {
    getAboutUs();
    getSliders();
  }, [getAboutUs, getSliders]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="text-content">
            {sliders.length > 0 && (
              <>
                <p className="p-one">{sliders[activeIndex].title}</p>
                <div className="paragraphs">
                  <p>{sliders[activeIndex].description}</p>
                </div>
              </>
            )}
          </div>
          <div className="icons">
            <FontAwesomeIcon
              onClick={handlePrev}
              id="icon-left"
              className={`icon-left ${activeIndex === 0 ? "active" : ""}`}
              icon={faArrowLeft}
            />
            <FontAwesomeIcon
              onClick={handleNext}
              id="icon-right"
              className={`icon-right ${activeIndex === sliders.length - 1 ? "active" : ""
                }`}
              icon={faArrowRight}
            />
          </div>
        </div>
        <div className="images-slider">
          <div className="all-images">
            {sliders.map((slide, index) => (
              <img
                key={index}
                className={activeIndex === index ? "active" : ""}
                src={slide.image_path}
                alt={`slider-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="about-us">
          <div className="about-content">
            <h3>about us ?</h3>
            <div className="p-one-content">
              <p style={{ letterSpacing: "0.5px" }}>{aboutus}</p>
            </div>
          </div>
          <div className="img-about">
            <img src={imgHome23} alt="img-about" />
          </div>
        </div>
        <div className="about-mobile">
          <div className="container">
            <h3>about us ?</h3>
            <p style={{ letterSpacing: "0.5px" }}>{aboutus}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
































