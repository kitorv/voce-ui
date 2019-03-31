<script>
export default {
  inject: ["datagrid"],
  props: {
    column: { type: Object }
  },
  render(h) {
    let { title, columnFormatter, sort } = this.column;
    let content = title;
    if (columnFormatter) {
      content = columnFormatter.call(this.datagrid, h, { column: this.column });
    }
    let sortElement = "";
    if (sort) {
      sortElement = (
        <div class="kv-datagrid--column-sort">
          <i
            class={[
              "kv-datagrid--column-sort-up",
              { "kv-datagrid--column-sort-active": this.orderType == "asc" }
            ]}
          />
          <i
            class={[
              "kv-datagrid--column-sort-down",
              { "kv-datagrid--column-sort-active": this.orderType == "desc" }
            ]}
          />
        </div>
      );
    }

    return (
      <th
        colspan={this.column.colSpan}
        rowspan={this.column.rowSpan}
        class={this.getColumnClass()}
        on-click={this.handleCellClick}
      >
        <div class="kv-datagird--column-content">{content}</div>
        {sortElement}
      </th>
    );
  },
  computed: {
    orderType: {
      get() {
        if (this.datagrid.orderKey !== this.column.key) return null;
        return this.datagrid.orderType;
      },
      set(value) {
        this.datagrid.orderType = value;
      }
    },
    orderKey: {
      get() {
        return this.datagrid.orderKey;
      },
      set(value) {
        this.datagrid.orderKey = value;
      }
    }
  },
  methods: {
    getColumnClass() {
      let { type, headerAlign, sort } = this.column;
      let classList = [];
      if (type) {
        classList.push(`kv-datagrid--column-type-${type}`);
      }
      if (headerAlign) {
        classList.push(`kv-datagrid--align-${headerAlign}`);
      }
      if (sort) {
        classList.push("kv-datagrid--header-sort");
      }
      return classList.join(" ");
    },
    sortDataSource() {
      let { key, sort } = this.column;
      if (!sort) return;
      if (this.orderKey !== key) {
        this.orderType = null;
      }
      switch (this.orderType) {
        case "asc":
          this.orderType = "desc";
          break;
        case "desc":
          this.orderType = null;
          break;
        default:
          this.orderType = "asc";
          break;
      }
      this.orderKey = key;
      if (this.datagrid.pagination) {
        this.datagrid.loadAjaxData(1, this.datagrid.pageSize)
        return
      }
      let rows = this.datagrid.initProxyDataSource(this.datagrid.data);
      if (!this.orderType) {
        this.datagrid.dataSource = rows;
        return
      }
      rows.sort((x, y) => {
        if (this.orderType == "asc") {
          return x.data[this.orderKey] > y.data[this.orderKey] ? 1 : -1;
        }
        if (this.orderType == "desc") {
          return x.data[this.orderKey] > y.data[this.orderKey] ? -1 : 1;
        }
      });
      this.datagrid.dataSource = rows;
    },
    handleCellClick(event) {
      this.sortDataSource();
      this.datagrid.$emit("column-click", this.column, event)
    }
  }
};
</script>

