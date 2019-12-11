import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/core/services/page-header.service';

@Component({
    templateUrl: './module1.component.html'
})
export class Module1Component implements OnInit {
    constructor(private pageHeaderService: PageHeaderService) { }

    ngOnInit() {
        this.pageHeaderService.update({
            title: 'Module 1',
            description: 'This is module 1 page'
        });
    }
}
