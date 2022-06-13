import request from '@/utils/request'

/**
 * 登录
 */
export function userlogin(page) {
  return request.post('/userlogin', page).then(response => {
    if (response.status == 1 || response.status == 6) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 提交充值金额
 */
export function amount(page) {
  return request.get('/recharge/amount?amount='+ page).then(response => {
    return Promise.resolve([true, response])
  })
}

/**
 * 注册
 */
export function userregister(username, password, code) {
  return request.get('/userregister?username=' + username + '&password=' + password + '&code=' + code).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 配置获取
 */
export function configShow(code) {
  return request.get('/config/show?code=' + code).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 升级矿机
 */
export function upgrade(grade) {
  return request.get('/Mining/upgrade?grade=' + grade).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 安全中心
 */
export function Security(data) {
  return request.post('/User/Security', data).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 支付地址
 */
export function Payment(data) {
  return request.post('/User/Payment', data).then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 资金列表
 */
export function getassets() {
  return request.post('/assets').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 获取可提现金额
 */
export function withdraw() {
  return request.get('user/withdraw').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.msg, response.code])
    }
  })
}

/**
 * 资金列表
 */
export function totalassets() {
  return request.post('/totalassets').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 提交可提现金额
 */
export function SubmitWithdraw(data) {
  return request.post('/user/SubmitWithdraw', data).then(response => {
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
export function accessRecords(code, count, page) {
  return request.get('/accessRecords?code=' + code + '&count=' + count + '&page=' + page + '&order=desc').then(response => {
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
export function UserList(code, count, page) {
  return request.get('/Team/UserList?code=' + code + '&count=' + count + '&page=' + page + '&order=desc').then(response => {
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
export function YesterdayList(code, count, page) {
  return request.get('/Team/YesterdayList?code=' + code + '&count=' + count + '&page=' + page + '&order=desc').then(response => {
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
export function billrecord(code, count, page) {
  return request.get('/bill/record?code=' + code + '&count=' + count + '&page=' + page + '&order=desc').then(response => {
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
export function userminer() {
  return request.post('/user/miner').then(response => {
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
export function AddMiningIncome() {
  return request.get('/Mining/AddMiningIncome').then(response => {
    if (response.code) {
      return Promise.resolve([true, response])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}

/**
 * 资金列表
 */
export function minerlist() {
  return request.post('/minerlist').then(response => {
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
export function indexTeam() {
  return request.get('/Team/index').then(response => {
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
export function getDetails() {
  return request.post('/Mining/Details').then(response => {
    if (response.code == 200) {
      return Promise.resolve([true, response.data])
    } else {
      return Promise.resolve([response.message, response.code])
    }
  })
}
