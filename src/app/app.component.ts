import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Pagina Inicial',
          },
          {
              label: 'Cadastro',
              icon: '',
              items: [
                  {label: 'Cadastro de Cliente', icon: ''},
                  {label: 'Cadastro de Categoria', icon: ''},
                  {label: 'Cadastro de Produto ', icon: ''},
              ]
          }
      ];
  }
}