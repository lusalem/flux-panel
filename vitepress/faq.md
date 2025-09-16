# 常见问题

::: tip 需要帮助？
📱 [加入 Telegram 群组](https://t.me/+wdVDni1fdyI0YzE1) | 🐛 [GitHub Issues](https://github.com/bqlpfy/flux-panel/issues) | 🚀 [快速开始](/getting-started)
:::

## 面板管理脚本

安装、更新、卸载面板均使用同一条命令，运行后在菜单中选择对应操作：

```bash
curl -L https://raw.githubusercontent.com/lusalem/flux-panel/refs/heads/main/panel_install.sh -o panel_install.sh && chmod +x panel_install.sh && ./panel_install.sh
```

## 节点管理脚本

节点的“更新”和“卸载”可直接使用以下命令，安装脚本请前往面板系统的“节点管理”页面复制获取：

```bash
curl -L https://raw.githubusercontent.com/lusalem/flux-panel/refs/heads/main/install.sh -o install.sh && chmod +x install.sh && ./install.sh
```

## 日志查看

### 查看后端服务日志

当后端服务出现问题时，可以通过以下命令查看实时日志：

```bash
docker logs -f springboot-backend
```

按 `Ctrl+C` 退出日志查看

### 查看节点日志

当转发功能出现问题时，可以通过以下命令查看gost服务日志：

```bash
journalctl -u gost -f
```

按 `Ctrl+C` 退出日志查看

### 重启服务gost

```bash
systemctl restart gost
```

