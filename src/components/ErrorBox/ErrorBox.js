import PropTypes from 'prop-types';
import styles from './ErrorBox.module.scss';

const ErrorBox = ({ children }) => {
  return (
    <div className={styles.errorBox}>
      <h1>
        <span className="fa fa-exclamation-triangle" />
        Error
      </h1>
      <p>
        <strong> Oops! The city you entered is not recognized! </strong>
      </p>
    </div>
  );
};

ErrorBox.propTypes = {
  children: PropTypes.string
};

export default ErrorBox;