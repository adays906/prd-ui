<template>
  <div class="button-demo">
    <h2>按钮组件</h2>
    
    <div class="demo-section">
      <h3>按钮类型</h3>
      <prd-button type="default">默认按钮</prd-button>
      <prd-button type="primary">主要按钮</prd-button>
      <prd-button type="success">成功按钮</prd-button>
      <prd-button type="warning">警告按钮</prd-button>
      <prd-button type="danger">危险按钮</prd-button>
      <prd-button type="info">信息按钮</prd-button>
    </div>

    <div class="demo-section">
      <h3>按钮尺寸</h3>
      <prd-button type="primary" size="large">大按钮</prd-button>
      <prd-button type="primary" size="default">默认尺寸</prd-button>
      <prd-button type="primary" size="small">小按钮</prd-button>
    </div>

    <div class="demo-section">
      <h3>按钮状态</h3>
      <prd-button type="primary" disabled>禁用按钮</prd-button>
      <prd-button type="primary" loading>加载按钮</prd-button>
    </div>

    <div class="demo-section">
      <h3>按钮形状</h3>
      <prd-button type="primary" shape="round">圆角按钮</prd-button>
      <prd-button type="primary" shape="circle" text="+" size="small" />
      <prd-button type="primary" shape="circle" text="-" />
      <prd-button type="primary" shape="circle" text="✓" size="large" />
    </div>

    <div class="demo-section">
      <h3>链接按钮</h3>
      <prd-button type="primary" href="#">主要链接</prd-button>
      <prd-button type="success" href="#">成功链接</prd-button>
      <prd-button type="warning" href="#">警告链接</prd-button>
      <prd-button type="danger" href="#">危险链接</prd-button>
      <prd-button type="info" href="#">信息链接</prd-button>
    </div>

    <div class="demo-section">
      <h3>图标按钮</h3>
      <prd-button type="primary" icon="🔍">搜索</prd-button>
      <prd-button type="primary" icon="📧" icon-position="right">发送</prd-button>
      <prd-button type="primary" circle icon="✨" />
    </div>

    <div class="demo-section">
      <h3>事件处理</h3>
      <prd-button type="primary" @click="handleClick">点击我</prd-button>
      <span class="message">{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');

const handleClick = () => {
  message.value = '按钮被点击了！';
  setTimeout(() => {
    message.value = '';
  }, 2000);
};
</script>

<style lang="less">
.button-demo {
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
    
    > .prd-button {
      margin-right: 12px;
      margin-bottom: 12px;
    }
    
    .message {
      margin-left: 12px;
      color: #1890ff;
      font-size: 14px;
    }
  }
}
</style>