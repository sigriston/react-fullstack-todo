import { connect } from 'react-redux';
import Spinner from '../components/Spinner';

const mapStateToProps = ({ loading }) => ({
  loading
});

export default connect(mapStateToProps)(Spinner);
