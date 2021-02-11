import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Counter} from '@models/vo/counter';

@Injectable()
export class CounterStoreEffects {
    constructor(private readonly actions$: Actions) {
    }
}
