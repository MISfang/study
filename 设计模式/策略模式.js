const jobList = ['FE', 'BE']

const strategies = {
  checkRole(val) {
    return val === '掘金'
  },
  checkGrade(val) {
    return val >= 1
  },
  checkRole(val) {
    return jobList.indexOf(val) > 1
  },
  checkRole(val) {
    return val === '吃瓜群众'
  }
}