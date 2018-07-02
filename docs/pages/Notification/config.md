- notification.open(config)
- notification.success(config)
- notification.error(config)
- notification.info(config)
- notification.warn(config)
- notification.close(key: String)
- notification.destroy()

`open`、`success`、`error`、`info`、`warn`都会返回一个`key`，用于`close`方法来关闭制定窗口。

config 参数如下：