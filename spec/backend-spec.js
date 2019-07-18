import {PlanetConversion} from './../src/backend-code.js'
describe ('testing agemar', function(){

it('should convert age to desierd planet mars.',function(){
let ageMars = 28
let earth = 365
let mars = 687
let calc = new PlanetConversion(ageMars);

this.marsCalc = parseInt(ageMars * earth / mars);
expect(this.marsCalc).toEqual(14);

})

it('should convert age to desierd planet venus',function(){
let ageVenus = 28
let earth = 365
let venus = 225
let calc = new PlanetConversion(ageVenus);

this.venusCalc = parseInt(ageVenus * earth / venus);
expect(this.venusCalc).toEqual(45);

})

it('should convert age to desierd planet jupiter',function(){
let ageJupiter = 28
let earth = 365
let jupiter = 4300
let calc = new PlanetConversion(ageJupiter);

this.jupiterCalc = parseInt(ageJupiter * earth / jupiter);
expect(this.jupiterCalc).toEqual(2);

})

it('should convert age to desierd planet mercury',function(){
let ageMercury = 28
let earth = 365
let mercury = 88
let calc = new PlanetConversion(ageMercury);

this.mercuryCalc = parseInt(ageMercury * earth / mercury);
expect(this.mercuryCalc).toEqual(116);

})
it('should convert life expetancy for planet mars',function(){
let maleAge = 70
let marsYear = 1.88
let ageMars = 28
let calc = new PlanetConversion(ageMars);

this.marsMale = parseInt(maleAge / marsYear - ageMars);
expect(this.marsMale).toEqual(9);

})
it('should convert life expetancy for planet venus',function(){
let maleAge = 70
let venusYear = .62
let ageVenus = 28
let calc = new PlanetConversion(ageVenus);

this.venusMale = parseInt(maleAge / venusYear - ageVenus);
expect(this.venusMale).toEqual(84);

})
it('should convert life expetancy for planet jupiter',function(){
let maleAge = 70
let jupiterYear = 11.8
let ageJupiter = 28
let calc = new PlanetConversion(ageJupiter);

this.jupiterMale = parseInt(maleAge / jupiterYear - ageJupiter);
expect(this.jupiterMale).toEqual(-22);

})
it('should convert life expetancy for planet mercury',function(){
let maleAge = 70
let mercuryYear = .24
let ageMercury = 28
let calc = new PlanetConversion(ageMercury);

this.mercuryMale = parseInt(maleAge / mercuryYear - ageMercury);
expect(this.mercuryMale).toEqual(263);

})
})
