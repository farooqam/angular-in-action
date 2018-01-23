import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor(
    private forumsService: ForumsService,
    private router: Router,
    private route: ActivatedRoute) {

     }

  ngOnInit() {
    this.route.params.subscribe((p: Params) => {
        this.forum = this.forumsService.forum(p['forum_alias']);

        if(!this.forum){
          this.router.navigate(['/not-found']);
        }
    });
  }

}
