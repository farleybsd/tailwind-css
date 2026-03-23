import { Component } from '@angular/core';
import { LucideHome,LucideHash,LucideBell,LucideMail, LucideBookmark, LucideList, LucideUser, LucideCircleEllipsis, LucideEllipse } from '@lucide/angular';
import { Button } from '../../Components/button/button';

@Component({
  selector: 'app-sidebar-left',
  imports: [LucideHome, LucideHash, LucideBell, LucideMail,LucideBookmark,LucideList,LucideUser,LucideCircleEllipsis,Button,LucideEllipse],
  templateUrl: './sidebar-left.html',
  styleUrl: './sidebar-left.css',
})
export class SidebarLeft {}
