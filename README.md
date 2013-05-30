## `requirejs` 需要注意的地方
- `baseUrl`: 模块查找路径，如果缺省，以main.js路径为准

```
    paths: {
        jquery: [
            "lib/jquery-1.10.0.min",
            "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min"
        ]
    },
```

- 如果在define或者require某个id模块失败时，进入path下查找，以上为id 为jquery的模块应该查找的路径，
如果数组的第一条地址获取失败，获取第二条
- `shim` 处理外界的类库，但还是不怎么会用