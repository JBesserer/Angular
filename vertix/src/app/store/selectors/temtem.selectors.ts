import { createSelector } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { ITemtemState } from '../states/temtem.state';

const selectTemtems = (state: IAppState) => state.temtemsState;

export const selectTemtemList = createSelector(
  selectTemtems,
  (state: ITemtemState) => state.temtems
);

export const selectTemtemListForType = createSelector(
  selectTemtems,
  (state: ITemtemState, props) => state.temtems?.filter(temtem => temtem.types.includes(props.type))
);

export const selectTemtem = createSelector(
  selectTemtems,
  (state: ITemtemState, props) => state.temtems?.find(temtem => temtem.number === props.id)
);
