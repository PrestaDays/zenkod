const Button = ({ label, onClick }) => {
    return (
        <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;