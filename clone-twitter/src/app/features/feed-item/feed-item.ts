import { Component, input } from '@angular/core';
import { LucideBadgeCheck, LucideCalendar, LucideChartSpline, LucideHeart, LucideImage, LucideImagePlay, LucideLaugh, LucideMessageCircle, LucideRepeat2, LucideWandSparkles } from '@lucide/angular';

@Component({
  selector: 'app-feed-item',
  imports: [LucideImage,LucideWandSparkles,
    LucideImagePlay,LucideChartSpline,LucideLaugh,LucideCalendar,LucideBadgeCheck,LucideMessageCircle,LucideRepeat2,LucideHeart],
  templateUrl: './feed-item.html',
  styleUrl: './feed-item.css',
})
export class FeedItem {
  title = input<string>();
  description = input<string>();
}
