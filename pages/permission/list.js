(function() {
  const page = {
    type: "page",
    title: '权限列表',
    toolbar: [
      {
        type: 'button',
        actionType: 'link',
        link: '/auth/permission/add',
        label: '添加权限',
        level: "primary"
      }
    ],
    body: {
      type: 'crud',
      name: 'permission',
      api: {
        url: '/permission/list',
        method: "get",
        data: {
          name: '${name}',
          page: "${page}"
        },
      },
      perPage: 20,
      filterTogglable: true,
      autoGenerateFilter: true,
      syncLocation: false,
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
          searchable: true
        },
        {
          label: '代码',
          name: 'code',
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
          name: 'action',
          type: 'operation',
          fixed: "right",
          buttons: [
            {
              type: 'button',
              label: '编辑',
              actionType: 'link',
              link: '/permission/edit/${id}',
              level: "primary"
            },
            {
              type: 'button',
              label: '删除',
              actionType: 'ajax',
              confirmText: "确定删除吗？",
              api: {
                url: '/permission/delete/${id}',
                method: "delete"
              },
              level: "danger"
            }
          ]
        }
      ]
    }
  }
  window.jsonpCallbackPermissionList && window.jsonpCallbackPermissionList({
    status: 0,
    data: page
  })
})()