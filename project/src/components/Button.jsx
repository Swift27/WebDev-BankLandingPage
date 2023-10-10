const Button = ({ label, center }) => {
  return (
    <button className={`button ${center && "max-lg:m-auto"}`}>{label}</button>
  );
};

export default Button;
