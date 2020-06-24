import { ExampleQueryResolvers } from '../ExampleType';

describe('ExampleQueryResolvers', () => {
  const { Query, HelloWorld } = ExampleQueryResolvers;

  describe('Root Query Resolvers', () => {
    const { helloWorld } = Query;

    describe('helloWorld', () => {
      it('returns an object with the correct shape', () => {
        expect(helloWorld()).toEqual({ id: 1, hello: 'Hello World!' });
      });
    });
  });

  describe('HelloWorld Resolvers', () => {
    const { id, hello } = HelloWorld;

    describe('id', () => {
      it('returns the ID of the parent arg', () => {
        const parent = { id: 123 };

        expect(id(parent)).toEqual(123);
      });
    });

    describe('hello', () => {
      it('returns the hello field of the parent arg', () => {
        const parent = { hello: 'hello' };

        expect(hello(parent)).toEqual('hello');
      });
    });
  });
});
