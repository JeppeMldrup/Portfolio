import { Component } from '@angular/core';
import { Link } from './link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  links: Link[] = [
    new Link('https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png', 'https://github.com/JeppeMldrup', 'GitHub'),
    new Link('https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png', 'https://www.linkedin.com/in/jeppe-m%C3%B8ldrup-8780b6169/', 'LinkedIn')
  ]
}
