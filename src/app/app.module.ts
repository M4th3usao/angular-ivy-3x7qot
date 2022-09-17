import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatheusheaderComponent } from './matheusheadercomponent/matheusheader/matheusheader.component';
import { MatheustimerComponent } from './matheustimercomponent/matheustimer/matheustimer.component';
import { MatheussimplescomponentComponent } from './matheussimplescomponent/matheussimplescomponent/matheussimplescomponent.component';
import { MatheuscompoundinterestsComponent } from './matheuscompoundinterestcomponent/matheuscompoundinterests/matheuscompoundinterests.component';
import { MatheusrandomComponent } from './matheusrandomnumberscomponent/matheusrandom/matheusrandom.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MatheusheaderComponent,
    MatheustimerComponent,
    MatheussimplescomponentComponent,
    MatheuscompoundinterestsComponent,
    MatheusrandomComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
