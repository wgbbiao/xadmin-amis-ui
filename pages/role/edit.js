(function() {
  const page = {
    type: 'page',
    name: 'role',
    title: '编辑角色',
    toolbar: [
      {
        type: 'button',
        actionType: 'link',
        link: '/auth/role',
        label: '返回列表',
        level: 'primary',
      },
    ],
    body: {
      type: 'form',
      name: 'role',
      api: {
        url: '/role/${id}',
        method: 'put',
        data: {
          id: '${id}',
          name: '${name}',
          permission_ids: '${permission_ids|split:","|map:toInt}',
        },
      },
      initApi: {
        url: '/role/${params.id}',
        method: 'get',
        adaptor(payload) {
          let data = {
            id: payload.data.id,
            name: payload.data.name,
            permission_ids: payload.data.edges.permissions.map(item => item.id).join(','),
          }
          return {
            status: 0,
            data
          }
        }
      },
      redirect: '/auth/role',
      controls: [
        {
          type: 'text',
          name: 'name',
          label: '名称',
          placeholder: '请输入名称',
        },
        {
          type: 'transfer',
          name: 'permission_ids',
          label: '权限',
          placeholder: '请选择权限',
          searchable: true,
          source: {
            url: '/permission/list',
            method: 'get',
            data: {
              pageSize: 99999,
              page: 1,
            },
            adaptor(payload) {
              let options = [];
              payload.data.items.forEach(item => {
                options.push({
                  label: item.name,
                  value: item.id,
                })
              })
              return {
                status: 0,
                data: { options },
              };
            }
          },
        },
      ],
    }
  }
  window.jsonpCallbackRoleEdit && window.jsonpCallbackRoleEdit({
    status: 0,
    data: page
  });
})()