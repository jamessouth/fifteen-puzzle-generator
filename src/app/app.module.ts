import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FormComponent } from './home/form/form.component';
import { LanguageSelectComponent } from './home/language-select/language-select.component';
import { CodeComponent } from './home/code/code.component';
import { FooterComponent } from './home/footer/footer.component';
import { DemoComponent } from './demo/demo.component';
import { DropdownComponent } from './home/form/dropdown/dropdown.component';
import { CodeHtmlComponent } from './home/code/code-html/code-html.component';
import { CodeCssComponent } from './home/code/code-css/code-css.component';
import { CodeJsComponent } from './home/code/code-js/code-js.component';
import { CodeCssHelperImageComponent } from './home/code/code-css-helper-image/code-css-helper-image.component';
import { CodeHtmlHelperImageComponent } from './home/code/code-html-helper-image/code-html-helper-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    LanguageSelectComponent,
    CodeComponent,
    FooterComponent,
    DemoComponent,
    DropdownComponent,
    CodeHtmlComponent,
    CodeCssComponent,
    CodeJsComponent,
    CodeCssHelperImageComponent,
    CodeHtmlHelperImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
