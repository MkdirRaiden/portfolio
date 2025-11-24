const SkillItems = ({ arr }) => {
  return (
    <>
      {arr.map(({ name, icon }, index) => (
        <div
          key={index}
          className="flex bg-black-200 text-gray-300 text-sm justify-center items-center gap-2 bg-color-bgDark border border-gray-700 px-3 h-10 rounded-md"
        >
          {icon && (
            <img src={icon} width={22} height={22} alt={name} loading="lazy" />
          )}
          <span>{name}</span>
        </div>
      ))}
    </>
  );
};

export default SkillItems;
