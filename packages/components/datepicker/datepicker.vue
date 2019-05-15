<template>
  <kv-dropdown class="kv-date-picker"
               :visible.sync="visible">
    <div slot="selection"
         class="kv-date-picker--selection">
      <input class="kv-date-picker--input"
             v-model="inputText" />
      <span class="kv-date-picker--icon">
        <i class="kv-icon-calendar"></i>
      </span>
    </div>
    <div slot="panel"
         class="kv-date-picker--panel">
      <kv-date-calendar :type="type"
                        :date="dateValue"
                        :select-value="dateValue"
                        @date-click="handleDateClick"></kv-date-calendar>
    </div>
  </kv-dropdown>
</template>

<script>
import KvDropdown from "../dropdown/dropdown"
import KvDateCalendar from "./calendar";
import dateFns from "date-fns"

export default {
  name: "KvDatePicker",
  componentName: "KvDatePicker",
  components: { KvDateCalendar },
  data() {
    return {
      visible: false,
      inputText: null
    }
  },
  props: {
    // TODO 区间
    value: [String, Array],
    type: {
      type: String,
      validator: function (value) {
        return ["year", "month", "date"].includes(value);
      },
      default: "date"
    },
    format: String
  },
  computed: {
    dateValue: {
      get() {
        return dateFns.parse(this.value)
      },
      set(value) {
        // TODO 多种情况判断
        this.$emit('input', dateFns.format(value, this.dateFormat))
      }
    },
    dateText() {
      return dateFns.format(this.dateValue, this.dateFormat)
    },
    dateFormat() {
      if (this.format) return this.format
      const format = {
        date: "YYYY-MM-DD",
        month: "YYYY-MM",
        year: "YYYY"
      }
      return format[this.type]
    }
  },
  methods: {
    handleDateClick(value) {
      this.dateValue = value
    }
  },
  watch: {
    dateValue: {
      immediate: true,
      handler() {
        this.inputText = this.dateText
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../style/variable.scss";
@import "../dropdown/index.scss";

.kv-date-picker {
  position: relative;
  display: inline-block;
  font-size: 14px;
  zoom: 1;
}

.kv-date-picker--selection {
  position: relative;
  box-sizing: border-box;
}

.kv-date-picker--input {
  background-color: $--select-background-color;
  border: $--select-border;
  border-radius: $--select-border-radius;
  -webkit-appearance: none;
  background-image: none;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  line-height: 1.5;
  outline: none;

  transition: border-color 0.2s;
  width: 100%;

  &.kv-date-picker--input {
    padding: 4px 30px 4px 11px;
    height: 32px;

    &::placeholder {
      font-size: 14px;
      color: $--select-border-color;
    }
  }
}

.kv-date-picker--icon {
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 2;
  line-height: 0;
  transform: translateY(-50%);
  color: $--select-icon-color;
  font-size: 18px;
}

.kv-date-picker--panel {
  background-color: $--select-dropdown-background-color;
  padding: 4px;
  margin: 4px 0;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  z-index: 1050;
}
</style>


