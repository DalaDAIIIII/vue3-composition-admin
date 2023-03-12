<template>
  <div class="chart-container">
    <HotMapChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import HotMapChart from '@/components/charts/HotMapChart.vue'
export default {
  name: '',
  components: {
    HotMapChart
  },
  setup() {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data)
    }
  }
}

</script>
<style scoped lang='scss'>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
