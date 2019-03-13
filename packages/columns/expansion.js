/* eslint-disable no-unused-vars */
export default {
  width: 40,
  key: "",
  separate: false,
  formatter: (h, { row }) => (
    <div
      class={[
        "kv-datagrid--expansion",
        { "kv-datagrid--expansion-active": row.expand }
      ]}
      on-click={() => {
        row.expand = !row.expand;
      }}
    >
      <i class="kv-icon-right-arrow" />
    </div>
  )
};
