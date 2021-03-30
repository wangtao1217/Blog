---
title: "Http"
description: 用于Http 协议交互的信息被称为HTTP报文
date: "2017-08-10"
tags: 
    - Http 
    - Network 
    - Study
---


## HTTP报文

用于Http 协议交互的信息被称为HTTP报文

请求/响应报文由以下内容组成：

- 请求行，例如：`GET /logo.gif HTTP/1.1`或[状态码](https://zh.wikipedia.org/wiki/HTTP状态码)行，例如：`HTTP/1.1 200 OK`，
- [HTTP头字段](https://zh.wikipedia.org/wiki/HTTP头字段)
- 空行
- 可选的HTTP报文主体数据

### 3.5 范围请求

指定范围发送的请求，执行范围请求时，会用到首部字段的`Range`x来指定资源的byte范围

### 3.6 内容协商

**内容协商**指客户端和服务器就响应的资源内容进行<u>交涉</u>，然后提供给客户端最合适的资源。内容协商会以语言，字符集，编码方式等为基准判断响应的资源。

- `Accept`
- `Accept-Charset`
- `Accept-Encoding`
- `Accept-Language`

- `Content-Language`

#### 内容协商有以下类型：

1. 服务器驱动协商
2. 客户端驱动协商
3. 透明协商

## 2. HTTP状态码

状态码的职责是当客户端向服务器发送请求后，描述返回的请求结果。

### 状态码的类别：

| #    | 类别                          | 描述                       |
| :--- | ----------------------------- | -------------------------- |
| 1XX  | Informational（信息性状态码） | 接收的请求正在处理         |
| 2XX  | Success（成功状态码）         | 请求正常处理完毕           |
| 3XX  | Redirection（重定向状态码）   | 需要进行附加操作以完成请求 |
| 4XX  | Client Error（客户端错误）    | 服务器无法处理请求         |
| 5XX  | Server Error（服务端错误）    | 服务器处理请求出错         |

### 2XX 成功

#### `200` OK

#### `204 `No Content

服务器接收的请求已经成功处理，但在返回的响应报文中不含实体的主体；也不允许返回任何实体的主体。

#### `206` Partial Content

表示客户端进行了范围请求，并且服务器成功执行了这部分的get请求。响应的报文中包含`Content-Range` 指定范围的实体内容。



### 3XX 重定向

#### `301` Moved Permanently

**永久性重定向**，请求的资源以被分配了新的URL

#### `302` Found

**临时性重定向**，请求的资源以被分配了新的URL，希望用户（本次）能使用新的 url 访问

#### `303` See Other

#### `304` Not Modified

### 4XX 客户端错误

#### `400` Bad Request

​	请求报文中存在语法错误

#### `401` Unauthorized

​	发送的请求需要有通过HTTP认证的认证信息

#### `403` Forbidden

​	对请求资源的访问被拒绝了；可以在实体的主体部分对原因进行描述

#### `404`  Not Found

​	服务器上没有访问的资源

### 5XX 服务器错误

### 