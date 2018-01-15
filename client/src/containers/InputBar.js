import { connect } from 'react-redux';
import InputBar from '../components/InputBar';
import { addTodo } from '../actions/todos';

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(InputBar);
