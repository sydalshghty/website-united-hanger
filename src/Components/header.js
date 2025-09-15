/*import "../CSS/header.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import imgSlideOne from "../images/home (22).png";
import imgSlideTwo from "../images/home (24).png";
import imgHome23 from "../images/home (23).png";
import { useCallback } from "react";
function Header(){
    const [aboutus,setaboutus] = useState("");

    const getAboutUs = useCallback(async () => {
        await fetch("https://united-hanger-2025.up.railway.app//api/settings",{
            method: "GET"
        })
        .then(respone => respone.json())
        .then(data => setaboutus(data.settings.about_us))
    },[])

    useEffect(() => {
        getAboutUs()
    },[getAboutUs]);

    const [dataSlider,setDataSlider] = useState([]);
    
    const getAllImageSlider = useCallback(async () => {
        await fetch("https://united-hanger-2025.up.railway.app//api/sliders",{
            method: "GET"
        })
        .then(respone => respone.json())
        .then(data => setDataSlider(data.sliders))
    },[])

    useEffect(() => {
        getAllImageSlider();
    },[getAllImageSlider])

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [imgSlideOne, imgSlideTwo, ...dataSlider.map((img,index) => {
        return( 
            img.image_path
        )
    })];

    const handleLeftClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const myIcons = useRef(null);
    function clickIconLeft(){
        if(myIcons.current){
            const leftIcons = myIcons.current.querySelector(".icons #icon-left");
            const rightIcons = myIcons.current.querySelector(".icons #icon-right");
            console.log(leftIcons);
            console.log(rightIcons);
                leftIcons.classList.add("active");
                rightIcons.classList.remove("active");
        }
    }
    function clickIconRight(){
        if(myIcons.current){
            const leftIcons = myIcons.current.querySelector(".icons #icon-left");
            const rightIcons = myIcons.current.querySelector(".icons #icon-right");
            console.log(leftIcons);
            console.log(rightIcons);
            leftIcons.classList.remove("active");
            rightIcons.classList.add("active");
        }
    }
    
        const [getAllSliders,setGetAllSliders] = useState([]);

        const fetchSlidersData = async () => {
          await  fetch("https://united-hanger-2025.up.railway.app//api/sliders",{
            method: "GET"
          })
          .then(response => response.json())
          .then(data => console.log(setGetAllSliders(data.sliders)))
        }

        useEffect(() => {
            fetchSlidersData();
        },[])
    
        const SliderTitle =  getAllSliders.map((item,index) => {
            return(
                item.title
            )
        })

        SliderTitle.unshift("Durability & Strength");
        SliderTitle.push("a style in every hang");

        const countSlider = SliderTitle.length;

        const [left,setLeft] = useState(0)

        const handleLeftIncrease = () => {
            if(left === countSlider - 1){
                return false
            }else{
                return setLeft(left + 1);
            }
        }

        const handleRightDecrease = () => {
            if(left <= 0){
                return false
            }
            else {
                return setLeft(left - 1);
            }
        }

        const TitleSlider = useRef("");
        
        const changeSliderP = () => {
            if(TitleSlider.current){
                TitleSlider.current.textContent = `${SliderTitle[left]}`
            }
        }
    //

    const SliderDescription = getAllSliders.map((item,index) => {
        return(
            item.description
        )
    })
    SliderDescription.unshift("High-quality hangers that can hold heavy weights.");
    SliderDescription.push("extensive product range caters to various sectors of the clothing industry, including babywear, kid's wear, teenage wear, lingerie,men's and women's wear.")

    const countDescription = SliderDescription.length;
    
    const descriptionSlider = useRef("");

    const [length,setLength] = useState(0);

    const handleLengthIncrease = () => {
        if(length === countDescription - 1){
            return false
        }else{
            return setLength(length + 1)
        }
    }

    const handleLenghtDecrease = () => {
        if(length <= 0 ){
            return false
        }else{
            return setLength(length - 1)
        }
    }

    const changeDescription = () => {
        if(descriptionSlider.current){
            descriptionSlider.current.textContent = `${SliderDescription[length]}`
        }
    }

    const allLeftClickIcon = () => {
        handleLeftClick();
        clickIconLeft();
        changeSliderP();
        handleRightDecrease();
        changeDescription();
        handleLenghtDecrease();
    }
    const allRightClickIcon = () => {
        handleRightClick();
        clickIconRight();
        changeSliderP();
        handleLeftIncrease();
        changeDescription();
        handleLengthIncrease();
    }

    return(
        <div className="header">
                <div className="container">
                    <div className="text-content">
                        <p className="p-one" ref={TitleSlider}>a style in every hang</p>
                        <div className="paragraphs">
                            <p ref={descriptionSlider}>extensive product range caters to various sectors of the clothing industry, including babywear, kid's wear, teenage wear, lingerie,men's and women's wear.</p>
                        </div>
                    </div>
                    <div className="icons" ref={myIcons}>
                            <FontAwesomeIcon onClick={allLeftClickIcon} id="icon-left" className="icon-left" icon={faArrowLeft} />
                            <FontAwesomeIcon onClick={allRightClickIcon} id="icon-right" className="icon-right active" icon={faArrowRight} />
                    </div>
                </div>
                <div className="images-slider">
                    <div className="all-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={activeIndex === index ? 'active' : ''}
                            src={image}
                            alt={`imgSlider${index + 1}`}
                        />
                    ))}
                </div>
                </div>
                <div className="about-us">
                    <div className="about-content">
                        <h3>about us ?</h3>
                        <div className="p-one-content">
                                <p style={{letterSpacing: "0.5px"}}>
                                    {aboutus}
                                </p>
                        </div>
                    </div>
                    <div className="img-about">
                        <img src= { imgHome23 } alt="img-about"/>
                    </div>
                </div>
                <div className="about-mobile">
                    <div className="container">
                        <h3>about us ?</h3>
                        <p style={{letterSpacing: "0.5px"}}>{aboutus}</p>
                    </div>
                </div>
        </div>
    )
}
export default Header;*/

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

  // جلب بيانات about us
  const getAboutUs = useCallback(async () => {
    const res = await fetch(
      "https://united-hanger-2025.up.railway.app/api/settings"
    );
    const data = await res.json();
    setAboutus(data.settings.about_us);
  }, []);

  // جلب بيانات الـ sliders
  const getSliders = useCallback(async () => {
    const res = await fetch(
      "https://united-hanger-2025.up.railway.app/api/sliders"
    );
    const data = await res.json();
    // ضيف الصور الثابتة لأول array
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
            className={`icon-right ${
              activeIndex === sliders.length - 1 ? "active" : ""
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
  );
}

export default Header;
































