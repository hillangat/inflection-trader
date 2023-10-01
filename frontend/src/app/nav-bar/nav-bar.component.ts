import { Component } from '@angular/core';
import { Navigation } from '../common/utils/types-interfaces';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  public navigations: Navigation[] = [
    {location: '/home', 'label': 'Home'},
    {location: '/subscriptions', 'label': 'Subscriptions'},
    {location: '/profile', 'label': 'Profile'}
  ]

}
