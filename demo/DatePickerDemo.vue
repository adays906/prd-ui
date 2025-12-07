<template>
  <div class="date-picker-demo">
    <h2>日期选择器</h2>
    
    <div class="demo-section">
      <h3>基本使用</h3>
      <prd-date-picker v-model="date" />
    </div>

    <div class="demo-section">
      <h3>日期范围选择</h3>
      <prd-range-picker v-model="dateRange" />
    </div>

    <div class="demo-section">
      <h3>不同尺寸</h3>
      <prd-date-picker v-model="date" size="large" />
      <prd-date-picker v-model="date" size="default" style="margin: 0 12px;" />
      <prd-date-picker v-model="date" size="small" />
    </div>

    <div class="demo-section">
      <h3>禁用状态</h3>
      <prd-date-picker v-model="date" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Dayjs } from 'dayjs';

const date = ref<Dayjs | null>(null);
const dateRange = ref<[Dayjs | null, Dayjs | null]>([null, null]);
</script>

<style lang="less">
.date-picker-demo {
  padding: 20px;
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #262626;
    margin-bottom: 20px;
  }
  
  .demo-section {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    
    h3 {
      font-size: 16px;
      font-weight: 500;
      color: #595959;
      margin-bottom: 12px;
    }
    
    > .prd-picker {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
}
</style>