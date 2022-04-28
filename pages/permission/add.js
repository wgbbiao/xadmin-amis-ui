(function() {
    const page = {
        type: "page",
        title: "添加权限",
        toolbar: [{
            type: 'button',
            actionType: 'link',
            link: '/auth/permission',
            label: '返回列表',
            level: "primary"
        }],
        body: {
            type: "form",
            name: "permission",
            api: {
                url: "/permission",
                method: "post",
            },
            redirect: "/auth/permission",
            controls: [
                {
                    type: "select",
                    name: "content_type_id",
                    label: "内容类型",
                    source: {
                        url: '/contenttype/list',
                        method: 'get',
                        params: {
                            page: 1,
                            page_size: 100,
                        },
                        adaptor(payload, response, api) {
                            let options = [];
                            response.data.data.items.forEach(item => {
                                options.push({
                                    label: item.app_label + '.' + item.model,
                                    value: item.id
                                })
                            })
                            return {
                                status: 0,
                                data: { options }
                            };
                        }
                    },
                },
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