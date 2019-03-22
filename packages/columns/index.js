/* eslint-disable no-unused-vars */
export default {
  width: 42,
  key: "",
  separate: false,
  columnFormatter: h => <div>#</div>,
  formatter: function(h, { index }) {
    if (this.pagination) {
      index = (this.pageIndex - 1) * this.pageSize + index;
    }
    return <div>{index + 1}</div>;
  }
};
