const assert = require('assert')

const passwordClient = (password) => {
    if (password === undefined) {
        return false
    } else if(password.length <= 8) {
        return false 
    }else if(!/[A-Z]/.test(password)){
        return false
    } else if(!/[a-z]/.test(password)) {
        return false
    }else if(!/[0-9]/.test(password)) {
        return false
    }
    return true

}

const teste1 = 'ALEXANDRE123' 
const teste2 = 'luTE12'
const teste3 = 'PApaLA4561'
const teste4 = 'amanhaaA2'
const teste5 = '123456789'
assert.strictEqual(passwordClient(teste1), false)
assert.notStrictEqual(passwordClient(teste2), true)
assert.strictEqual(passwordClient(teste3), true)
assert.strictEqual(passwordClient(teste4), true)
assert.strictEqual(passwordClient(teste5), false)

