<script>
export default {
  inject: ["datagrid"],
  props: {
    row: { type: Object }
  },
  render(h) {

    let scopedSlots = this.datagrid.$scopedSlots
    let expansionKey = 'expansion'
    let slot = scopedSlots.expansion;
    if (!slot) {
      for (const key in scopedSlots) {
        if (!/^expansion-/.test(key)) continue
        slot = scopedSlots[key]
        expansionKey = key
        break;
      }
    }
    return (
      <tr class={["kv-datagrid--body-row-expansion", `kv-datagrid--body-${expansionKey}`]} >
        <td colspan={this.datagrid.leafColumns.length}>
          {slot({ row: this.row, data: this.row.data })}
        </td>
      </tr>
    );
  }
};
</script>
