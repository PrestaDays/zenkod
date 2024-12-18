const FormButton = ({ label, type = "button" }) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-[#D57A66] text-white rounded hover:bg-[#C05050]"
    >
      {label}
    </button>
  );
};

export default FormButton;
