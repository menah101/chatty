import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ id, name, type, value, className, labelText, placeholder, handleChange }) => {
  return (
    <>
      <div className="form-row">
        {labelText && (
          <label htmlFor={name} className="form-label">
            {labelText}
          </label>
        )}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`form-input ${className}`}
          autoComplete="false"
        />
      </div>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
