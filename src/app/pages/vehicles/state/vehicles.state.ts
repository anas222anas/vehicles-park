// import { Injectable } from '@angular/core';
// import { State, Action, StateContext } from '@ngxs/store';
// import { VehiclesAction } from './vehicles.actions';

// export class VehiclesStateModel {
//   public items!: string[];
// }

// const defaults = {
//   items: []
// };

// @State<VehiclesStateModel>({
//   name: 'vehicles',
//   defaults
// })
// @Injectable()
// export class VehiclesState {
//   @Action(VehiclesAction)
//   add({ getState, setState }: StateContext<VehiclesStateModel>, { payload }: VehiclesAction) {
//     const state = getState();
//     setState({ items: [ ...state.items, payload ] });
//   }
// }
