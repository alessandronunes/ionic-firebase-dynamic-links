import { Component, OnInit, ApplicationRef } from '@angular/core';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public subscription: any;
  public dynamicLink: any;

  constructor(public navCtrl: NavController, 
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private applicationRef: ApplicationRef) {
  }

  ngOnInit(): void {
    this.dynamicLink = 'Loading dynamicLink...';

    this.subscription = this.firebaseDynamicLinks.onDynamicLink()
      .subscribe((res: any) => {
        this.dynamicLink = JSON.stringify(res);
        this.applicationRef.tick();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
