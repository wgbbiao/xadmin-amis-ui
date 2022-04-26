(function() {
  const response = {
    "status": 0,
    "data": {
      "type": "page",
      "title": "添加管理员",
      "remark": null,
      toolbar: [{
        type: 'button',
        label: '返回列表',
        actionType: 'link',
        link: '/member/list'
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
          method: "post"
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
          }
        ]
      }]
    }
  }
  window.jsonpCallbackUserAdd && window.jsonpCallbackUserAdd(response);
})();