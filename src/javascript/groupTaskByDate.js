export default function (data) {
  const groupData = data.reduce((taskGroups, task) => {
    const { start } = task;
    const tempTaskGroups = taskGroups;
    if (start) {
      const date = new Date(Date.parse(start)).toDateString();
      if (!tempTaskGroups[date]) {
        tempTaskGroups[date] = [];
      }
      tempTaskGroups[date].push(task);
    }
    return tempTaskGroups;
  }, []);
  return groupData;
}
