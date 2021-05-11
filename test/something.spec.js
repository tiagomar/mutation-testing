const { isDone } = require("../src/something")

describe ('Something', () => {
  it('should be done', () => {
    expect(isDone()).toBe(true)
  })
})
