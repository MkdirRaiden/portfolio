const SkillItems = ({ arr }) => {
  return (
    <>
      {arr.map((skill, ndx) => (
        <div
          key={ndx}
          className="flex text-gray-300 text-sm justify-center items-center gap-2 bg-color-bgDark border border-gray-700 px-3 h-10 rounded-md"
        >
          {" "}
          {skill.icon && (
            <img src={skill.icon} width={22} height={22} alt={skill.name} />
          )}{" "}
          <span>{skill.name}</span>{" "}
        </div>
      ))}
    </>
  );
};

export default SkillItems;
