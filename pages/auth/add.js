(function() {
  const response = {
    "type": "page",
    "title": "添加管理员",
    "remark": null,
    toolbar: [{
      type: 'button',
      label: '返回列表',
      actionType: 'link',
      link: '/auth/list'
    }],
    body: [{
      title: '管理员信息',
      type: 'form',
      name: 'memberForm',
      mode: "horizontal",
      horizontal: {
        "leftFixed": "lg"
      },
      api: {
        url: '/user/add',
        method: "post",
        data: {
          password: '${password}',
          username: '${username}',
          is_super: '${is_super}',
          role_ids: '${role_ids|split:","|map:toInt}',
          permission_ids: '${permission_ids|split:","|map:toInt}',
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
          type: "password",
          label: '密码',
          name: "password",
          required: true,
          placeholder: "请输入密码",
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
      ]
    }]
  }
  window.jsonpCallbackUserAdd && window.jsonpCallbackUserAdd(
    {
      status: 0,
      data: response
    });
})();