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

### 1. Normal

```bash
$ flomo '#tag This is a flow momery from flomo-cli with hash tag.'
```

普通模式下，默认将命令后的字符串内容上传到 flomo 到服务器。

### 2. Editor

```bash
$ flomo edit
```

工具提供编辑器模式，输入 `flomo edit` 启动。

## Reference

本工具由 [cli-template](https://github.com/Mayandev/cli-template) 提供支持。
