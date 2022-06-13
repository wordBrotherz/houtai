import request from '@/utils/request'

/**
 * 首页
 */
export function getIndex() {
  return request.get('/admin/adminHome').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 用户列表
 */
export function userlist() {
  return request.get('/admin/UserList').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 充值列表
 */
export function UserRecharge() {
  return request.get('/admin/UserRecharge').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 充值列表
 */
export function UserWithdraw() {
  return request.get('/admin/UserWithdraw').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}
