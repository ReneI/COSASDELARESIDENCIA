import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Encuesta} from '../../services/encuesta/encuesta.service';
import { EncuestaModel} from '../../models/encuesta.model';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaPublicaComponent implements OnInit {
  
  name = 'Encuesta con angular 5';

  hola(){
  
}
  constructor(private encuesta: Encuesta, private router: Router) {
    
    console.log('paginaencuesta');
}

  ngOnInit() {
  }


  guardar(encuesta) {
    let enc = new EncuestaModel( encuesta);
   console.log(enc);
   this.encuesta.registrar(enc).subscribe();

}


  title = "encuesta ";
json3={
  locale: "es",
  pages: [
   {
    name: "page1",
    elements: [
     {
      type: "text",
      name: "question1",
      title: {
       es: "Nombre de su negocio"
      },
      isRequired: true
     },
     {
      type: "radiogroup",
      name: "question2",
      renderAs: "prettycheckbox",

      title: {
       es: "Como conocio nuestra empresa"
      },
      isRequired: true,
      choices: [
       {
        value: "item1",
        text: {
         es: "Recomendacion"
        }
       },
       {
        value: "item2",
        text: {
         es: "publicidad"
        }
       },
       {
        value: "item3",
        text: {
         es: "Por medio de protección civil  Municipal"
        }
       },
       {
        value: "item4",
        text: {
         es: "Por medio de protección civil  Estatal"
        }
       },
       {
        value: "item5",
        text: {
         es: "Otro"
        }
       }
      ]
     },
     {
      type: "radiogroup",
      name: "question3",
      renderAs: "prettycheckbox",
      "colCount": 4,


      title: {
       es: "Para qué utiliza los Servicios de Asesoria y Consultoria Industrial "
      },
      isRequired: true,
      choices: [
       {
        value: "item1",
        text: {
         es: "Para solucionar problemas legales"
        }
       },
       {
        value: "item2",
        text: {
         es: "Cumplir con la normatividad que corresponde"
        }
       },
       {
        value: "item3",
        text: {
         es: "Introducir mejoras a la empresa"
        }
       }
      ]
     },
     {
      type: "rating",
      name: "question4",
      title: {
       es: "Como fue el trato del personal que lo atendió?"
      },
      isRequired: true,
      minRateDescription: {
       es: "Malo"
      },
      maxRateDescription: {
       es: "Excelente"
      }
     },
     {
      type: "comment",
      name: "question5",
      visibleIf: "{question4} < 4",
      title: {
       es: "Porqué "
      }
     }
    ]
   },
   {
    name: "page2",
    elements: [
     {
      type: "radiogroup",
      name: "question6",
      renderAs: "prettycheckbox",

      title: {
       es: "Las visitas durante el proceso, por parte del personal de saci, fueron en tiempo y forma"
      },
      isRequired: true,
      choices: [
       {
        value: "item1",
        text: {
         es: "Si"
        }
       },
       {
        value: "item2",
        text: {
         es: "No"
        }
       }
      ]
     },
     {
      type: "comment",
      name: "question7",
      title: {
       es: "Porqué "
      }
     },
     {
      type: "radiogroup",
      name: "question8",
      renderAs: "prettycheckbox",

      title: {
       es: "Se realizó una inspección de sus instalaciones de forma adecuada"
      },
      isRequired: true,
      choices: [
       {
        value: "item1",
        text: {
         es: "Si"
        }
       },
       {
        value: "item2",
        text: {
         es: "No"
        }
       }
      ]
     },
     {
      type: "comment",
      name: "question9",
      visibleIf: "{question8} = \"item2\"",
      title: {
       es: "Porqué "
      }
     }
    ]
   },
   {
    name: "page3",
    elements: [
     {
      type: "rating",
      name: "question10",
      title: {
       es: "Cual es su opinión de las capacitaciones impartidas?"
      },
      isRequired: true,
      minRateDescription: {
       es: "No fueron de mi agrado"
      },
      maxRateDescription: {
       es: "Excelentes "
      }
     },
     {
      type: "rating",
      name: "question11",
      title: {
       es: "Fue de su agrado el soporte documental entregado, del servicio contratado"
      },
      isRequired: true,
      minRateDescription: {
       es: "Mal trabajo"
      },
      maxRateDescription: {
       es: "Excelente trabajo"
      }
     },
     {
      type: "radiogroup",
      name: "question12",
      renderAs: "prettycheckbox",

      title: {
       es: "Usted recomendaría los servicios de nuestra empresa"
      },
      isRequired: true,
      choices: [
       {
        value: "item1",
        text: {
         es: "Si"
        }
       },
       {
        value: "item2",
        text: {
         es: "No"
        }
       }
      ]
     },
     {
      type: "comment",
      name: "question13",
      visibleIf: "{question12} = [\"item2\"]",
      title: {
       es: "Porqué "
      }
     }
    ]
   },
   {
    name: "page4",
    elements: [
     {
      type: "radiogroup",
      renderAs: "prettycheckbox",

      name: "question14",
      title: {
       es: "Contrataria de nuevo nuestros servicios"
      },
      isRequired: true,
      choices: [
       {
        value: "item1",
        text: {
         es: "Si"
        }
       },
       {
        value: "item2",
        text: {
         es: "No"
        }
       }
      ]
     },
     {
      type: "comment",
      name: "question15",
      visibleIf: "{question12} = [\"item2\"]",
      title: {
       es: "Porqué "
      }
     },
     {
      type: "comment",
      name: "question16",
      title: {
       es: "Sugerencias"
      }
     }
    ]
   }
  ]
 ,    completedHtml: "<p><h4>Gracias</h4></p><p>Por favor visitenos nuevamente</p>"

}
   json4 = {
    locale:"es",
    title: "SACI",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            name: "p1",
            title: "Nombre de su negocio"
          },
          { type: "radiogroup",
          name: "p2",
          renderAs: "prettycheckbox",
          choices: ["Recomendacion", "Publicidad", "Por medio de protección civil  Municipal", "Por medio de protección civil  Estatal"]
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
            name: "price",
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
