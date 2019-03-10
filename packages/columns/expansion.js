/* eslint-disable no-unused-vars */
export default {
  width: 40,
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
