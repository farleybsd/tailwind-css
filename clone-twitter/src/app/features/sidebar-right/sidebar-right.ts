import { Component } from '@angular/core';
import { LucideBadge, LucideBadgeCheck, LucideMoreHorizontal, LucideSearch, LucideSettings } from '@lucide/angular';

@Component({
  selector: 'app-sidebar-right',
  imports: [LucideSearch,LucideSettings,LucideMoreHorizontal,LucideBadgeCheck],
  templateUrl: './sidebar-right.html',
  styleUrl: './sidebar-right.css',
})
export class SidebarRight {}
