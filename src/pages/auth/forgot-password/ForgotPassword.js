import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from '../../../components/input/input';
import Button from '../../../components/button/Button';
import backgroundImage from '../../../assets/images/background.jpg';
import './ForgotPassword.scss';
import { authService } from '../../../services/api/auth/auth.service';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const forgotPassword = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await authService.forgotPassword(email);
      setLoading(true);
      setShowAlert(false);
      setAlertType('alert-success');
      setResponseMessage(response?.data?.message);
    } catch (error) {
      setLoading(false);
      setAlertType('alert-error');
      setShowAlert(true);
      setResponseMessage(error?.response?.data.message);
    }
  };

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs" style={{ height: `${responseMessage}` ? '300px' : '' }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {responseMessage && (
                  <div className={`alerts ${alertType}`} role="alert">
                    {responseMessage}
                  </div>
                )}
                <form className="forgot-password-form" onSubmit={forgotPassword}>
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={email}
                      labelText="Password"
                      placeholder="Enter Password"
                      style={{ border: `${showAlert} ? '1px solid #fa9b8a'  : ''` }}
                      handleChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <Button
                    label={`${loading ? 'FORGOT PASSWORD IN PROGRESS...' : 'FORGOT PASSWORD'}`}
                    className="auth-button button"
                    disabled={!email}
                  />

                  <Link to={'/'}>
                    <span className="login">
                      <FaArrowLeft className="arrow-left" />
                      Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
