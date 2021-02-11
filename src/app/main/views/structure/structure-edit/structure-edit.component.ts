import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Structure} from '@models/vo/structure';
import {FormGroup} from '@angular/forms';
import {StructureStoreActions} from '@root-store/structure-store';


@Component({
  selector: 'app-structure-edit',
  templateUrl: './structure-edit.component.html',
  styles: [``]
})
export class StructureEditComponent extends PopUpBaseComponent<Structure> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Structure): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Structure): void {
    if (item.id) {
      this.store$.dispatch(StructureStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(StructureStoreActions.CreateRequest({
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
