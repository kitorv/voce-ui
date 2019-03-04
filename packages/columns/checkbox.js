import Checbox from "../components/checkbox";

export default {
  type: "checkbox",
  renderHeader(h, { dictionary }) {
    return (
      <Checbox
        indeterminate={dictionary.indeterminate}
        value={dictionary.checkAll}
        on-click={() => {
          this.$set(dictionary, "checkAll", !dictionary.checkAll);
          this.$set(dictionary, "indeterminate", false);
          this.dataSource.map(row => {
            this.$set(row, "checked", dictionary.checkAll);
          });
        }}
      />
    );
  },
  renderBody(h, { row, dictionary }) {
    return (
      <Checbox
        value={row.checked}
        on-click={() => {
          this.$set(row, "checked", !row.checked);
          let checkNumber = 0;
          let dataSource = this.dataSource;
          dataSource.forEach(row => {
            if (!row.checked) return;
            checkNumber += 1;
          });
          if (checkNumber == dataSource.length) {
            this.$set(dictionary, "checkAll", true);
            this.$set(dictionary, "indeterminate", false);
          } else {
            this.$set(dictionary, "checkAll", false);
            this.$set(dictionary, "indeterminate", checkNumber > 0);
          }
        }}
      />
    );
  },
  rednerFooter() {
    return <div />;
  }
};
