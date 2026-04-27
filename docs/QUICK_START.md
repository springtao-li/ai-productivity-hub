# 🚀 快速开始指南

## 前置要求

确保你的开发环境已安装以下工具：

- **JDK 17+**
- **Maven 3.8+**
- **Node.js 18+**
- **MySQL 8.0+**
- **Redis** (可选，用于缓存)
- **Git**

## 方式一：本地开发环境

### 1. 克隆项目

```bash
git clone git@github.com:springtao-li/ai-productivity-hub.git
cd ai-productivity-hub
```

### 2. 初始化数据库

```bash
# 登录MySQL
mysql -u root -p

# 执行初始化脚本
source scripts/init-db.sql

# 或者直接执行
mysql -u root -p < scripts/init-db.sql
```

### 3. 启动后端服务

```bash
cd backend

# 编辑配置文件（如果需要修改数据库配置）
vim src/main/resources/application-dev.yml

# 安装依赖并启动
mvn clean install
mvn spring-boot:run
```

后端服务将在 `http://localhost:8080` 启动

访问 API 文档：`http://localhost:8080/doc.html`

### 4. 启动前端服务

```bash
cd frontend

# 安装依赖
pnpm install
# 或者
npm install

# 启动开发服务器
pnpm dev
# 或者
npm run dev
```

前端服务将在 `http://localhost:5173` 启动

## 方式二：Docker 一键部署

### 1. 确保已安装 Docker 和 Docker Compose

```bash
docker --version
docker-compose --version
```

### 2. 启动所有服务

```bash
# 构建并启动
docker-compose up -d

# 查看日志
docker-compose logs -f

# 查看服务状态
docker-compose ps
```

服务端口：
- 前端：http://localhost
- 后端：http://localhost:8080
- MySQL：localhost:3306
- Redis：localhost:6379

### 3. 停止服务

```bash
docker-compose down

# 停止并删除数据卷
docker-compose down -v
```

## 默认账号

- **用户名**：admin
- **密码**：admin123

## 项目结构

```
ai-productivity-hub/
├── backend/          # Spring Boot 后端
├── frontend/         # Vue 3 前端
├── scripts/          # 脚本文件
├── docker/           # Docker 配置
├── docs/             # 文档
└── docker-compose.yml
```

## 常见问题

### 1. 数据库连接失败

检查 MySQL 是否启动，以及 `application-dev.yml` 中的配置是否正确。

### 2. 前端无法访问后端

确保后端服务已启动，检查 `vite.config.js` 中的代理配置。

### 3. Docker 启动失败

检查端口是否被占用：
```bash
lsof -i :80
lsof -i :8080
lsof -i :3306
```

## 下一步

- 📖 阅读 [开发文档](./guides/development.md)
- 🗄️ 查看 [数据库设计](./database/schema.md)
- 🔌 浏览 [API 文档](http://localhost:8080/doc.html)

## 技术支持

如遇到问题，请提交 Issue：
https://github.com/springtao-li/ai-productivity-hub/issues
