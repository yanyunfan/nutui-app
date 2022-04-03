<template>
  <div>
    <nut-navbar  @on-click-back="back" title="登录"></nut-navbar>
    <nut-form>
      <nut-form-item label="姓名">
        <input class="nut-input-text" placeholder="请输入姓名" type="text" />
      </nut-form-item>
      <nut-form-item label="年龄">
        <nut-shortpassword
          v-model="state.value"
          v-model:visible="state.visible"
          :no-button="state.noButton"
          :length="state.length"
          :error-msg="state.errorMsg"
          @change="methods.onChange"
          @complete="methods.onComplete"
          @ok="methods.onOk"
          @tips="methods.onTips">
        </nut-shortpassword>
      </nut-form-item>
    </nut-form>
  </div>
</template>

<script lang="ts">
import {reactive, getCurrentInstance, defineComponent} from 'vue'

export default defineComponent ({
  name: 'Login',
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      visible: true,
      noButton: true,
      value: '',
      errorMsg: '',
      length: 6
    })
    const methods = {
      onChange(val) {
        val && proxy.$toast.text(val)
      },
      onOk(val) {
        val && proxy.$toast.text(val)
        state.visible = false
      },
      onComplete() {

      },
      onTips() {
        proxy.$toast.text('执行忘记密码逻辑')
      }
    }
    return {
      state,
      methods
    }
  }
});
</script>
