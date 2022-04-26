(function() {
  const page = {
    type: "page",
    title: "编辑管理员",
    "remark": null,
    toolbar: [{
      type: 'button',
      label: '返回列表',
      actionType: 'link',
      link: '/member/list'
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
          url: '/user/edit',
          method: "post",
          data: {
            id: '${id}',
            username: '${username}',
            is_super: '${is_super}'
          }
        },
        initApi: {
          url: '/user/${params.id}',
          method: "get"
        },
        redirect: "/member/list",
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
            actionType: 'url',
            level: 'primary',
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
          }
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