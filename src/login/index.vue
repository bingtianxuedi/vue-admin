<template>
    <div id='login'>
       <div class="login-wrap">
            <ul class='menu-tab'>
                <li :class="{'curent': item.curent}" @click='toggleMenu(item)' v-for="item in menutab" :key="item.id">{{item.txt}}</li>
            </ul>
            <!-- form表单验证 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size='medium'>
                <el-form-item prop="username" class='item-form'>
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="pwd" class='item-form'>
                     <label>密码</label>
                    <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>

                <el-form-item prop="code" class='item-form'>
                     <label>验证码</label>
                     <el-row :gutter="10">
                        <el-col :span="15">
                            <el-input v-model.number="ruleForm.code" class='block'></el-input>
                        </el-col>
                        <el-col :span="9" class='block'>
                            <el-button type="success">
                                获取验证码
                            </el-button>
                        </el-col>
                    </el-row>
                    
                </el-form-item>

                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')" class="block item-sub">提交</el-button>
                </el-form-item>
            </el-form>
       </div>
    </div> 
</template>
<script>
export default {
    data () {
            
        //验证邮箱username
        var validateUsername = (rule, value, callback) => {
            let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
            if (value === '') {
                callback(new Error('请输入邮箱'));
            } else if( !reg.test(value)){
                callback(new Error('格式有误请输入正确邮箱'));
            } else {
                callback();
            }
        };
        //验证密码
        var validatePwd = (rule, value, callback) => {
            let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\5{6,20}$/;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if ( !reg.test(value)) {
                callback(new Error('密码为6到20位的字母和数字'));
            } else {
                callback();
            }
        };
        //验证验证码
        var checkCode = (rule, value, callback) => {
            let reg = /^[a-z0-9]{6}$/;
            if (value == ' ') {
                 callback(new Error('请输入验证码'));
            }else if(!reg.test(value)){
                 callback(new Error('验证码格式有误'));
            }else{
                callback();
            }
        };
        return {
            menutab:[
                {txt:'登陆',curent:true},
                {txt:'注册',curent:false}
            ],
            ruleForm: {
                username: '',
                pwd: '',
                code: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                pwd: [
                    { validator: validatePwd, trigger: 'blur' }
                ],
                code: [
                    { validator: checkCode, trigger: 'blur' }
                ]
            }    
        }
    },
    methods:{
        //vue中是数据驱动视图
        toggleMenu(data){
            // console.log(data);
            this.menutab.forEach(ele=>{
                ele.curent=false
            });
            data.curent = true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    },
    created(){},
    mounted(){}
}
</script>
<style scoped>
#login{
    height:100vh;
    background-color: #344a5f;
}
.login-wrap{
    width:330px;
    margin:auto;
}
.menu-tab{
text-align: center;
}
.menu-tab li{
    display:inline-block;
    width: 88px;
    line-height: 36px;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}
.curent{
    background: rgba(0,0,0,1);
}
.login-form{
    margin-top: 29px;
}
.login-form label{
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
}
.item-form{
    margin-bottom: 13px;
}
.item-sub{
    width:100%;
    margin-top: 19px;
}
.block{
    display: block;
}
</style>