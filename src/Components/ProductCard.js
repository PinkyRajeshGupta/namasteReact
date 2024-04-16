const ProductCard = ({ resname, title, cardimage, rating, price }) => {
  return (
    <div className="w-100 h-30 p-4 m-3 border-2 border-black hover:bg-slate-600">
      <img className="h-20" src={cardimage} alt="res-img" />
      <h3>{resname}</h3>
      <h4>{title}</h4>
      <h4>{rating}stars</h4>
      <h4>Rs:{price}</h4>
    </div>
  );
};

export const withPromotedlabel = (RestaurantCard) => {
  return ({ resname, title, cardimage, rating, price }) => {
    return (
      <div>
        <label className="bg-slate-300 absolute text-white  m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard
          resname={resname}
          title={title}
          cardimage={cardimage}
          rating={rating}
          price={price}
        />
        <h1>this is card</h1>
      </div>
    );
  };
};
export default ProductCard;
