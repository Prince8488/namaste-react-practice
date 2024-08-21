import { RES_IMG } from "../utils/constants";

const Restraurentcard = (props) => {
  const { name, cloudinaryImageId, avgRatingString, sla, cuisines, locality } =
    props.resList.info;
  const { link } = props.resList.cta.link;
  return (
    <div className="container">
      <a href={link}>
        <div className="card hover-item">
          <img
            className="img-card"
            src={RES_IMG + cloudinaryImageId}
            alt="John"
          />
          <div className="content">
            <h5>{name}</h5>
            <p className="ratting">
              {avgRatingString} • {sla.slaString}
            </p>
            <p className="title">{cuisines.join(", ")}</p>
            <p className="location">{locality}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Restraurentcard;
