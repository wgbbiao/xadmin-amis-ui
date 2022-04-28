(function() {
  const page = {
    type: 'page',
    title: "修改管理员密码",
    toolbar: [{
      type: 'button',
      label: '返回列表',
      actionType: 'link',
      link: '/member/list'
    }],
    body: [
      {
        title: '修改密码',
        type: 'form',
        name: 'memberFormEditPassword',
        mode: "horizontal",
        horizontal: {
          "leftFixed": "lg"
        },
        api: {
          url: '/user/modify_password',
          method: "post",
          data: {
            id: '${INT(params.id)}',
            password: '${password}',
            password_confirmation: '${password_confirmation}'
          }
        },
        controls: [
          {
            type: 'password',
            name: 'password',
            label: '新密码',
            placeholder: '请输入新密码',
            required: true,
            description: '请输入新密码',
            title: '新密码',
            validations: {
              minLength: 6,
            },
          },
          {
            type: 'password',
            name: 'password_confirmation',
            label: '确认密码',
            placeholder: '请再次输入新密码',
            required: true,
            description: '请再次输入新密码',
            validations: {
              equalsField: 'password'
            },
            validationErrors: {
              equalsField: '两次输入的密码不一致'
            }
          },
        ]
      }
    ]
  }
  window.jsonpCallbackUserPassword && window.jsonpCallbackUserPassword({
    status: 0,
    data: page
  });
})()