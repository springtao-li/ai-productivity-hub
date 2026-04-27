import request from '@/utils/request'

// 健康检查
export function healthCheck() {
  return request({
    url: '/health',
    method: 'get'
  })
}

// 欢迎页面
export function welcome() {
  return request({
    url: '/',
    method: 'get'
  })
}

// 用户相关
export const userApi = {
  login(data) {
    return request({
      url: '/user/login',
      method: 'post',
      data
    })
  },
  register(data) {
    return request({
      url: '/user/register',
      method: 'post',
      data
    })
  },
  getUserInfo() {
    return request({
      url: '/user/info',
      method: 'get'
    })
  }
}

// AI对话相关
export const chatApi = {
  // 创建对话
  createConversation(data) {
    return request({
      url: '/chat/conversation',
      method: 'post',
      data
    })
  },
  // 获取对话列表
  getConversations(params) {
    return request({
      url: '/chat/conversations',
      method: 'get',
      params
    })
  },
  // 发送消息
  sendMessage(data) {
    return request({
      url: '/chat/message',
      method: 'post',
      data
    })
  }
}

// 学习笔记相关
export const noteApi = {
  // 获取笔记列表
  getNotes(params) {
    return request({
      url: '/notes',
      method: 'get',
      params
    })
  },
  // 创建笔记
  createNote(data) {
    return request({
      url: '/notes',
      method: 'post',
      data
    })
  },
  // 更新笔记
  updateNote(id, data) {
    return request({
      url: `/notes/${id}`,
      method: 'put',
      data
    })
  },
  // 删除笔记
  deleteNote(id) {
    return request({
      url: `/notes/${id}`,
      method: 'delete'
    })
  }
}

// 代码片段相关
export const snippetApi = {
  // 获取代码片段列表
  getSnippets(params) {
    return request({
      url: '/snippets',
      method: 'get',
      params
    })
  },
  // 创建代码片段
  createSnippet(data) {
    return request({
      url: '/snippets',
      method: 'post',
      data
    })
  },
  // 更新代码片段
  updateSnippet(id, data) {
    return request({
      url: `/snippets/${id}`,
      method: 'put',
      data
    })
  },
  // 删除代码片段
  deleteSnippet(id) {
    return request({
      url: `/snippets/${id}`,
      method: 'delete'
    })
  }
}

// 提示词模板相关
export const promptApi = {
  // 获取提示词列表
  getPrompts(params) {
    return request({
      url: '/prompts',
      method: 'get',
      params
    })
  },
  // 创建提示词
  createPrompt(data) {
    return request({
      url: '/prompts',
      method: 'post',
      data
    })
  },
  // 更新提示词
  updatePrompt(id, data) {
    return request({
      url: `/prompts/${id}`,
      method: 'put',
      data
    })
  },
  // 删除提示词
  deletePrompt(id) {
    return request({
      url: `/prompts/${id}`,
      method: 'delete'
    })
  }
}
