<template>
  <div>
    <el-form  size="medium" label-width="100px" label-position="left">
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">获取SDK版本信息</el-button>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="getByParam">通过参数获取</el-button>
      </el-form-item>
    </el-form>

    <div>{{sdkversions}}</div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {

    computed: {
      ...mapState({
        sdkversions: state=> state.sddmstore.sdkversions,
      })
    },
    methods: {
      submitForm() {
          this.$store.dispatch("sddmstore/getsdkversion_action")
        },
      getByParam() {
        this.$store.dispatch("sddmstore/delById_action","5e5b63da0abf0c00011c435a")
      }
      }
  }


</script>
<style>
</style>
