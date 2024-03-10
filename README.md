# Tauri+SvelteKit 自用模板

此存储库包含一个入门模板，用于使用 SvelteKit 和 Tailwind CSS 构建 Tauri 应用程序。

## 开始

1.  安装依赖:

```
npm install
```

2.  启动:

```
npm run tauri dev
```

3. 或者只在浏览器中运行:

```
npm run dev
```

这将启动开发服务器并打开一个新窗口。每当您更改源代码时，该应用程序都会自动重新加载。

## 构建

若要生成用于生产的应用，请运行以下命令：

```
npm run build
```

这将在 `build` 目录中创建应用的生产版本。

或者构建 `windows/mac` 应用:

```
npm run tauri build
```

这将在 `src-tauri\target\release\bundle` 目录中创建安装程序。
