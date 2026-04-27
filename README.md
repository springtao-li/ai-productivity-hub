# 🚀 AI Productivity Hub

<div align="center">

[![GitHub license](https://img.shields.io/github/license/springtao-li/ai-productivity-hub)](https://github.com/springtao-li/ai-productivity-hub/blob/main/LICENSE)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2+-green.svg)](https://spring.io/projects/spring-boot)
[![Vue](https://img.shields.io/badge/Vue-3.4+-blue.svg)](https://vuejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)](https://www.mysql.com/)

**AI 生产力中心 - 记录 AI 学习过程，分享 AI 提效工具和实践经验**

[English](./README_EN.md) | 简体中文

</div>

## 📖 项目简介

AI Productivity Hub 是一个专注于 AI 学习和生产力提升的开源项目。通过整合先进的 AI 技术和实用工具，帮助开发者提高工作效率。

### ✨ 核心特性

- 🤖 **AI 工具集成**：集成多种 AI API（OpenAI、Claude、国内大模型等）
- 📝 **学习笔记管理**：系统化记录和分享 AI 学习过程
- 🛠️ **提效工具箱**：实用的 AI 辅助开发工具
- 📊 **数据可视化**：直观展示 AI 使用统计和效果分析
- 🔐 **安全可靠**：完善的权限管理和数据安全保护

## 🏗️ 技术架构

### 后端技术栈
- **框架**：Spring Boot 3.2+
- **数据库**：MySQL 8.0+
- **ORM**：MyBatis Plus 3.5+
- **认证**：Spring Security + JWT
- **文档**：Swagger/Knife4j
- **构建工具**：Maven

### 前端技术栈
- **框架**：Vue 3.4+
- **构建工具**：Vite 5+
- **UI 框架**：Element Plus / Ant Design Vue
- **状态管理**：Pinia
- **路由**：Vue Router
- **HTTP 客户端**：Axios

### 部署运维
- **容器化**：Docker + Docker Compose
- **反向代理**：Nginx
- **CI/CD**：GitHub Actions

## 📁 项目结构

```
ai-productivity-hub/
├── backend/                # 后端服务
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/ai/productivity/
│   │   │   │       ├── config/         # 配置类
│   │   │   │       ├── controller/     # 控制器
│   │   │   │       ├── service/        # 业务逻辑
│   │   │   │       ├── mapper/         # 数据访问层
│   │   │   │       ├── entity/         # 实体类
│   │   │   │       ├── dto/            # 数据传输对象
│   │   │   │       ├── common/         # 公共类
│   │   │   │       └── utils/          # 工具类
│   │   │   └── resources/
│   │   │       ├── application.yml     # 配置文件
│   │   │       ├── application-dev.yml
│   │   │       ├── application-prod.yml
│   │   │       └── mapper/             # MyBatis XML
│   │   └── test/                       # 测试代码
│   └── pom.xml
├── frontend/               # 前端项目
│   ├── src/
│   │   ├── api/           # API 接口
│   │   ├── assets/        # 静态资源
│   │   ├── components/    # 组件
│   │   ├── views/         # 页面
│   │   ├── router/        # 路由
│   │   ├── store/         # 状态管理
│   │   ├── utils/         # 工具函数
│   │   ├── App.vue
│   │   └── main.js
│   ├── package.json
│   └── vite.config.js
├── docs/                  # 文档
│   ├── api/              # API 文档
│   ├── database/         # 数据库设计
│   └── guides/           # 使用指南
├── docker/               # Docker 配置
│   ├── backend/
│   ├── frontend/
│   └── nginx/
├── scripts/              # 脚本
│   ├── init-db.sql      # 数据库初始化
│   ├── deploy.sh        # 部署脚本
│   └── backup.sh        # 备份脚本
├── .gitignore
├── docker-compose.yml
└── README.md
```

## 🚀 快速开始

### 环境要求

- **JDK**: 17+
- **Node.js**: 18+
- **MySQL**: 8.0+
- **Maven**: 3.8+
- **pnpm/npm/yarn**: 最新版本

### 后端启动

```bash
# 1. 进入后端目录
cd backend

# 2. 安装依赖
mvn clean install

# 3. 配置数据库
# 编辑 src/main/resources/application-dev.yml
# 修改数据库连接信息

# 4. 初始化数据库
mysql -u root -p < ../scripts/init-db.sql

# 5. 启动服务
mvn spring-boot:run
```

后端服务将在 `http://localhost:8080` 启动

### 前端启动

```bash
# 1. 进入前端目录
cd frontend

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev
```

前端服务将在 `http://localhost:5173` 启动

### Docker 一键部署

```bash
# 构建并启动所有服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 📚 功能模块

### 🎯 已实现功能
- [ ] 用户认证与权限管理
- [ ] AI 对话接口集成
- [ ] 学习笔记 CRUD
- [ ] 代码片段管理
- [ ] 提示词模板库

### 🔜 规划功能
- [ ] 多模型对比测试
- [ ] AI 绘画集成
- [ ] 知识库管理
- [ ] 团队协作功能
- [ ] 使用统计分析

## 📖 文档

- [📘 开发文档](./docs/guides/development.md)
- [🗄️ 数据库设计](./docs/database/schema.md)
- [🔌 API 文档](http://localhost:8080/doc.html) （启动后访问）
- [🎨 前端组件库](./docs/guides/frontend-components.md)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 协议

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

## 📧 联系方式

- **作者**：springtao-li
- **GitHub**：[@springtao-li](https://github.com/springtao-li)

---

<div align="center">
  <sub>Built with ❤️ by springtao-li</sub>
</div>
