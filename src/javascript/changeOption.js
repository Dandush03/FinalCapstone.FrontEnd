/* eslint-disable no-param-reassign */
const option = (pos, obj) => {
  if (pos > 0) {
    obj.selectedIndex += 1;
    if (obj.selectedIndex === -1) {
      obj.selectedIndex = 0;
    }
  }
  if (pos < 0) {
    obj.selectedIndex -= 1;
    if (obj.selectedIndex === -1) {
      obj.selectedIndex = 2;
    }
  }
};

export default option;
