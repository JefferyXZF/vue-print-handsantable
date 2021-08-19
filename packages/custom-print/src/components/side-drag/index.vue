<template>
  <div class="print-field">
    <div class="field-title">
      <span
        :class="{'active':currentIndex===0}"
        class="form-field"
        @click="currentIndex=0"
      >表单字段</span>
      <span
        :class="{'active':currentIndex===1}"
        class="system-field"
        @click="currentIndex=1"
      >系统字段</span>
    </div>
    <div
      v-show="currentIndex === 0"
      class="field-tab"
    >
      <div
        :class="{'active':tabIndex===0}"
        class="content"
        @click="tabIndex=0"
      >
        内容
      </div>
      <div
        :class="{'active':tabIndex===1}"
        class="title"
        @click="tabIndex=1"
      >
        标题
      </div>
    </div>
    <ul
      v-show="currentIndex === 0"
      class="field-list"
    >
      <div v-show="tabIndex===0">
        <li
          v-for="item in fields"
          :key="item._id"
        >
          <div
            class="field-item"
            draggable="true"
            @dragstart="drag($event,item)"
            @dragend="end($event)"
          >
            [内容] {{ item.label }}
          </div>
        </li>
      </div>
      <div v-show="tabIndex===1">
        <li
          v-for="item in fields"
          :key="item._id"
        >
          <div
            class="field-item"
            draggable="true"
            @dragstart="drag($event,item,null,true)"
            @dragend="end($event)"
          >
            [标题] {{ item.label }}
          </div>
        </li>
      </div>
    </ul>
    <ul
      v-show="currentIndex === 1"
      class="field-list"
      style="margin-top:20px;"
    >
      <div class="label">
        基本字段
      </div>
      <li
        v-for="item in sysFields"
        :key="item._id"
      >
        <div
          class="field-item"
          draggable="true"
          @dragstart="drag($event,item)"
          @dragend="end($event)"
        >
          [{{ preItemText(item) }}] {{ item.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import propsMixin from '../../mixins/propMixin.js'

export default {
  name: 'SideDrag',

  mixins: [propsMixin]

}
</script>

<style lang="scss" scoped>
@import '@scss/custom-print/sideDrag.scss'
</style>
