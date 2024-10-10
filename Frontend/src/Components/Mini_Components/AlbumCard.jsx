const Card1 = ({ Album__Title, Album__Image, Album__key }) => {
  return (
    <div
      key={Album__key}
      className="album__Card w-1/4 h-full bg-red-700 relative rounded-2xl shadow-orange-500"
    >
      <img
        loading="lazy"
        src={`http://localhost:3000/images/${Album__Image}`}
        alt={Album__Title}
        className="album__Image w-full h-full  z-10 rounded-2xl"
      />

      <div className="absolute bottom-6 w-11/12 h-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:to-red-600 flex items-center justify-center left-4 rounded-md text-white">
        <h3 className="text-3xl text-center bolder">{Album__Title}</h3>
      </div>
    </div>
  );
};

// Card1__Title

export default Card1;
