- message.success(config)
- message.error(config)
- message.info(config)
- message.warn(config)
- message.close(key: String)
- message.destroy()

`open`、`success`、`error`、`info`、`warn`都会返回一个`key`，用于`close`方法来关闭制定窗口。

config 参数如下：