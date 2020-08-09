import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// Import Components
import { TasksList } from '../components/index';

// Action
import getTasks from '../actions/tasksList';

// Import Assets
import '../assets/styles/App.scss';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.login = props.login;
  }

  componentDidMount() {
    const { props: { getTasks } } = this;
    getTasks();
  }

  render() {
    const { props: { taskList, login } } = this;
    this.login = login;
    if (!this.login) {
      return <Redirect to="/" />;
    }
    return (
      <main>
        <TasksList data={taskList} />
      </main>
    );
  }
}

Tasks.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getTasks: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

const structeredSelector = createStructuredSelector({
  taskList: (state) => state.taskList,
  login: (state) => state.user.login,
});

const mapDispatchToProps = { getTasks };

export default connect(structeredSelector, mapDispatchToProps)(Tasks);
