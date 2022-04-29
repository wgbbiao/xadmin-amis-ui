(function() {
    const page = {
        "type": "page",
        "title": "角色列表",
        "toolbar": [
            {
                "type": "button",
                "actionType": "link",
                "link": "role/add",
                "label": "添加角色",
                "primary": true
            }
        ],
        body: {
            type: 'crud',
            name: 'role',
            api: {
                url: '/role/list',
                method: "get",
                data: {
                    name: '${name}',
                    "page": "${page}"
                },
                perPage: 20,
                "filterTogglable": true,
                "autoGenerateFilter": true,
                "syncLocation": false,
            },
            columns: [
                {
                    label: "ID",
                    name: "id",
                    type: "text",
                },
                {
                    label: '名称',
                    name: 'name',
                    type: 'text',
                },
                {
                    label: '创建时间',
                    name: 'created_at',
                    type: "date",
                    format: "YYYY-MM-DD HH:mm:ss"
                },
                {
                    label: '更新时间',
                    name: 'updated_at',
                    type: "date",
                    format: "YYYY-MM-DD HH:mm:ss"
                },
                {
                    label: '操作',
                    type: 'operation',
                    fixed: "right",
                    buttons: [
                        {
                            type: 'button',
                            actionType: 'link',
                            link: 'role/edit/${id}',
                            label: '编辑',
                            level: 'primary'
                        },
                        {
                            type: 'button',
                            actionType: 'ajax',
                            api: 'delete:/role/${id}',
                            confirmText: "确定删除吗？",
                            label: '删除',
                            level: 'danger'
                        }
                    ]
                }
            ]
        }

    }
    window.jsonpCallbackRoleList && window.jsonpCallbackRoleList({
        status: 0,
        data: page
    })
})()