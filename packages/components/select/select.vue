<template>
  <kv-dropdown :class="['kv-select',{'kv-select--disabled':disabled}]"
               :visible.sync="visible"
               :disabled="disabled">
    <div slot="selection"
         class="kv-select--selection">
      <input v-if="mode!=='tags'"
             v-model="inputText"
             class="kv-select--input"
             :placeholder="placeholder"
             :readonly="readonly"
             @input="handleTextInput" />
      <div v-else
           class="kv-select--tags">
        <div v-if="selectValue.length<1"
             class="kv-select--placeholder">{{placeholder}}</div>
        <span v-for="({value,text}, index) in selectOptions"
              @click.stop="handleTagClick(value)"
              :key="index"
              class="kv-select--tags-item">{{text}}<i class="kv-icon-close kv-select--tags-icon"></i></span>
      </div>
      <span class="kv-select--icon">
        <slot name="icon">
          <i class="kv-icon-down"></i>
        </slot>
      </span>
    </div>
    <ul slot="panel"
        class="kv-select--dropdown">
      <slot v-if="!loading"></slot>
      <li v-if="!visibleOptionNumber||loading"
          class="kv-select--empty">{{loading?"数据加载中":"暂无数据"}}</li>
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
      inputText: "",
      visibleOptionNumber: 0,
      loading: false,
      timer: null
    };
  },
  props: {
    value: { required: true },
    disabled: Boolean,
    valueKey: String,
    labelKey: String,
    placeholder: {
      type: String,
      default: "请选择"
    },
    mode: {
      type: String,
      validator: function (value) {
        return ["multiple", "tags"].includes(value);
      }
    },
    filter: {
      type: [Boolean, Function],
      default: false
    },
    remoteFilter: Function
  },
  computed: {
    selectValue: {
      get() {
        if (Array.isArray(this.value)) {
          return this.valueKey
            ? Array.from(this.value, value => value[this.valueKey])
            : this.value;
        }
        if (this.valueKey) {
          return [this.value[this.valueKey]];
        }
        return [this.value];
      },
      set(valueList) {
        let selectValueList = Array.from(valueList, value => {
          let selectValue = value;
          if (this.valueKey) {
            selectValue = { [this.valueKey]: value };
          }
          if (this.labelKey) {
            selectValue[this.labelKey] = this.dataList[value].text;
          }
          return selectValue;
        });
        this.$emit(
          "input",
          Array.isArray(this.value) ? selectValueList : selectValueList[0]
        );
      }
    },
    selectText() {
      return Array.from(this.selectValue, value => {
        const data = this.dataList[value];
        if (data === undefined) return;
        return data.text;
      }).join(",");
    },
    selectOptions() {
      return Array.from(this.selectValue, value => {
        return this.dataList[value];
      });
    },
    readonly() {
      if (this.remoteFilter) return false;
      return !this.filter;
    }
  },
  methods: {
    handleOptionClick(kvOption) {
      if (!this.mode) {
        this.selectValue = [kvOption.value];
        this.visible = false;
        return;
      }
      const selectValue = this.selectValue;
      const index = selectValue.findIndex(m => m === kvOption.value);
      if (index < 0) {
        selectValue.push(kvOption.value);
      } else {
        selectValue.splice(index, 1);
      }
      this.selectValue = selectValue;
    },
    handleTagClick(value) {
      const selectValue = this.selectValue;
      const index = selectValue.findIndex(m => m === value);
      selectValue.splice(index, 1);
      this.selectValue = selectValue;
    },
    handleTextInput() {
      if (!this.remoteFilter) {
        this.visible = true;
        this.filterOptions(this.$children);
        return;
      }
      this.loading = true;
      this.$nextTick(() => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.$nextTick(() => {
            const result = this.remoteFilter(this.inputText);
            result
              .then(() => {
                this.loading = false;
              })
              .catch(err => {
                this.loading = false;
              });
          });
        }, 200);
      });
    },
    filterOptions(children) {
      if (!children || children.length < 1) return;
      children.forEach(child => {
        if (child.$options.componentName === "KvOption") {
          const visible = child.filterQuery(this.inputText, this.filter);
        }
        this.filterOptions(child.$children);
      });
    }
  },
  watch: {
    selectValue() {
      this.inputText = this.selectText;
    },
    visible(value) {
      if (!value) {
        this.inputText = this.selectText;
        return;
      }
      if (this.filter || this.remoteFilter) {
        this.handleTextInput();
        return;
      }
    }
  },
  created() {
    if (this.valueKey) {
      const valueList = Array.isArray(this.value) ? this.value : [this.value];
      valueList.forEach(data => {
        const value = data[this.valueKey];
        const text = data[this.labelKey];
        this.dataList[value] = { value, text };
      });
    }
  },
  mounted() {
    this.inputText = this.selectText;
  }
};
</script>

