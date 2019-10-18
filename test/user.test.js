const myFunc = jest
  .fn()
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

const storeData = require('../handler/user').storeUserData;
const model = require('../model/user');

jest.mock('model');

describe('test my function', () => {
  model.storeUserData.mockResolvedValue({
    body: {
      id: '1',
      name: 'eee',
      emailId: '233',
      mobNo: 3232332,
    }
  })
  it('store user data', async done => {
    const request = {
      body: {
        id: '1',
        name: 'eee',
        emailId: '233',
        mobNo: 3232332,
      }
    };
    const response = {
      send: output => {
        done('User data created successfully')
      }
    };
    const next = () => {
    };
    try {
      await storeData(request, response, next)
    } catch (e) {
      console.log(e)
    }
  })
});
