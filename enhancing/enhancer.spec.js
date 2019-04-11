const enhancer = require('./enhancer.js');
// test away!

const knife = {
    name: 'Knife',
    enhancement: 5,
    durability: 10
}
// const expected = 
describe('the enhancer module', () => {
    describe('the succeed function', () => {
        it('should return an item with all properties set to max', () => {
            expect(enhancer.succeed(knife)).toEqual({
                name: knife.name,
                enhancement: knife.enhancement + 1,
                durability: knife.durability
            })
        })
    })
})


// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
const shield1 = {
    name: 'Shield',
    enhancement: 14,
    durability: 5
}
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
const shield2 = {
    name: 'Shield',
    enhancement: 15,
    durability: 20
}
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).


describe('the enhancer module', () => {
    describe('the succeed function', () => {
        it('should return an item with enhacement changed based on durability', () => {
            expect(enhancer.fail(shield1)).toEqual({
                name: shield1.name,
                enhancement: shield1.enhancement,
                durability: 0
            })
        })
        it('should return an item with enhacement changed based on durability', () => {
            expect(enhancer.fail(shield2)).toEqual({
                name: shield2.name,
                enhancement: shield2.enhancement,
                durability: 10
            })
        })
    })
})
