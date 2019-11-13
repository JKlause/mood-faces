import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, sendSelection } from './moodActions';

describe('mood actions ', () => {
  it('DRINK_COFFEE returns exepcted', () => {
    expect(DRINK_COFFEE).toEqual('DRINK_COFFEE');
  });
  it('EAT_SNACK returns exepcted', () => {
    expect(EAT_SNACK).toEqual('EAT_SNACK');
  });
  it('STUDY returns exepcted', () => {
    expect(STUDY).toEqual('STUDY');
  });
  it('TAKE_NAP returns exepcted', () => {
    expect(TAKE_NAP).toEqual('TAKE_NAP');
  });
  it('sendSelection returns exepcted', () => {
    expect(sendSelection('death to testing')).toEqual({ type: 'death to testing' });
  });
});
