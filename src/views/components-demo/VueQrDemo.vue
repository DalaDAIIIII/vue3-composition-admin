<!--
 * @Description: 在线生成二维码
 * @Version: 1.0
 * @Author: zhouda
 * @Date: 2023-03-12 21:44:49
 * @LastEditors: zhouda
 * @LastEditTime: 2023-03-13 14:50:33
-->
<template>
  <div>
    <div>
      <el-input
        v-model="qrText"
        placeholder="Please input"
      >
        <template #append>
          <el-button @click="download">
            下载
          </el-button>
        </template>
      </el-input>
    </div>
    <div class="qr_code">
      <VueQr
        :text="qrText"
        ref="qrcode"
        :callback="test"
        :logoSrc="imageUrl"
        :correctLevel="3"
        :autoColor="false"
        colorDark="#313a90"
        :size="150"
        :margin="0"
        :logoMargin="3"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue'
import VueQr from 'vue-qr/src/packages/vue-qr.vue'
export default {
  name: '',
  components: {
    VueQr
  },
  setup() {
    console.log('1-开始创建组件-setup')
    const qrText = ref('Hello world!')
    const qrData = ref('')
    const data = reactive({
      imageUrl: require('@/assets/images/logo/dog.jpg'),
      test: (dataUrl: string, id: string) => {
        qrData.value = dataUrl
        console.log(dataUrl, id, 'callback')
      },
      download: () => {
        // 生成二维码异步事件
        const timer = setTimeout(() => {
          // 二维码下载任务
          // 注，当在vue3+ts项目中，识别不了document是，前面加上window

          const eleLink = window.document.createElement('a')
          eleLink.style.display = 'none'
          eleLink.download = '二维码'
          eleLink.href = qrData.value
          eleLink.click()
          eleLink.remove()
          clearTimeout(timer)
        })
      }
    })
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      qrText,
      ...toRefs(data)
    }
  }
}

</script>
<style scoped lang='scss'>
.input_box{
  display: flex;
}
.qr_code{
  padding: 20px;
display: flex;
justify-content: center;
align-items: center;
}
</style>
