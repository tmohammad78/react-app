import { render } from './render';

export default function serverRenderer() {
  return async (req, res) => {
    // each request need unique scope to can define and work with variables over the request
    // als.scope();

    // make response
    const response = error => render(error, req, res);

    try {
      // define basic parameters
      // initialize(req);
      // handle skeleton data
      // await skeletonServerProvider(req);
      // call fetch() of component and get data
      // fetchProvider(req)
      //     .then(() => response()) // get data successfully
      //     .catch((err) => response(err)); // occur error in fetchProvider() or render()
    } catch (err) {
      response(err); // occur error in try
    }
  };
}
