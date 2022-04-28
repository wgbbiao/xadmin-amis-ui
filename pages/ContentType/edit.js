(function() {
    const page = {
        type: "page",
        title: "编辑文档",
        body: {
            type: "form",
            name: "contentType",
            api: {
                url: "/contenttype/${params.id}",
                method: "put",
            },
            redirect: "/auth/contentType/list",
            initApi: {
                url: "/contenttype/${params.id}",
                method: "get",
            },
            controls: [
                {
                    type: "text",
                    name: "app_label",
                    label: "应用标签",
                },
                {
                    type: "text",
                    name: "model",
                    label: "模型",
                }
            ]
        }
    }
    window.jsonpCallbackContentTypeEdit && window.jsonpCallbackContentTypeEdit({
        status: 0,
        data: page
    });
})();