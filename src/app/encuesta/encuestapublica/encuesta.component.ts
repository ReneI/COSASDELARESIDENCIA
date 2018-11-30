import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaPublicaComponent implements OnInit {
  
  name = 'SurveyJS and Angular 5';

  hola(){
  
}
  constructor(private router: Router) {     console.log('paginaencuesta');
}

  ngOnInit() {
  }

  title = "app works!";

 json2 = {
    locale: "es",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "radiogroup",
        name: "question6",
        choices: [
         "item1",
         "item2",
         "item3"
        ]
       },
       {
        type: "rating",
        name: "question1",
        title: "Como fue el trato del personal que lo atendió?",
        isRequired: true
       },
       {
        type: "comment",
        name: "question3",
        title: "¿Porque?"
       }
      ]
     },
     {
      name: "page2",
      elements: [
       {
        type: "panel",
        name: "panel1",
        elements: [
         {
          type: "radiogroup",
          name: "question4",
          startWithNewLine: false,
          title: "Las visitas durante el proceso, por parte del personal de SACI fiueron en tiempo y forma",
          isRequired: true,
          choices: [
           {
            value: "item1",
            text: "Si"
           },
           {
            value: "item2",
            text: "No"
           }
          ],
          choicesOrder: "desc"
         },
         {
          type: "comment",
          name: "question5",
          title: "¿Porque?"
         }
        ],
        title: "Evaluation del Servicio "
       }
      ]
     }
    ],
    maxTimeToFinish: -1
   }

  
  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            inputMask: "phone",
            popupdescription: "Some text"
          },
          {
            type: "barrating",
            name: "barrating",
            ratingTheme: "css-stars",
            choices: [1, 2, 3, 4, 5]
          },
          {
            type: "bootstrapslider",
            name: "bootstrapslider"
          },
          {
            type: "radiogroup",
            name: "prettycheckbox",
            renderAs: "prettycheckbox",
            choices: ["One", "Two", "Three"]
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you have arrived from:"
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "Please enter your signature"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "Life Priorities ",
            isRequired: true,
            colCount: 0,
            choices: ["family", "work", "pets", "travels", "games"]
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Your favorite date:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          }
        ]
      },
      {
        questions: [
          {
            type: "matrix",
            name: "Quality",
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable"
              },
              {
                value: "does what it claims",
                text: "Product does what it claims"
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market"
              },
              {
                value: "easy to use",
                text: "Product is easy to use"
              }
            ]
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "How satisfied are you with the Product?",
            mininumRateDescription: "Not Satisfied",
            maximumRateDescription: "Completely satisfied"
          },
          {
            type: "rating",
            name: "recommend friends",
            visibleIf: "{satisfaction} > 3",
            title:
              "How likely are you to recommend the Product to a friend or co-worker?",
            mininumRateDescription: "Will not recommend",
            maximumRateDescription: "I will recommend"
          },
          {
            type: "comment",
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: [
              "Less expensive",
              "Priced about the same",
              "More expensive",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            title: "Do you feel our current price is merited by our product?",
            choices: [
              "correct|Yes, the price is about right",
              "low|No, the price is too low for your product",
              "high|No, the price is too high for your product"
            ]
          },
          {
            type: "multipletext",
            name: "pricelimit",
            title: "What is the... ",
            items: [
              {
                name: "mostamount",
                title: "Most amount you would every pay for a product like ours"
              },
              {
                name: "leastamount",
                title: "The least amount you would feel comfortable paying"
              }
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      }
    ]
  };

}
