import {PlanetConversion} from './../src/backend-code.js'
describe ('testing agemar', function(){

it('should convert age to desierd planet',function(){
let ageMars = 28
let earth = 365
let mars = 687
let calc = new PlanetConversion(ageMars);

this.marsCalc = parseInt(ageMars * earth / mars)

expect(this.marsCalc).toEqual(14)

})
})
