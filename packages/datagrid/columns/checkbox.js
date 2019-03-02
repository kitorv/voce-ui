import Checbox from '../components/checkbox'

export default {
  type: "checkbox",
  renderHeader(h, column) {
      return <Checbox></Checbox>
  },
  renderBody(h, { index, value, column, row }) {},
  renderFooter(h, { index, value, column, row }) {}
};
