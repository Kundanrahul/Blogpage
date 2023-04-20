import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sli from"./sli.css"
import crop from "../constants/crop.jpg"
import crop2 from "../constants/field.jpg"
import crop3 from "../constants/machine.webp"


const slides = [
  {
    title: "farming",
    content: "Technological innovations have greatly shaped agriculture throughout time. From the creation of the plow to the global positioning system (GPS) driven precision farming equipment, humans have developed new ways to make farming more efficient and grow more food",
    image: crop,
  },
  {
    title: "irrigation",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae distinctio soluta! Necessitatibus, ut placeat minima error ex suscipit deleniti!",
    image: crop2,
  },
  {
    title: "machines",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda nulla eos cumque voluptatem illum minima quibusdam eum ipsam atque",
    image: crop3,
  },
];
const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="slider">
      {slides.map((slide) => (
        <div key={slide.title} className="slide">
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-text">{slide.content}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default SliderBanner;