<template>
  <div>
    <el-form ref="defForm" :rules="rules" :model="defForm" label-width="80px">
      <el-form-item label="标签名称" prop="tagName">
        <el-input v-model="defForm.tagName"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="close" >取消</el-button>
        <el-button type="primary" :loading="loading" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {create} from '@/api/tag'
  export default {
    name: "Add",
    data(){
      return {
        defForm:{
          tagName:'',
        },
        loading:false,
        rules:{
          tagName:[{required:true,message:'必填项不能为空'}],
        }
      }
    },
    methods:{
      submitForm(form){
        this.$refs['defForm'].validate(valid=>{
          if(valid){
            this.loading = true
            create(this.defForm).then(data=>{
              this.loading = false
              this.$refs['defForm'].resetFields()
              this.$emit("after")
              this.$emit("hideDialog")
            }).catch(error=>{
              this.loading = false
              this.$message.error(error)
            })
          }
        })
      },
      close(){
        this.$emit("hideDialog")
      }
    }
  }
</script>

<style scoped>

</style>