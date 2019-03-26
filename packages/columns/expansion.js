/* eslint-disable no-unused-vars */
export default {
  width: 40,
  key: "",
  separate: false,
  formatter: (h, { row }) => (
    <div
      class={[
        "kv-datagrid--body-cell-expansion",
        { "kv-datagrid--body-cell-expansion-active": row.rowExpand }
      ]}
      on-click={() => {
        row.rowExpand = !row.rowExpand;
      }}
    >
      <i class="kv-icon-right" />
    </div>
  )
};
