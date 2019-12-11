import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../../core/services/page-header.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private pageHeaderService: PageHeaderService) { }

    ngOnInit() {
        this.pageHeaderService.update({
            title: 'Home',
            description: 'This is my home'
        });
    }

    onPageHeaderChange() {
        this.pageHeaderService.update({
            title: 'Only title now..',
        });
    }
}
