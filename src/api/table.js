import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list', method: 'get', params
  })
}

/**
 * 用户登录
 */
export function login(page) {
  return request.post('admin/login', page).then(response => {
    if (response.status == 1 || response.status == 6) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 用户登出
 */
export function logout(page) {
  return request.get('admin/logout?token=' + page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 首页
 */
export function getIndex() {
  return request.get('/admin/index').then(response => {
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
export function userlist(page, count, desc) {
  return request.get('/user/list?page=' + page + '&count=' + count + '&order=' + desc).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 资金列表
 */
export function fundingshow(page) {
  return request.post('funding/show', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 提现列表
 */
export function fundingrecharge(page) {
  return request.post('funding/recharge', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 礦機列表
 */
export function mininglist(page, count, desc) {
  return request.get('/mining/list?page=' + page + '&count=' + count + '&order=' + desc).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 礦機列表
 */
export function salesmanShow(page, count, desc) {
  return request.get('/admin/salesmanShow?page=' + page + '&count=' + count + '&order=' + desc).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 礦機列表
 */
export function ConfigUrelist() {
  return request.get('/ConfigUre/list').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 理財項目列表
 */
export function financelist(page, count, desc) {
  return request.get('/finance/list?page=' + page + '&count=' + count + '&order=' + desc).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 通知列表
 */
export function noticeshow(code, page, count, desc) {
  return request.get('/notice/show?code=' + code + '&page=' + page + '&count=' + count + '&order=' + desc).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 刪除礦機
 */
export function miningdel(page) {
  return request.get('/mining/delete?id=' + page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 刪除通知
 */
export function noticedel(page) {
  return request.get('/notice/delete?id=' + page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 添加矿机
 */
export function addMiningn(page) {
  return request.post('mining/addMiningn', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 添加矿机
 */
export function teamshow(page) {
  return request.post('team/show', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 添加通知
 */
export function noticeAdd(page) {
  return request.post('notice/add', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 添加通知
 */
export function financedd(page) {
  return request.post('finance/add', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 添加業務員
 */
export function addSalesman(page) {
  return request.post('admin/addSalesman', page).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}
