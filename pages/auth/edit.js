(function() {
  const page = {
    type: "page",
    title: "编辑管理员",
    "remark": null,
    toolbar: [{
      type: 'button',
      label: '返回列表',
      actionType: 'link',
      link: '/auth/list'
    }],
    body: [
      {
        title: '管理员信息',
        type: 'form',
        name: 'memberFormEdit',
        mode: "horizontal",
        horizontal: {
          "leftFixed": "lg"
        },
        api: {
          url: '/user/${params.id}',
          method: "put",
          data: {
            username: '${username}',
            is_super: '${is_super}',
            role_ids: '${role_ids|split:","|map:toInt}',
            permission_ids: '${permission_ids|split:","|map:toInt}',
          }
        },
        initApi: {
          url: '/user/${params.id}',
          method: "get",
          adaptor(payload) {
            let data = {
              id: payload.data.id,
              username: payload.data.username,
              is_super: payload.data.is_super,
              role_ids: payload.data.edges.roles.map(item => item.id).join(","),
              permission_ids: payload.data.edges.permissions.map(item => item.id).join(","),
            }
            return {
              status: 0,
              data
            }
          }
        },
        redirect: "/auth/list",
        messages: {
          saveSuccess: '保存成功',
          saveFailed: '保存失败'
        },
        controls: [
          {
            type: "text",
            name: "username",
            label: "用户名",
            required: true,
            description: "做为登录账号使用",
            placeholder: "请输入用户名",
          },
          {
            type: 'divider'
          },
          {
            type: "button",
            label: '点击这里修改密码',
            description: "点击这里修改密码",
            actionType: 'link',
            level: 'primary',
            link: '${id}/password'
          },
          {
            type: 'divider'
          },
          {
            name: 'is_super',
            type: 'switch',
            label: '是否是超级管理员',
            value: false,
            required: true,
          },
          {
            type: 'divider'
          },

          {
            type: 'transfer',
            name: 'role_ids',
            label: '角色',
            placeholder: '请选择角色',
            source: {
              url: '/role/list',
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
          },
          {
            type: 'divider'
          },
          {
            type: 'transfer',
            name: 'permission_ids',
            label: '权限',
            placeholder: '请选择权限',
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
          },
        ],
        actions: [
          {
            "type": "submit",
            "label": "保存",
            level: 'primary',
          }
        ]
      }
    ]
  }
  window.jsonpCallbackUserEdit && window.jsonpCallbackUserEdit({
    status: 0,
    data: page
  });
})();