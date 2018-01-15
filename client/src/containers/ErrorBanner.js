import { connect } from 'react-redux';
import ErrorBanner from '../components/ErrorBanner';
import { clearError } from '../actions/error';

const mapStateToProps = ({ error }) => ({
  error
});

const mapDispatchToProps = {
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBanner);
