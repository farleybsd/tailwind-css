import { Component, signal } from '@angular/core';
import { SidebarLeft } from './features/sidebar-left/sidebar-left';
import { Feed } from './features/feed/feed';
import { SidebarRight } from './features/sidebar-right/sidebar-right';

@Component({
  selector: 'app-root',
  imports: [SidebarLeft,Feed,SidebarRight],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clone-twitter');
}
