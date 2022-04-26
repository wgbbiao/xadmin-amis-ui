(function() {
  const response = {
    "status": 0,
    "data": {
      "type": "page",
      "title": "会员列表",
      "remark": null,
      toolbar: [{
        type: 'button',
        label: '返回列表',
        actionType: 'link',
        link: '/member'
      }],
      "body": [{
        title: '会员信息',
        type: 'form',
        name: 'memberForm',
        mode: "horizontal",
        "horizontal": {
          "leftFixed": "lg"
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
  window.jsonpCallback && window.jsonpCallback(response);
})();