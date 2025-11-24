import { Link } from "react-scroll";

const Button = ({ className = "", href, children, onClick, activeClass }) => {
  const baseClass =
    "rounded-sm px-6 py-2 transition-all duration-200 " + className;

  if (href) {
    return (
      <Link
        className={baseClass}
        onClick={onClick}
        smooth={true}
        to={href}
        spy={true}
        activeClass={activeClass}
        offset={-50}
        delay={100}
        duration={500}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} type="button">
      {children}
    </button>
  );
};

export default Button;
