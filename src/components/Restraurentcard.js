import { RES_IMG } from "../utils/constants";

const Restraurentcard = (props) => {
  const { name, cloudinaryImageId, avgRatingString, sla, cuisines, locality } =
    props?.resList?.info;
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

//Higher Order Componnet

//input -> Restaraurantcard => RestaurantCardStatus

export const withRestaraurantCardNewlyOnboarded = () => {
  return (props) => {
    return (
      <div>
        <span className="badge-area-show">
          <span className="bagde-flag-wrap">
            <span className="bagde-flag">Open</span>
          </span>
        </span>
        <Restraurentcard {...props} />
      </div>
    );
  };
};
export default Restraurentcard;
