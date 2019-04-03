/* eslint-disable no-unused-vars */
export default {
  width: 40,
  key: "",
  separate: false,
  formatter: (h, { row }) => (
    <div
      class={[
        "kv-table--body-cell-expansion",
        { "kv-table--body-cell-expansion-active": row.rowExpand }
      ]}
      on-click={() => {
        row.rowExpand = !row.rowExpand;
      }}
    >
      <i class="kv-icon-right" />
    </div>
  )
};
