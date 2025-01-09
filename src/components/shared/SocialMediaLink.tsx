import { Link } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  socialMedia: "twitter" | "linkedin";
  hasBackground?: boolean;
}

const SocialMediaLink: React.FC<Props> = ({
  socialMedia,
  hasBackground = true
}) => {
  const link =
    socialMedia === "linkedin"
      ? "https://www.linkedin.com/in/zholdygalidastan/"
      : "https://x.com/YuriDanone";
  const Icon: IconType =
    socialMedia === "linkedin" ? GrLinkedinOption : BsTwitterX;

  if (hasBackground) {
    return (
      <Link to={link} target="_blank" className="social-media__bg">
        <Icon />
      </Link>
    );
  }

  return (
    <Link to={link} target="_blank" className="social-media">
      <Icon />
    </Link>
  );
};

export default SocialMediaLink;
