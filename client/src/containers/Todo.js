import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { toggleTodo } from '../actions/todos';

const mapDispatchToProps = {
  toggleTodo
};

export default connect(null, mapDispatchToProps)(Todo);
