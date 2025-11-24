const MenuSvg = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible cursor-pointer"
      width="20"
      height="12"
      viewBox="0 0 20 12"
      role="button"
      aria-label={openNavigation ? "Close menu" : "Open menu"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          // You can also handle keyboard activation here if needed
        }
      }}
    >
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
