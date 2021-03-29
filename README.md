<div align="center">

<img src="https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/flomo-cli.png" alt="flomo-cli"/>

# flomo-cli

为 [flomo 灵感笔记](https://flomoapp.com/)提供的命令行工具

</div>

## Install

```bash
$ npm install flomo-cli -g
# or yarn
$ yarn global add flomo-cli
```

## Usage

![flomo](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/flomo.png)


### Config

请先使用下面的命令进行配置 api。如果你在 flomo 的设置里更换了 api，也可以使用 `flomo config` 命令，重新设置 api 链接。

[在哪里查看 api？](https://flomoapp.com/iwh/MjY3NDM/19a24a215dc051f29d8f8d9328a9b329/)

```bash
$ flomo config
```

### Normal

```bash
$ flomo '#tag This is a flow momery from flomo-cli with hash tag.'
# fm is also ok
$ fm '#tag This is a flow momery from flomo-cli with hash tag.'
```

普通模式下，默认将命令后的字符串内容上传到 flomo 到服务器。

### Editor

```bash
$ flomo edit
```

工具提供编辑器模式，输入 `flomo edit` 启动。

![github-flomo-cli-gif](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/github-flomo-cli-gif.gif)



![image-20210118105159846](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/image-20210118105159846.png)


## Reference

本工具由 [cli-template](https://github.com/Mayandev/cli-template) 提供支持。
