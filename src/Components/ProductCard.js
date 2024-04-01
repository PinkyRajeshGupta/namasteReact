const RestaurantCard = ({ resName, title, cardimage, rating, price }) => {
  return (
    <div className="res-card">
      <img className="res-img" src={cardimage} alt="res-img" />
      <h3>{resName}</h3>
      <h4>{title}</h4>
      <h4>{rating}stars</h4>
      <h4>Rs:{price}</h4>
    </div>
  );
};

export default RestaurantCard;
