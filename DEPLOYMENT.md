# GitHub Pages 部署说明

## ⚠️ 重要：必须先启用 GitHub Pages

如果看到以下错误：
- `HttpError: Resource not accessible by integration`
- `Create Pages site failed`
- `Get Pages site failed`

**解决方法：**

### 步骤 1：启用 GitHub Pages

1. 访问仓库设置：https://github.com/Xinchen1/space-theme/settings/pages

2. 在 **"Source"** 部分：
   - 选择：**GitHub Actions**
   - 点击 **Save** 保存

3. 保存后，GitHub Actions 工作流会自动运行并部署

### 步骤 2：检查仓库权限

如果仓库是**私有的**，需要确保：
- 进入 Settings → Actions → General
- 确保 "Workflow permissions" 设置为 "Read and write permissions"
- 或者将仓库设置为 **Public**（公开）

### 步骤 3：查看部署状态

- **Actions 页面**：https://github.com/Xinchen1/space-theme/actions
- 查看 "Deploy to GitHub Pages" 工作流的运行状态

### 部署完成后访问：

- **GitHub Pages 地址**：https://xinchen1.github.io/space-theme/

## 手动触发部署

如果需要手动触发部署：
1. 访问 Actions 页面
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮

