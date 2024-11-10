const Fallback = () => {
  return (
    <div className="flex justify-center items-center w-100 h-100">
      <h1 className="w-full text-gray-400 flex justify-center items-center gap-2 -translate-x-20">
        <span>Loading</span>{" "}
        <span className="font-bold text-color-primary">3D</span>{" "}
        <span>assets...</span>
      </h1>
    </div>
  );
};

export default Fallback;
