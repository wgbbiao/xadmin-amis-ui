(function() {
    const page = {
        type: "page",
        title: "添加权限",
        body: {
            type: "form",
            name: "permission",
            api: {
                url: "/permission/add",
                method: "post",
            },
            controls: [
                {
                    type: "text",
                    name: "name",
                    label: "名称",
                    placeholder: "请输入名称",
                },
                {
                    type: "text",
                    name: "code",
                    label: "代码",
                    placeholder: "请输入代码",
                }
            ]
        }
    }
    window.jsonpCallbackPermissionAdd && window.jsonpCallbackPermissionAdd({
        status: 0,
        data: page
    });
})()