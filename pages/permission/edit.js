(function() {
    const page = {
        type: "page",
        title: "编辑权限",
        "remark": null,
        toolbar: [{
            type: 'button',
            label: '返回列表',
            actionType: 'link',
            link: '/auth/permission'
        }],
        body:
        {
            title: '权限信息',
            type: 'form',
            name: 'permissionFormEdit',
            api: {
                url: '/permission/${params.id}',
                method: 'put',
                data: {
                    id: '${INT(params.id)}',
                    name: '${name}',
                    code: '${code}',
                    content_type_id: '${content_type_id}',
                }
            },
            initApi: {
                url: '/permission/${params.id}',
                adaptor(payload) {
                    console.log(payload)
                    return {
                        status: 0,
                        data: {
                            id: payload.data.id,
                            content_type_id: payload.data.edges.ContentType.id,
                            name: payload.data.name,
                            code: payload.data.code,
                        }
                    };
                }
            },
            redirect: '/auth/permission',
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
                        adaptor(payload) {
                            let options = [];
                            payload.data.items.forEach(item => {
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
    window.jsonpCallbackPermissionEdit && window.jsonpCallbackPermissionEdit({
        status: 0,
        data: page
    });

})()