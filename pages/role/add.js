(function() {
  const page = {
    type: 'page',
    title: '添加角色',
    name: 'roleAdd',
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
        url: '/role',
        method: 'post',
        data: {
          name: '${name}',
          permission_ids: '${permission_ids|split:","|map:toInt}',
        }
      },
      redirect: '/role',
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
          placeholder: '请选择权限', "searchable": true,
          source: {
            url: '/permission/list',
            method: 'get',
            data: {
              pageSize: 99999,
              page: 1
            },
            adaptor(payload) {
              let options = [];
              payload.data.items.forEach(item => {
                options.push({
                  label: item.name,
                  value: item.id
                })
              })
              return {
                status: 0,
                data: { options }
              };
            }
          },
        }
      ],
    },
  }
  window.jsonpCallbackRoleAdd && window.jsonpCallbackRoleAdd({
    status: 0,
    data: page
  });
})()