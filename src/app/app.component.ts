import { AfterContentInit, Component, ContentChildren, HostListener, Input, QueryList } from '@angular/core';
import { ActiveDescendantKeyManager, Highlightable } from '@angular/cdk/a11y';
import { Article, NEWS } from './news';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list-item',
  styles: [`
    :host {
      display: block;
      margin: 1rem;
    }
  `],
  template: `
    <span>{{ article.title }}</span>
    <div @details *ngIf="active">
      {{ article.text }}
      <a [href]="article.link">Read More</a>
    </div>
  `,
  animations: [
    trigger('details', [

      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate3d(-100px, 0, 0)',
          height: 0,
        }),
        animate(300, style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          height: '60px',
        })),
      ]),

      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          height: '60px',
        }),
        animate(300, style({
          opacity: 0,
          transform: 'translate3d(-100px, 0, 0)',
          height: 0,
        })),
      ]),

    ]),
  ],
})
export class ListItem implements Highlightable {
  disabled: boolean;
  active = false;

  @Input() article: Article;

  getLabel(): string {
    return this.article.title;
  }

  setActiveStyles(): void {
    this.active = true;
  }

  setInactiveStyles(): void {
    this.active = false;
  }
}

@Component({
  selector: 'app-list',
  styles: [`
    :host {
      outline: none;
    }
  `],
  template: `
    <ng-content></ng-content>
  `,
  host: { 'tabindex': '1' },
})
export class List implements AfterContentInit {
  @ContentChildren(ListItem, { descendants: true }) items: QueryList<ListItem>;
  private keyManager: ActiveDescendantKeyManager<ListItem>;

  @HostListener('keydown', ['$event'])
  manage(event) {
    this.keyManager.onKeydown(event);
  }

  ngAfterContentInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();
  }
}

@Component({
  selector: 'app-root',
  template: `
    <app-list>
      <app-list-item *ngFor="let article of articles" [article]="article"></app-list-item>
    </app-list>
  `,
})
export class AppComponent {
  articles = NEWS;
}
