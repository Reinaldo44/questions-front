import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FlooterComponent } from "./flooter/flooter.component";
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FlooterComponent, MatCardModule]
})
export class AppComponent {

  title = 'question-frontend';

}
