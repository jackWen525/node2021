import { sum, mul, sub, div ,objectFactory} from './index'

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})

test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1)
})

test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0)
})

test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1)
})
function Person(name,age){
    this.name = name;
    this.age = age
}
test('检测对象{name:"laoWan",age:38}', () => {
    expect(objectFactory(Person, "laoWan",38)).toEqual({name:"laoWan",age:38})
  })