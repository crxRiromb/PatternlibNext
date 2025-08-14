import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild, computed, effect } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PatternlibAngularCommonModule, PatternlibAngularFormsModule } from '@liebherr/patternlib-angular';
import { ToastItem } from '@liebherr/patternlib/dist/types/components';
import { PatternlibToast } from '@liebherr/patternlib/dist/types/components/toast/patternlib-toast-main/patternlib-toast';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { notificationMockData, basketMockData, applauncherMockData, languageMockData } from './data';
import { AnonymousUserAvatar, MainNavigationItem, UserAvatar } from './models';
import { FooterService, ToastService, ToastType } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, TranslocoModule, PatternlibAngularCommonModule, PatternlibAngularFormsModule],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly onDestroy: Subject<void> = new Subject(); // Cleanup

  /**
   * Toast
   * Hint 1: when 'static: false' is used
   *  - @ViewChild is resolved only after the initialization of the DOM.
   *  - Access is only possible in ngAfterViewInit() and later, not in ngOnInit().
   *  - A web component is only available after rendering in the DOM, so we need to use 'static: false'
   * Hint 2: Give TypeScript a hint about the value of the ElementRef
   *  - TypeScript can't know if the value is null or not.
   *  - Use the Non-null Assertion Operator '!' to tell TypeScript that the value will be not null
   */
  @ViewChild('toastElementRef', { static: false }) toastElement!: PatternlibToast;

  /**
   * Signals
   * - The Signal event is managed by using a service (footer-service.ts), because services can be easily injected into components.
   * - The Service wrapps the signal for easy access.
   * - Using a effect in the constructor to get the current value and call the content size update function.
   */
  public footerModeFixedSignal = computed(() => this.footerService.footerModeFixedSignal());

  // General
  public appTitle = 'Angular Template';
  public currLang = 'en';

  // Footer
  public footerFixed = false;

  // Language
  public translationInitialized = false;
  public languageData = languageMockData;

  // Data
  public notificationData = notificationMockData;
  public basketData = basketMockData;
  public applauncherData = applauncherMockData;

  // Menu, Routes
  public currentRoute = '';
  public lazyFooterLinks: any[] = [];
  public mainNavigationItems: MainNavigationItem[] = [
    { id: 'navid_home', route: '/home', label: 'app.main-menu.home', show: true },
    { id: 'navid_footer', route: '/footer', label: 'app.main-menu.footer', show: true },
    { id: 'navid_pl4integration', route: '/pl4integration', label: 'app.main-menu.pl4integration', show: true },
  ];

  // Footer
  private lastRelevantFooterHeight = 0;

  // User
  public showAvatarFlyout = false;
  public userAvatar: UserAvatar = new AnonymousUserAvatar();

  // Language
  private currLangInitialized = false;

  constructor(
    private renderer2: Renderer2,
    private router: Router,
    private toastService: ToastService,
    private translocoService: TranslocoService,
    private footerService: FooterService
  ) {
    effect(() => {
      this.footerFixed = this.footerModeFixedSignal();
      this.updateAppContentSize(this.lastRelevantFooterHeight);
    });
  }

  public ngOnInit(): void {
    // Example to handel toast close events
    this.toastService.closeEventObserver
      .pipe(takeUntil(this.onDestroy))
      .subscribe((itemId: string) => console.log('Toast closed:', itemId));

    // Example to handel toast undo events
    this.toastService.undoEventObserver
      .pipe(takeUntil(this.onDestroy))
      .subscribe((itemId: string) => console.log('Toast undo:', itemId));

    // Example to publish toast messages
    this.toastService.messageObserver
      .pipe(takeUntil(this.onDestroy))
      .subscribe((messages: ToastItem) => this.createToasts(messages));

    // Reflect current route state to main menu
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => (e as NavigationEnd).url),
        takeUntil(this.onDestroy)
      )
      .subscribe((url: string) => {
        this.currentRoute = url;
      });

    // Translation of footer links
    this.translocoService.langChanges$.pipe(takeUntil(this.onDestroy)).subscribe(() => {
      this.translocoService
        .selectTranslate(['app.footer-imprint', 'app.footer-privacy-policy', 'app.footer-terms-of-use'])
        .subscribe(([imprint, privacy, terms]) => {
          this.lazyFooterLinks = [
            {
              itemId: 'imprint',
              label: imprint,
              to: 'https://go.liebherr.com/81duXN',
              target: '_blank',
            },
            {
              itemId: 'privacy-policy',
              label: privacy,
              to: 'https://go.liebherr.com/4A6w7G',
              target: '_blank',
            },
            {
              itemId: 'terms-of-use',
              label: terms,
              to: 'https://go.liebherr.com/bkr321',
              target: '_blank',
            },
          ];
          this.translationInitialized = true;
        });
    });
  }

  public ngAfterViewInit(): void {
    // Sanity check
    if (!this.toastElement) {
      console.warn('patternlib-toast element not found, this should not happen');
    }
  }

  public ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  public handleLogoClick() {
    window.open('https://mytst.liebherr.com', '_blank', 'noopener noreferrer');
  }

  public handleInfoClick(): void {
    console.log('Header: on info icon click');
  }

  public handleSearchClick(): void {
    console.log('Header: on search icon click');
  }

  public handleLanguageChange(event: any): void {
    const _newLanguage = event.detail.selected;
    this.translocoService.setActiveLang(_newLanguage);
    document.documentElement.setAttribute('lang', _newLanguage);

    this.currLang = _newLanguage;

    if (!this.currLangInitialized) {
      this.currLangInitialized = true;
      return;
    }

    // Show toast by using a builder instance
    // Hint: The position of the toast is defined in the HTML template
    const _builderInstance = this.toastService.getBuilderInstance(ToastType.Default, 'Language changed', _newLanguage);
    _builderInstance.setShowIcon(false);
    this.toastService.publishBuilderInstance(_builderInstance);
  }

  public handleToggleAvatarFlyout(): void {
    this.showAvatarFlyout = !this.showAvatarFlyout;
  }

  public handleFooterLinkClick(e: CustomEvent<{ itemId: string | number }>) {
    const item = this.lazyFooterLinks.find((item) => item.itemId === e.detail.itemId);
    if (item) window.open(item.to, '_blank', 'noopener noreferrer');
  }

  public handleArrowTopClick(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private createToasts(toastItem: ToastItem): void {
    if (!toastItem || !this.toastElement) return;
    this.toastElement.createToastItem(toastItem);
  }

  public handleFooterResizeEvent(event: any): void {
    this.updateAppContentSize(event.h);
  }

  public handleToastCloseEvent(event: any): void {
    this.toastService.closeEventSource.next(event.detail.itemId);
  }

  public handleToastUndoEvent(event: any): void {
    this.toastService.undoEventSource.next(event.detail.itemId);
  }

  /**
   * Since we access the DOM directly, we need use here the Renderer2 service.
   */
  private updateAppContentSize(footerHeight: number): void {
    if (footerHeight === 0) {
      // not yet initialized
      return;
    }
    this.lastRelevantFooterHeight = footerHeight;

    const appContentRef = document.querySelector('#app-content') as HTMLDivElement;
    const footerRef = document.querySelector('#footer') as HTMLDivElement;

    const mediaQueryMobile = window.matchMedia('(min-width: 768px)');
    const isMobile = !mediaQueryMobile.matches;
    const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');
    const isDesktop = mediaQueryDesktop.matches;

    let headerHeight = 72;
    if (isDesktop) {
      headerHeight = 88 + 48;
    }

    const contentHeight = `calc(100vh - ${headerHeight}px - ${this.lastRelevantFooterHeight}px)`;

    // content
    this.renderer2.setStyle(appContentRef, 'margin-top', `${headerHeight}px`);
    this.renderer2.setStyle(appContentRef, 'min-height', contentHeight);

    // footer - sticky or fixed
    if (this.footerFixed && !isMobile) {
      this.renderer2.setStyle(footerRef, 'position', 'fixed');
      this.renderer2.setStyle(footerRef, 'bottom', '0px');
      this.renderer2.setStyle(footerRef, 'left', '0px');
      this.renderer2.setStyle(footerRef, 'z-index', 50); // identical to header
      this.renderer2.setStyle(appContentRef, 'margin-bottom', `${this.lastRelevantFooterHeight}px`);
    } else {
      this.renderer2.setStyle(footerRef, 'position', 'static');
      this.renderer2.removeStyle(footerRef, 'bottom');
      this.renderer2.removeStyle(footerRef, 'left');
      this.renderer2.removeStyle(footerRef, 'z-index');
      this.renderer2.removeStyle(appContentRef, 'margin-bottom');
    }
  }
}
