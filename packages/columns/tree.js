/* eslint-disable no-unused-vars */
export default {
  separate: false,
  render(h, content, { row }) {
    return (
      <div
        class={[
          "kv-table--body-cell-tree",
          { "kv-table--body-cell-tree-space": row.isLeaf },
          { "kv-table--body-cell-tree-expand": row.nodeExpand }
        ]}
        style={{ "padding-left": `${row.level * 15}px` }}
      >
        <i
          class="kv-icon-caret-right"
          on-click={() => {
            row.nodeExpand = !row.nodeExpand;
          }}
        />
        {content}
      </div>
    );
  }
};
