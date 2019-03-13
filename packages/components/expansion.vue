<script>
export default {
  inject: ["datagrid"],
  props: {
    row: { type: Object }
  },
  render(h) {
    let slot = this.datagrid.$scopedSlots.expansion;
    let datagridSlot = this.datagrid.$scopedSlots["expansion-datagrid"];
    if (!slot && !datagridSlot) return;
    let renderSlot = slot || datagridSlot;

    return (
      <tr
        class={[
          "kv-datagrid--expansion-row",
          {
            "kv-datagrid--expansion-datagrid": !slot && datagridSlot
          }
        ]}
      >
        <td colspan={this.datagrid.leafColumns.length}>
          {renderSlot(this.row.data)}
        </td>
      </tr>
    );
  }
};
</script>
