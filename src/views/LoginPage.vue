<template>
    <div class="login-container">
        <el-card class="login-card">
            <h2 class="title">Login to Your Blog</h2>
            <el-form :model="loginForm" ref="loginFormRef" label-width="90px">
                <el-form-item label="Username" prop="username">
                    <el-input
                        v-model="loginForm.username"
                        placeholder="Enter your username"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input
                        type="password"
                        v-model="loginForm.password"
                        placeholder="Enter your password"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin">Login</el-button>
                    <el-button type="text">Forgot Password?</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface LoginForm {
    username: string
    password: string
}

const loginForm = ref<LoginForm>({
    username: '',
    password: '',
})

const loginFormRef = ref()

const handleLogin = () => {
    if (!loginForm.value.username || !loginForm.value.password) {
        ElMessage.error('Username and Password are required')
        return
    }
    ElMessage.success('Login successful!')
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #2c3e50;
}

.login-card {
    width: 400px;
    padding: 20px;
    background: #fff;
}

.title {
    text-align: center;
    margin-bottom: 20px;
}
</style>
