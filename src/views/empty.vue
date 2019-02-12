<template>
  <v-datagrid :columns="columns"
              :data-source="dataSource"></v-datagrid>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: "Key", key: "key" },
        { title: "Name", key: "name" },
        { title: "Age", key: "age" }
      ],
      dataSource: []
    };
  }
};
</script>
