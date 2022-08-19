import FilmCss from "../../assets/css/VideoCss/VideoCss.module.css";
import HomeCss from "../../assets/css/homeCss/home.module.css";
import ArtsLinks from "../../pages/video/ArtsLinks";
import SliderSettings, { settings } from "./SliderSettings";

import ContentBox from "../Content-box";
import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";
import { BsPlayBtn } from "react-icons/bs";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";


export function ArtsPage() {
  return (
    <div className={`${HomeCss.content} ${VideoCss.film_container}`}>
    <div className={HomeCss.film_title}>
      <h1>Arts</h1>
    </div>
    { ArtsLinks.map((value) => {
      return (
        <ContentBox 
          title={value.title}
          description={value.Description}
          image={
            <div className={HomeCss.video_div}>
              <div className={HomeCss.play_button}>
                <BsPlayBtn size={40} />
              </div>
              <img src={value.image} alt="" />
            </div>
          }
          link={
            <div
              className={`${VideoCss.iframe_container} ${AnimationCss.tracking_in_expand}`}
            >
              {value.link}
            </div>
          }
        ></ContentBox>
      );
    })}
  </div>
  )
}

function Arts() {
  const Settings = settings;

  return (
    <>
      <SliderSettings mapping={ArtsLinks} category="Arts"/>
    </>
  );
}

export default Arts;