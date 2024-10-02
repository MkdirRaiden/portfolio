import { Link } from "react-scroll";

const Button = ({ className, href, children, onClick, activeClass }) => {
  const cls =
    className + " " + "rounded-sm px-6 py-2 transition-all duration-200";
  const renderButton = () => (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );

  const renderLink = () => (
    <Link
      className={className}
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
  return href ? renderLink() : renderButton();
};

export default Button;
