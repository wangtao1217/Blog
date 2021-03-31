---
title: "Git常用指令"
description: ...,
date: "2021-03-31"
tags:
    - Git
    - Notes
---

#### 新建仓库

```shell
git init
```

创建一个名为 `.git` 的子目录，其中包含初始化的 Git 仓库中所有的必须文件。此时项目文件还没有被跟踪。

#### 添加到暂存区

```shell
git add
```

#### 撤销操作

```shell
git commit --amend
```

提交暂存区里的文件，若最后一次提交后未作修改，那么快照保持不变，只是修改提交信息，

当提交后发现暂存区某些文件需要修改；最后第二次提交会替代第一次提交结果

``` shell
git commit -m 'initial commit' 
git add forgotten_file 
git commit --amend
```

#### 