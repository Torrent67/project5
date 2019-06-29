const earth = 365;
const mars = 687;
const venus = 225;
const mercury = 88;
const jupiter = 4300;
const maleAge = 70;
const femaleAge = 75;
const marsYear = 1.88;
const venusYear = .62;
const mercuryYear = .24;
const jupiterYear = 11.8;

export class PlanetConversion{

  constructor(ageMars, ageVenus, ageMercury, ageJupiter){
    this.marsCalc = parseInt(ageMars * earth / mars);
    this.venusCalc = parseInt(ageVenus * earth / venus);
    this.mercuryCalc = parseInt(ageMercury * earth / mercury);
    this.jupiterCalc = parseInt(ageJupiter * earth / jupiter);
}
  lifeExpectmale(ageMars, ageVenus, ageMercury, ageJupiter){
    this.marsMale = parseInt(maleAge / marsYear - ageMars);
    this.venusMale = parseInt(maleAge / venusYear - ageVenus);
    this.mercuryMale = parseInt(maleAge / mercuryYear - ageMercury);
    this.jupiterMale = parseInt(maleAge / jupiterYear - ageJupiter);
  }

  lifeExpectfemale(ageMars, ageVenus, ageMercury, ageJupiter){
    this.marsFemale = parseInt(femaleAge / marsYear - ageMars);
    this.venusFemale = parseInt(femaleAge / venusYear - ageVenus);
    this.mercuryFemale = parseInt(femaleAge / mercuryYear - ageMercury);
    this.jupiterFemale= parseInt(femaleAge / jupiterYear - ageJupiter);
  }
}
