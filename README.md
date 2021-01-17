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

### Normal

```bash
$ flomo '#tag This is a flow momery from flomo-cli with hash tag.'
```

普通模式下，默认将命令后的字符串内容上传到 flomo 到服务器。

### Editor

```bash
$ flomo edit
```

工具提供编辑器模式，输入 `flomo edit` 启动。

![github-flomo-cli-gif](https://mayandev.oss-cn-hangzhou.aliyuncs.com/uPic/github-flomo-cli-gif.gif)

### Config

如果你在 flomo 的设置里更换了 api，可以使用 `flomo config` 命令，重新设置 api 链接。

```bash
$ flomo config
```

## Reference

本工具由 [cli-template](https://github.com/Mayandev/cli-template) 提供支持。
