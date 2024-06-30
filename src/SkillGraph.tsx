import d3 from "d3";
import data from "../test/testData.json";

const nodes = data.skillGroup.skills.map(skill=>({...skill}))

const svgContainer = d3.create("svg");