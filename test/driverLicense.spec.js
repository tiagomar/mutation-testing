const { canDrive } = require("../src/driverLicense")

describe ('Driver license', () => {
  it('should be available for people older than 18', () => {
    const isDriverCandidate = canDrive(20)

    expect(isDriverCandidate).toBe(true)
  })
})
