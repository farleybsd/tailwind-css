import { Component, signal } from '@angular/core';
import { SidebarLeft } from './features/sidebar-left/sidebar-left';
import { Feed } from './features/feed/feed';

@Component({
  selector: 'app-root',
  imports: [SidebarLeft,Feed],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clone-twitter');
}
