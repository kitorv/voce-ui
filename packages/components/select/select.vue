<template>
  <kv-dropdown :class="['kv-select',{'kv-select--disabled':disabled}]"
               :visible.sync="visible"
               :disabled="disabled">
    <div slot="selection"
         class="kv-select--selection">
      <div>{{value}}</div>
      <input class="kv-select--input"
             v-model="inputText"
             :placeholder="placeholder"
             :readonly="true" />
      <!-- <input class="kv-select--input"
             v-if="mode!=='tags'"
             v-model="queryText"
             :placeholder="placeholder"
             :readonly="!filter"
             @input="handleInputFilter" /> -->
      <!-- <div v-else
           class="kv-select--tags">
        <div v-if="selectOptions&&selectOptions.length<1"
             class="kv-select--placeholder">{{placeholder}}</div>
        <span v-for="(option, index) in selectOptions"
              @click.stop="handleTagClick(option)"
              :key="index"
              class="kv-select--tags-item">{{option.text}}<i class="kv-icon-close kv-select--tags-icon"></i></span>
      </div>
      <span class="kv-select--icon">
        <slot name="icon">
          <i class="kv-icon-down"></i>
        </slot>
      </span> -->
    </div>
    <ul slot="panel"
        class="kv-select--dropdown">
      <slot></slot>
      <!-- <div v-if="showEmpty"
           class="kv-select--empty">暂无数据</div> -->
    </ul>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown";

export default {
  name: "KvSelect",
  componentName: "KvSelect",
  components: { KvDropdown },
  provide() {
    return { kvSelect: this };
  },
  data() {
    return {
      visible: false,
      dataList: {},
      inputText: ""
      // optionList: []
      // options: [],
      // queryText: "",
      // showEmpty: false
    };
  },
  props: {
    disabled: Boolean,
    value: { required: true },
    valueKey: String,
    labelKey: String,
    placeholder: {
      type: String,
      default: "请选择"
    },
    // mode: String,

    // filter: {
    //   type: [Boolean, Function],
    //   default: false
    // }
  },
  computed: {
    selectValue: {
      get() {
        if (Array.isArray(this.value)) {
          return this.valueKey ? Array.from(this.value, value => value[this.valueKey]) : this.value
        }
        if (this.valueKey) {
          return [this.value[this.valueKey]]
        }
        return [this.value]
      },
      set() {

      }
    },
    selectText() {
      return Array.from(this.selectValue, value => {
        const data = this.dataList[value]
        if (data === undefined) return
        return data.text
      }).join(",");
    }
    // selectOptions() {
    //   const selectValue = Array.isArray(this.value) ? this.value : [this.value];
    //   return this.options.filter(m => selectValue.includes(m.value));
    // },
  },
  methods: {
    handleOptionClick(kvOption) {
      // if (!Array.isArray(this.value)) {
      //   kvOption.select();
      //   this.visible = false;
      //   return;
      // }
      // if (kvOption.selected) {
      //   kvOption.unselect();
      //   return;
      // }
      // kvOption.select();
    },
    // handleTagClick(kvOption) {
    //   kvOption.unselect();
    // },
    // handleInputFilter() {
    //   this.visible = true;
    //   this.filterOption();
    // },
    // filterOption() {
    //   const value = this.queryText;
    //   const parsedValue = value.replace(
    //     /(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g,
    //     "\\$1"
    //   );
    //   let showOptionNumber = 0;
    //   this.options.forEach(option => {
    //     option.visible = new RegExp(parsedValue, "i").test(option.text);
    //     if (!option.visible) return;
    //     showOptionNumber++;
    //   });
    //   this.showEmpty = showOptionNumber < 1;
    // },
    // setInputText() {
    //   this.queryText = this.selectText;
    // }
  },
  watch: {
    // value() {
    //   this.setInputText();
    // },
    // visible(value) {
    //   if (value && this.filter) {
    //     this.filterOption();
    //   }
    //   if (!value) {
    //     this.setInputText();
    //   }
    // }
  },
  mounted() {
    this.inputText = this.selectText
  }
};
</script>

