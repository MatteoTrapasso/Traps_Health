import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Myprogress} from '@models/vo/myprogress';
import {FormGroup} from '@angular/forms';
import {MyprogressStoreActions} from '@root-store/myprogress-store';


@Component({
  selector: 'app-myprogress-edit',
  templateUrl: './myprogress-edit.component.html',
  styles: [``]
})
export class MyprogressEditComponent extends PopUpBaseComponent<Myprogress> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Myprogress): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Myprogress): void {
    if (item.id) {
      this.store$.dispatch(MyprogressStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(MyprogressStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}
