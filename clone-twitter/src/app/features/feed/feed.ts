import { Component, input } from '@angular/core';
import { LucideImage, LucideWandSparkles } from '@lucide/angular';
import { FeedItem } from '../feed-item/feed-item';

@Component({
  selector: 'app-feed',
  imports: [LucideImage,LucideWandSparkles,FeedItem],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {

}
