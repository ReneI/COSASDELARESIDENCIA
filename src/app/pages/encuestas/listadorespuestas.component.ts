import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-listadorespuestas',
  templateUrl: './listadorespuestas.component.html',
  styleUrls: ['./listadorespuestas.component.css']
})
export class ListadorespuestasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/* 

  var surveyJSONFromDB = {

    "pages": [{
      "questions":
        [{ "type": "matrix", "name": "Quality", "title": "Please indicate if you agree or disagree with the following statements", "columns": [{ "value": 1, "text": "Strongly Disagree" }, { "value": 2, "text": "Disagree" }, { "value": 3, "text": "Neutral" }, { "value": 4, "text": "Agree" }, { "value": 5, "text": "Strongly Agree" }], "rows": [{ "value": "affordable", "text": "Product is affordable" }, { "value": "does what it claims", "text": "Product does what it claims" }, { "value": "better then others", "text": "Product is better than other products on the market" }, { "value": "easy to use", "text": "Product is easy to use" }] }]
    }, { "questions": [{ "type": "rating", "name": "satisfaction", "title": "How satisfied are you with the Product?", "mininumRateDescription": "Not Satisfied", "maximumRateDescription": "Completely satisfied" }, { "type": "rating", "name": "recommend friends", "visibleIf": "{satisfaction} > 3", "title": "How likely are you to recommend the Product to a friend or co-worker?", "mininumRateDescription": "Will not recommend", "maximumRateDescription": "I will recommend" }, { "type": "comment", "name": "suggestions", "title": "What would make you more satisfied with the Product?" }] }, { "questions": [{ "type": "radiogroup", "name": "price to competitors", "title": "Compared to our competitors, do you feel the Product is", "choices": ["Less expensive", "Priced about the same", "More expensive", "Not sure"] }, { "type": "radiogroup", "name": "price", "title": "Do you feel our current price is merited by our product?", "choices": ["correct|Yes, the price is about right", "low|No, the price is too low for your product", "high|No, the price is too high for your product"] }, { "type": "multipletext", "name": "pricelimit", "title": "What is the... ", "items": [{ "name": "mostamount", "title": "Most amount you would every pay for a product like ours" }, { "name": "leastamount", "title": "The least amount you would feel comfortable paying" }] }] }]

  };
  
  
  
  
  
  var surveyResultsDataFromDB = [
  { name: "Mark Otto", company: "Company One, Inc.", postedAt: "Jan 25, 2018, 10:12 am", results: '{"Quality":{"affordable":"3","does what it claims":"4","better then others":"3","easy to use":"5"},"satisfaction":"4","recommend friends":"4","suggestions":"24/7 support would help a lot.","price to competitors":"Not sure","price":"correct","pricelimit":{"mostamount":"450","leastamount":"200"}}' },
  { name: "Jacob Thornton", company: "Unlimited, Inc.", postedAt: "Jan 25, 2018, 10:25 am", results: '{"Quality": {"affordable": "3", "does what it claims": "5","better then others": "4","easy to use": "4"},"satisfaction": "3","recommend friends": "3","suggestions": "Phone support.","price to competitors": "More expensive", "price": "high", "pricelimit": {"mostamount": "400", "leastamount": "180" }}' },
  { name: "Larry Bird", company: "Beyond the Mind, Inc.", postedAt: "Jan 25, 2018, 01:32 pm", results: '{ "Quality": {"affordable": "3", "does what it claims": "5","better then others": "4","easy to use": "3"},"satisfaction": "4","recommend friends": "5","suggestions": "Could you please reduce a price a little bit?","price to competitors": "More expensive", "price": "high", "pricelimit": {"mostamount": "420", "leastamount": "210" }}' }];

function surveyResultModel(id, name, company, postedAt, results) {
  var self = this;
  self.id = id;
  self.name = name;
  self.company = company;
  self.postedAt = postedAt;
  self.results = results;
  self.jsonResultsValue = null;
  self.getJsonResults = function () {
    if (!self.jsonResultsValue && self.results) {
      self.jsonResultsValue = JSON.parse(self.results);
    }
    return self.jsonResultsValue;
  }
}
function surveyResultsModel(data) {
  var self = this;
  var items = [];
  if (data) {
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      items.push(new surveyResultModel(i + 1, item.name, item.company, item.postedAt, item.results));
    }
  }
  self.koItems = ko.observableArray(items);
  self.showSurveyResult = function (item) {
    survey.clear();
    survey.data = item.getJsonResults();
    document.getElementById("surveyResultModalTitle").innerHTML = "Show result for: " + item.name;
    $("#surveyResultModal").modal();
  }
}
ko.applyBindings(new surveyResultsModel(surveyResultsDataFromDB), document.getElementById("resultsTable"));

Survey.Survey.cssType = "bootstrap";
var json = JSON.parse(surveyJSONFromDB);
var survey = new Survey.Model(json);
survey.mode = 'display';
survey.render("surveyElement");
 */
}
