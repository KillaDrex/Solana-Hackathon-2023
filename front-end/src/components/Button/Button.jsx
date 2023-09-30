import "./Button.css";

const Button = ({ type, className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
