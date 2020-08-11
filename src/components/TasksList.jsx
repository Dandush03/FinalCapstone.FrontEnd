import React from 'react';
import PropTypes from 'prop-types';

// Javascript
import GroupTask from '../javascript/groupTaskByDate';

// Import Components
import TaskGroup from './TaskGroup';

export default function TaskForm({ data }) {
  const GroupData = GroupTask(data);
  const container = [];
  Object.keys(GroupData).forEach((keys) => {
    container.push(<TaskGroup data={GroupData[keys]} date={keys} key={`date-${keys}`} />);
  });
  return (
    <div className="tasks-list">
      {container}
    </div>
  );
}

TaskForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
