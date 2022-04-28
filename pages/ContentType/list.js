(function() {
    const page = {
        type: "page",
        title: "文档列表",
        body: {
            type: "crud",
            name: "contentType",
            api: {
                url: "/contenttype/list",
                method: "get",
            },
            columns: [
                {
                    name: "id",
                    label: "ID",
                    type: "text",
                },
                {
                    name: "app_label",
                    label: "应用标签",
                },
                {
                    name: 'model',
                    label: 'Model',
                },
                {
                    name: 'created_at',
                    label: '创建时间',
                    width: "100px",
                    type: 'date',
                    format: "YYYY-MM-DD HH:mm:ss"
                },
                {
                    name: 'updated_at',
                    label: '更新时间',
                    width: "100px",
                    type: 'date',
                    format: "YYYY-MM-DD HH:mm:ss"
                },
                {
                    label: '操作',
                    type: 'operation',
                    fixed: "right",
                    width: "100px",
                    buttons: [
                        {
                            type: 'button',
                            label: '编辑',
                            actionType: 'link',
                            link: '/auth/contenttype/edit/${id}',
                            level: "primary"
                        },
                        {
                            type: 'button',
                            label: '删除',
                            actionType: 'ajax',
                            level: "danger",
                            confirmText: "确定删除吗？",
                            api: {
                                url: "/contenttype/delete/${id}",
                                method: "delete",
                            }
                        }
                    ]
                }
            ]
        }
    };
    window.jsonpCallbackContentTypeList && window.jsonpCallbackContentTypeList({
        status: 0,
        data: page
    });
})()