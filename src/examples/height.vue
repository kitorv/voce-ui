<template>
  <v-datagrid :columns="columns"
              :height="250"
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
        { key: "4", name: "Tone Mark", age: 32 },
        { key: "5", name: "John Brown", age: 32 },
        { key: "6", name: "Jim Green", age: 42 },
        { key: "7", name: "Joe Black", age: 32 },
        { key: "8", name: "Tone Mark", age: 32 },
        { key: "9", name: "John Brown", age: 32 },
        { key: "10", name: "Jim Green", age: 42 },
        { key: "11", name: "Joe Black", age: 32 },
        { key: "12", name: "Tone Mark", age: 32 },
        { key: "13", name: "John Brown", age: 32 },
        { key: "14", name: "Jim Green", age: 42 },
        { key: "15", name: "Joe Black", age: 32 },
        { key: "16", name: "Tone Mark", age: 32 },
        { key: "17", name: "John Brown", age: 32 },
        { key: "18", name: "Jim Green", age: 42 },
        { key: "19", name: "Joe Black", age: 32 },
        { key: "20", name: "Tone Mark", age: 32 }
      ]
    };
  }
};
</script>
