import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {

  contentArray: Content[];
  constructor() {
    this.contentArray = [{
      id: 1,
      title: 'mySampleTitle1',
      description: 'This is a description1',
      creator: 'Creator1',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 2,
      title: 'mySampleTitle2',
      description: 'This is a description2',
      creator: 'Creator2',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 3,
      title: 'mySampleTitle3',
      description: 'This is a description3',
      creator: 'Creator3',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 4,
      title: 'mySampleTitle4',
      description: 'This is a description4',
      creator: 'Creator4',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 5,
      title: 'mySampleTitle5',
      description: 'This is a description5',
      creator: 'Creator5',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    },
    {
      id: 6,
      title: 'mySampleTitle6',
      description: 'This is a description6',
      creator: 'Creator6',
      imgURL: 'https://justin-biber-babysong.com',
      type: 'rock music',
      tags: ['Tag 1.1', 'Tag 1.2']
    }
    ];
  }


  /*
  myContentList: ContentList = new ContentList();

  contentItem1: Content = {
    id: 0,
    title: 'mySampleTitle',
    description: 'This is a description',
    creator: 'Creator'
  }
  contentItem2: Content = {
    id: 0,
    title: 'mySampleTitle2',
    description: 'This is a description2',
    creator: 'Creator2'
  }
  contentItem3: Content = {
    id: 0,
    title: 'mySampleTitle3',
    description: 'This is a description3',
    creator: 'Creator2'
  }
  contentItem4: Content = {
    id: 0,
    title: 'mySampleTitle4',
    description: 'This is a description4',
    creator: 'Creator'
  }
  contentItem5: Content = {
    id: 0,
    title: 'mySampleTitle5',
    description: 'This is a description5',
    creator: 'Creator'
  }
  contentItem6: Content = {
    id: 0,
    title: 'mySampleTitle6',
    description: 'This is a description6',
    creator: 'Creator'
  }
  contentItem7: Content = {
    id: 0,
    title: 'mySampleTitle7',
    description: 'This is a description7',
    creator: 'Creator'
  }
  */
}
