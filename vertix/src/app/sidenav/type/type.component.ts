import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit, OnDestroy {
  type: string;
  private subscriptions: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions = this.route.params.subscribe(params => {
      this.type = params.typeCode;

      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
