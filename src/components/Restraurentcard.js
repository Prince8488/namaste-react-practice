import { RES_IMG } from "../utils/constants";

const Restraurentcard = (props) => {
  const { name, cloudinaryImageId, avgRatingString, sla, cuisines, locality } =
    props.resList.info;
  return (
    <div className="container">
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
    </div>
  );
};

export default Restraurentcard;
