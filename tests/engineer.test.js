const Engineer = require('../utils/engineersubclass')

const alex = new Engineer(
    "alex",
    "1990",
    "alex@2u.com",
    "alexarizona00"
)
// test the entire constructer
test('verify constructor takes values', () => {
    expect(alex.theirname).toBe('alex')
    expect(alex.id).toBe('1990')
    expect(alex.email).toBe('alex@2u.com')
    expect(alex.github).toBe('alexarizona00')
})  

//testing the methods

test("testing getRole method", () =>{
expect(alex.getRole()).toBe("Engineer")
})


test("testing getName method", () =>{
    expect(alex.getName()).toBe("alex")
})

test("testing getId method", () =>{
    expect(alex.getId()).toBe("1990")
})

test("testing getEmail method", () =>{
    expect(alex.getEmail()).toBe("alex@2u.com")
})


test("testing getHub method", () =>{
    expect(alex.getHub()).toBe("alexarizona00")
})