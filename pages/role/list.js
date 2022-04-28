(function() {
    const page = {
        "type": "page",
        "title": "角色列表",
        "toolbar": [
            {
                "type": "button",
                "actionType": "link",
                "link": "/role/add",
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
                }
            ]
        }

    }
    window.jsonpCallbackRoleList && window.jsonpCallbackRoleList({
        status: 0,
        data: page
    })
})()