const Fallback = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[100vh] bg-primary">
      <h1 className="w-full text-secondary flex justify-center items-center gap-2">
        <span>Loading</span>
        <span className="font-bold text-color-primary">3D</span>
        <span>assets...</span>
      </h1>
    </div>
  );
};

export default Fallback;
