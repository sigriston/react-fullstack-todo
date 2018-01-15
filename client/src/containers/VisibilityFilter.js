import { connect } from 'react-redux';
import VisibilityFilter from '../components/VisibilityFilter';
import { setVisibilityFilter } from '../actions/visibilityFilter';

const mapStateToProps = ({ visibilityFilter }) => ({
  filter: visibilityFilter
});

const mapDispatchToProps = {
  onFilterChange: setVisibilityFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
