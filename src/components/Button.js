const Button = ({ children, disabled }) => {
  return disabled ? (
    <button
      className="opacity-50 my-10 px-8 py-4 purple-gradient rounded-sm text-white"
      disabled
    >
      {children}
    </button>
  ) : (
    <button className="my-10 px-8 py-4 purple-gradient rounded-sm text-white">
      {children}
    </button>
  );
};

export default Button;
