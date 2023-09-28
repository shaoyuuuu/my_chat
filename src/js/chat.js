
var bot = new ChatSDK({
  config: {
    navbar: {
      title: '智能助理11'
    },
    robot: {
      avatar: '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg'
    },
    user: {
      avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
    },
    messages: [{
        type: 'card',
        content: {
          code: 'recommend',
          data: {
            list: [{
                title: '如何办理准生证？'
              },
              {
                title: '生育登记成功后在哪里看'
              },
              {
                title: '链接形式',
                url: 'https://www.baidu.com/'
              }
            ]
          }
        }
      },
      {
        type: 'system',
        content: {
          text: '智能助理进入对话，为您服务'
        }
      },
      {
        type: 'text',
        content: {
          text: '智能助理为您服务，请问有什么可以帮您？'
        }
      },
      {
        type: 'cmd',
        content: {
          code: 'agent_entrance_display'
        }
      }
    ],
    quickReplies: [{
        name: '发送文本',
      },
      {
        name: '可见文本',
        type: 'text',
        text: '实际发送的文本',
      },
      {
        name: '点击跳转',
        type: 'url',
        url: 'https://www.taobao.com/',
      },
      {
        name: '唤起卡片',
        type: 'card',
        card: {
          code: 'knowledge',
          data: {}
        },
      },
      {
        name: '执行指令',
        type: 'cmd',
        cmd: {
          code: 'agent_join'
        },
      },
    ],
  },
  requests: {
    send: function (msg) {
      return {
        url: 'http://127.0.0.1:8081/api/ask',
        data: {
          q: msg.content.text
        }
      };
    }
  }
});
export default bot;