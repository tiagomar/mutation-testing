const { canDrive } = require("../src/driverLicense")

describe ('Driver license', () => {
  it('should be available for people older than 18', () => {
    expect(canDrive(20)).toBe(true)
  })
})
