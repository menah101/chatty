import './ForgotPassword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="auth-inner">
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter Password"
            handleChange={() => {}}
          />
        </div>
        <Button label={'SIGNUP'} className="auth-button button" disabled={true} />

        <Link to={'/'}>
          <span className="forgot-password">
            <FaArrowLeft className="arrow-left" />
            Back to Login
          </span>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
