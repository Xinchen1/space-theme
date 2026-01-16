# 🔧 解决 GitHub Pages 部署错误

## 错误信息
```
HttpError: Resource not accessible by integration
Create Pages site failed
Get Pages site failed
```

## ✅ 解决方案（必须按顺序执行）

### 步骤 1：在 GitHub 上启用 Pages（最重要！）

1. **访问仓库设置页面**：
   ```
   https://github.com/Xinchen1/space-theme/settings/pages
   ```

2. **在 "Source" 部分**：
   - 选择：**GitHub Actions**（不是 "Deploy from a branch"）
   - 点击 **Save** 按钮

3. **等待几秒钟**，GitHub 会自动创建 Pages 站点

### 步骤 2：检查仓库权限设置

如果仓库是**私有的**，需要调整权限：

1. **访问 Actions 设置**：
   ```
   https://github.com/Xinchen1/space-theme/settings/actions
   ```

2. **在 "Workflow permissions" 部分**：
   - 选择：**Read and write permissions**
   - 勾选：**Allow GitHub Actions to create and approve pull requests**
   - 点击 **Save**

### 步骤 3：重新运行工作流

1. **访问 Actions 页面**：
   ```
   https://github.com/Xinchen1/space-theme/actions
   ```

2. **找到 "Deploy to GitHub Pages" 工作流**

3. **点击 "Run workflow" 按钮**（右上角）
   - 选择分支：`main`
   - 点击绿色的 **Run workflow** 按钮

### 步骤 4：验证部署

部署成功后，访问：
```
https://xinchen1.github.io/space-theme/
```

## 🔍 如果仍然失败

### 检查清单：

- [ ] Pages 已启用（Settings → Pages → Source = GitHub Actions）
- [ ] 仓库是 Public，或者 Workflow permissions 设置为 Read and write
- [ ] 工作流文件 `.github/workflows/deploy.yml` 存在
- [ ] `vite.config.ts` 中设置了 `base: '/space-theme/'`

### 替代方案：使用分支部署

如果 GitHub Actions 仍然失败，可以临时使用分支部署：

1. 访问：https://github.com/Xinchen1/space-theme/settings/pages
2. Source 选择：**Deploy from a branch**
3. Branch 选择：`main`，文件夹选择：`/dist`
4. 点击 **Save**

**注意**：使用分支部署需要手动构建和推送 `dist` 文件夹。

## 📝 技术说明

错误 `Resource not accessible by integration` 表示：
- GitHub Actions 没有权限访问 Pages API
- 这通常发生在 Pages 未启用时
- 必须在仓库设置中手动启用 Pages，GitHub Actions 才能自动部署

启用后，`actions/configure-pages@v4` 才能正常工作。

