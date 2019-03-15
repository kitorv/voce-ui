/* eslint-disable no-unused-vars */
export default {
  separate: false,
  render(h, content, { row }) {
    return (
      <div
        class={[
          "kv-datagrid--tree-cell",
          { "kv-datagrid--tree-space": row.isLeaf },
          { "kv-datagrid--tree-expand": row.nodeExpand }
        ]}
        style={{ "padding-left": `${row.level * 15}px` }}
      >
        <i class="kv-icon-fill-down-arrow" on-click={() => {}} />
        {content}
      </div>
    );
  }
};
