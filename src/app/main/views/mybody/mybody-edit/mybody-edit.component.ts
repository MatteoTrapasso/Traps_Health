import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Mybody} from '@models/vo/mybody';
import {FormGroup} from '@angular/forms';
import {MybodyStoreActions} from '@root-store/mybody-store';


@Component({
  selector: 'app-mybody-edit',
  templateUrl: './mybody-edit.component.html',
  styles: [``]
})
export class MybodyEditComponent extends PopUpBaseComponent<Mybody> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Mybody): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Mybody): void {
    if (item.id) {
      this.store$.dispatch(MybodyStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(MybodyStoreActions.CreateRequest({
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
