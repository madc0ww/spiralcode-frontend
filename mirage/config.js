//
// Config for ember-cli-mirage
//
// made by madc0w
//

export default function() {
  this.logging = true;
  this.namespace = '/api';

  this.get('/posts');
  this.post('/posts/:id');
  this.post('/posts');
  this.put('/posts/:id');
  this.del('/posts/:id');

  this.get('/tags');
  this.post('/tags/:id');
  this.post('/tags');
  this.put('/tags/:id');
  this.del('/tags/:id');

  this.get('/comments');
  this.get('/comments/:id');
  this.post('/comments');
  this.put('/comments/:id');
  this.del('/comments/:id');

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
}
