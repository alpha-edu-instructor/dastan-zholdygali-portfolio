import SocialMediaLink from "@components/SocialMediaLink";

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <div className="about-part">
        <h1 className="page-title">About</h1>
        <p className="page-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, eum
          reprehenderit accusantium a veritatis cupiditate quos eius optio odit
          voluptatem possimus officia iste nulla delectus aut beatae, magni
          tempore atque! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Explicabo, est suscipit autem rerum odio cum delectus expedita
          possimus eveniet, incidunt iure quo officiis, laudantium dolorum
          repellendus nam recusandae laboriosam. Aliquid?
        </p>
        <p className="page-text">
          Doloremque dolorem quam rem inventore suscipit minus laudantium
          repellat, quis sunt quo neque est officia con
        </p>
        <div className="about-links">
          <SocialMediaLink socialMedia="linkedin" />
          <SocialMediaLink socialMedia="twitter" />
        </div>
      </div>

      <div className="about-part"></div>
    </div>
  );
};

export default AboutPage;
