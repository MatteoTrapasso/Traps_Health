import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {combineLatest, fromEvent, Observable} from 'rxjs';
import {debounceTime, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-calculator-main',
  templateUrl: 'calculator-main.component.html',
  styles: []
})
export class CalculatorMainComponent implements OnInit {
  public BMI$: Observable<number>;
  public result$: Observable<string>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    const height$ = fromEvent(document.querySelector('#height'), 'input')
      .pipe(
        pluck('target', 'value'),
        // @ts-ignore
        map(v => v / 100)
      );
    const weight$ = fromEvent(document.querySelector('#weight'), 'input')
      .pipe(
        pluck('target', 'value')
      );

    const range = n => {
      if (n < 18.5) {
        return 'sottopeso';
      }
      if (n < 25) {
        return 'nella norma';
      }
      return 'sovrappeso';
    };


    this.BMI$ = combineLatest(
      height$,
      weight$
    ).pipe(
      debounceTime(1000),
      // @ts-ignore
      map(([h, w]) => w / (h + h)),
    );

    this.result$ = this.BMI$.pipe(
      map(range)
    );

  }

}
