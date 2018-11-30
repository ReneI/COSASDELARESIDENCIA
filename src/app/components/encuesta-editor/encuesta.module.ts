import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SurveyEditorComponent } from './encuesta-editor.component';
import { EncuestaComponent } from './encuesta.component';

@NgModule({
  declarations: [
    EncuestaComponent,
    SurveyEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    EncuestaComponent,
    SurveyEditorComponent
  ]
})
export class EncuestaModule { }
