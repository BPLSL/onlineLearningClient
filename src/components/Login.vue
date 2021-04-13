<template>
    <div id="div">

        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <el-row type="flex" justify="center">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="12">
                        <div class="grid-content">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="用户名" prop="id">
                                    <el-input type="text" v-model="ruleForm.id"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                                </el-form-item>                            
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        
                        </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                </el-row>
                
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      
      return {
        ruleForm: {
          id: '',
          password: '',
          // pass: '',
          // checkPass: '',
          // age: ''
        },
        rules: {
          id: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { len: 8, message: '长度为8个字符', trigger: 'blur'}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {            
            const that = this;
            this.$axios.post('/api/student/login',{
                id: this.ruleForm.id,
                password: this.ruleForm.password
            })
            .then(function(response){
              that.$router.push('/student/main')
              console.log(response);

            })
            .catch(function(error){
              console.log(error)

            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
</style>