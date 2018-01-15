import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors/todos';

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state)
});

export default connect(mapStateToProps)(TodoList);
