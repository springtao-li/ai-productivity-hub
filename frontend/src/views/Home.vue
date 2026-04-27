<template>
  <div class="home-container">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <div class="logo">
          <h2>🚀 AI Hub</h2>
        </div>
        <el-menu
          :default-active="activeMenu"
          router
          background-color="#001529"
          text-color="#fff"
          active-text-color="#1890ff"
        >
          <el-menu-item index="/">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/chat">
            <el-icon><ChatDotRound /></el-icon>
            <span>AI对话</span>
          </el-menu-item>
          <el-menu-item index="/notes">
            <el-icon><Notebook /></el-icon>
            <span>学习笔记</span>
          </el-menu-item>
          <el-menu-item index="/snippets">
            <el-icon><Document /></el-icon>
            <span>代码片段</span>
          </el-menu-item>
          <el-menu-item index="/prompts">
            <el-icon><MagicStick /></el-icon>
            <span>提示词库</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主内容区 -->
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <div class="header-content">
            <h1>欢迎使用 AI Productivity Hub</h1>
            <div class="user-info">
              <el-button type="primary">登录</el-button>
            </div>
          </div>
        </el-header>

        <!-- 内容区 -->
        <el-main>
          <div class="dashboard">
            <h2>🎯 功能特性</h2>

            <el-row :gutter="20">
              <el-col :span="8">
                <el-card class="feature-card" shadow="hover">
                  <template #header>
                    <div class="card-header">
                      <el-icon :size="32" color="#1890ff"><ChatDotRound /></el-icon>
                      <span>AI 对话</span>
                    </div>
                  </template>
                  <p>与多种 AI 模型进行智能对话，提升工作效率</p>
                  <el-button type="primary" plain @click="$router.push('/chat')">
                    开始对话
                  </el-button>
                </el-card>
              </el-col>

              <el-col :span="8">
                <el-card class="feature-card" shadow="hover">
                  <template #header>
                    <div class="card-header">
                      <el-icon :size="32" color="#52c41a"><Notebook /></el-icon>
                      <span>学习笔记</span>
                    </div>
                  </template>
                  <p>系统化记录 AI 学习过程，沉淀知识体系</p>
                  <el-button type="success" plain @click="$router.push('/notes')">
                    查看笔记
                  </el-button>
                </el-card>
              </el-col>

              <el-col :span="8">
                <el-card class="feature-card" shadow="hover">
                  <template #header>
                    <div class="card-header">
                      <el-icon :size="32" color="#fa8c16"><Document /></el-icon>
                      <span>代码片段</span>
                    </div>
                  </template>
                  <p>保存和分享实用的代码片段，快速复用</p>
                  <el-button type="warning" plain @click="$router.push('/snippets')">
                    浏览代码
                  </el-button>
                </el-card>
              </el-col>
            </el-row>

            <el-row :gutter="20" style="margin-top: 20px;">
              <el-col :span="8">
                <el-card class="feature-card" shadow="hover">
                  <template #header>
                    <div class="card-header">
                      <el-icon :size="32" color="#eb2f96"><MagicStick /></el-icon>
                      <span>提示词库</span>
                    </div>
                  </template>
                  <p>收集和管理高质量的 AI 提示词模板</p>
                  <el-button type="danger" plain @click="$router.push('/prompts')">
                    查看模板
                  </el-button>
                </el-card>
              </el-col>

              <el-col :span="8">
                <el-card class="feature-card" shadow="hover">
                  <template #header>
                    <div class="card-header">
                      <el-icon :size="32" color="#722ed1"><TrendCharts /></el-icon>
                      <span>数据统计</span>
                    </div>
                  </template>
                  <p>可视化展示使用数据和效果分析</p>
                  <el-button plain disabled>
                    即将上线
                  </el-button>
                </el-card>
              </el-col>

              <el-col :span="8">
                <el-card class="feature-card" shadow="hover">
                  <template #header>
                    <div class="card-header">
                      <el-icon :size="32" color="#13c2c2"><Setting /></el-icon>
                      <span>系统设置</span>
                    </div>
                  </template>
                  <p>个性化配置，打造专属的工作台</p>
                  <el-button plain disabled>
                    即将上线
                  </el-button>
                </el-card>
              </el-col>
            </el-row>

            <!-- 服务状态 -->
            <el-card class="status-card" style="margin-top: 20px;">
              <template #header>
                <h3>🔧 服务状态</h3>
              </template>
              <div v-if="healthStatus" class="status-info">
                <el-tag type="success" size="large">{{ healthStatus.status }}</el-tag>
                <span style="margin-left: 20px;">服务: {{ healthStatus.service }}</span>
                <span style="margin-left: 20px;">版本: {{ healthStatus.version }}</span>
                <span style="margin-left: 20px;">时间: {{ healthStatus.timestamp }}</span>
              </div>
              <div v-else>
                <el-tag type="info">检测中...</el-tag>
              </div>
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { healthCheck } from '@/api'

const route = useRoute()
const activeMenu = computed(() => route.path)
const healthStatus = ref(null)

onMounted(async () => {
  try {
    const res = await healthCheck()
    healthStatus.value = res.data
  } catch (error) {
    console.error('健康检查失败：', error)
  }
})
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vh;

  .el-aside {
    background-color: #001529;
    color: #fff;
    height: 100vh;

    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #002140;

      h2 {
        color: #fff;
        margin: 0;
      }
    }

    .el-menu {
      border: none;
    }
  }

  .el-header {
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    padding: 0 20px;

    .header-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        margin: 0;
        font-size: 20px;
        color: #333;
      }
    }
  }

  .el-main {
    background-color: #f0f2f5;
    padding: 20px;

    .dashboard {
      h2 {
        margin-bottom: 20px;
        color: #333;
      }

      .feature-card {
        margin-bottom: 20px;

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 600;
        }

        p {
          margin: 15px 0;
          color: #666;
          line-height: 1.6;
        }
      }

      .status-card {
        .status-info {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>
