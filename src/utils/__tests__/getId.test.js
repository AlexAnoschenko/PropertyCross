import getId from '../getId';

describe('getId tests', () => {
    it('should return String without dot from num', () => {
        expect(getId(12.3123)).toEqual('123123');
    });
    it('should return String from undefined', () => {
        expect(getId(undefined)).toEqual('undefined');
    });
    it('should return String without dot from big num', () => {
        expect(getId(123123123.123)).toEqual('123123123123');
    });
    it('should return String from 0', () => {
        expect(getId(0)).toEqual('0');
    });
});
