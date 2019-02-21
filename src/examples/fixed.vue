<template>
  <v-datagrid :columns="columns"
              :striped="true"
              :data-source="dataSource"></v-datagrid>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: "Key", key: "key", width: 100, fixed: "left" },
        { title: "Name", key: "name", width: 200, fixed: "left" },
        { title: "Age", key: "age", width: 200, fixed: "left" },
        { title: "Value1", key: "value", width: 200 },
        { title: "Value2", key: "value", width: 200 },
        { title: "Value3", key: "value", width: 200 },
        { title: "Value4", key: "value", width: 200 },
        { title: "Value5", key: "value", width: 200 },
        { title: "Value6", key: "value", width: 200 }
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
