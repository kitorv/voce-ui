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
      dataSource: [
        { key: "1", name: "John Brown", age: 32 },
        { key: "2", name: "Jim Green", age: 42 },
        { key: "3", name: "Joe Black", age: 32 },
        { key: "4", name: "Tone Mark", age: 32 }
      ]
    };
  }
};
</script>
