import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PlanetConversion} from './../src/backend-code.js'


$(document).ready(function(){
  $("form.planets").submit(function(event){
    event.preventDefault();
    $("#showage").text("");
    $("#showlifeM").text("");
    $("#showlifeF").text("");
    let ageMars = $("input#ageMars").val();
    let ageVenus =  $("input#ageVenus").val();
    let ageMercury =  $("input#ageMercury").val();
    let ageJupiter = $("input#ageJupiter").val();
    let gender = $("select#gender").val();

    let planetCon = new PlanetConversion(ageMars, ageVenus, ageMercury, ageJupiter);

    if (gender === "male") {
    planetCon.lifeExpectmale(ageMars, ageVenus, ageMercury, ageJupiter);
    $("#showlifeM").append(planetCon.marsMale  + "- On Mars if it was hospitable" + "<br>" + planetCon.venusMale + "- On Venus if it wasnt a giant ball of gas that is 400 plus degrees Celsius" + "<br>" + planetCon.mercuryMale + "- On Mercury If you didnt freeze instantly" + "<br>" + planetCon.jupiterMale + "- On Jupier if it wasnt a giant ball of gas and covered in super hurricanes all the time" + "<br>");
    }

    else if (gender === "female"){
    planetCon.lifeExpectfemale(ageMars, ageVenus, ageMercury, ageJupiter);
    $("#showlifeM").append(planetCon.marsFemale  + "- On Mars if it was hospitable" + "<br>" + planetCon.venusFemale + "- On Venus if it wasnt a giant ball of gas that is 400 plus degrees Celsius" + "<br>" + planetCon.mercuryFemale + "- On Mercury If you didnt freeze instantly" + "<br>" + planetCon.jupiterFemale + "- On Jupier if it wasnt a giant ball of gas and covered in super hurricanes all the time" + "<br>");
    }

    $("#showage").append(planetCon.marsCalc +  "- Year old Martian" + "<br>" + planetCon.venusCalc  + "- Year old Venusian" + "<br>" + planetCon.mercuryCalc + "- Year old Mercurial" + "<br>" + planetCon.jupiterCalc + "- Year old Jovian");
});

});
