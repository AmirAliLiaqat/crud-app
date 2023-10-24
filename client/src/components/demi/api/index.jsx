import Chance from 'chance';

const change = Chance();

export const fakeUserData = () => {
    return change.name( { middle: true } );
}