import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './component/datos-personales/datos-personales.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { ExpLaboralComponent } from './component/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    CabeceraComponent,
    SobreMiComponent,
    ExpLaboralComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
