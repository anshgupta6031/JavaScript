//  Make a composition function fog(x), where f(x) = x*x and g(x) = x*2.
//  Use case of Higher Order Function...


const f = (num) => num * num

const g = (num) => num * 2


const compose = (func1, func2) => value => func1(func2(value))

const fog = compose(f, g)

console.log(fog(3))





















