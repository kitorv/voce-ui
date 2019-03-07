<script>
export default {
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, columnFormatter, sort } = this.column;
    let colElement = title;
    if (columnFormatter) {
      colElement = columnFormatter(h, { column: this.column });
    }

    let sortElement = (
      <span class="kv-datagrid--sort">
        <i class="kv-icon-sort-up" />
        <i class="kv-icon-sort-down" />
      </span>
    );

    return (
      <div
        class={["kv-datagird--column", { "kv-datagrid--column-sort": sort }]}
      >
        {colElement}
        {sort ? sortElement : ""}
      </div>
    );
  }
};
</script>
