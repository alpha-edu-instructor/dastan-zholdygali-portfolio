import SocialMediaLink from "@components/shared/SocialMediaLink";
import { calculateAge } from "@utils/utils";
import aboutImg from "@img/about.png";

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <div className="about-part">
        <h1 className="page-title">About</h1>
        <p className="page-text">
          I am a {calculateAge(new Date("2004-02-16"))}-year-old aspiring
          graphic designer passionate about digital art, 3D modeling, and
          creating unique visual concepts. I strive to improve my skills,
          explore new approaches, and bring creative ideas to life in my work. I
          enjoy experimenting with styles and creating designs that inspire and
          capture attention.
        </p>
        <div className="about-links">
          <SocialMediaLink socialMedia="linkedin" />
          <SocialMediaLink socialMedia="twitter" />
        </div>
      </div>

      <div className="about-part">
        <img src={aboutImg} className="about-img" alt="About page" />
      </div>
    </div>
  );
};

export default AboutPage;
