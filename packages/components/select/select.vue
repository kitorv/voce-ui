<template>
  <kv-dropdown :class="['kv-select',{'kv-select--disabled':disabled}]"
               :visible.sync="visible"
               :disabled="disabled">
    <div slot="selection"
         class="kv-select--selection">
      <input class="kv-select--input"
             v-if="mode!=='tags'"
             v-model="queryText"
             :placeholder="placeholder"
             :disabled="disabled"
             :readonly="!filter"
             @input="handleFilterOption" />
      <div v-else
           class="kv-select--tags">
        <div v-if="selectOptions&&selectOptions.length<1"
             class="kv-select--placeholder">{{placeholder}}</div>
        <span v-for="(option, index) in selectOptions"
              :key="index"
              class="kv-select--tags-item">{{option.text}}</span>
      </div>
      <span class="kv-select--icon">
        <slot name="icon">
          <i class="kv-icon-down"></i>
        </slot>
      </span>
    </div>
    <ul slot="panel"
        class="kv-select--dropdown">
      <slot></slot>
      <div v-if="showEmpty"
           class="kv-select--empty">暂无数据</div>
    </ul>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown";

export default {
  name: "KvSelect",
  componentName: "KvSelect",
  provide() {
    return { kvSelect: this };
  },
  data() {
    return {
      visible: false,
      options: [],
      queryText: "",
      showEmpty: false
    };
  },
  props: {
    mode: String,
    value: {
      type: [Number, String, Array],
      required: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: Boolean,
    filter: {
      type: [Boolean, Function],
      default: false
    }
  },
  computed: {
    selectOptions() {
      const selectValue = Array.isArray(this.value) ? this.value : [this.value];
      return this.options.filter(m => selectValue.includes(m.value));
    },
    selectText() {
      return Array.from(this.selectOptions, m => m.text).join(",");
    }
  },
  methods: {
    handleOptionClick(kvOption) {
      let value = this.value;
      const optionValue = kvOption.value;
      if (!Array.isArray(value)) {
        this.visible = false;
        this.$emit("input", optionValue);
        return;
      }
      const optionIndex = this.value.findIndex(m => m === optionValue);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else {
        if (this.mode) {
          value.push(optionValue);
        } else {
          value = [optionValue];
        }
      }
      this.$emit("input", value);
    },
    handleFilterOption() {
      const value = this.queryText;
      const parsedValue = value.replace(
        /(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g,
        "\\$1"
      );
      let showOptionNumber = 0;
      this.options.forEach(option => {
        option.visible = new RegExp(parsedValue, "i").test(option.text);
        if (!option.visible) return;
        showOptionNumber++;
      });
      this.showEmpty = showOptionNumber < 1;
    },
    setQueryText() {
      this.queryText = this.selectText;
    }
  },
  watch: {
    value() {
      this.setQueryText();
    },
    visible(value) {
      if (value) {
        this.handleFilterOption();
      } else {
        this.setQueryText();
      }
    }
  },
  mounted() {
    this.setQueryText();
  }
};
</script>

