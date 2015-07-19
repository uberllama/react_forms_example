var BaseStore = {

  API_PATH_PREFIX: '/api/v1',

  getResources() {
    return this._ajax(
      this.resourceName
    );
  },

  getResource(id) {
    return this._ajax(
      this.resourceName + '/' + id
    );
  },

  createResource(resource) {
    return this._ajax(
      this.resourceName + '/',
      'POST',
      JSON.stringify(resource)
    );
  },

  updateResource(resource) {
    return this._ajax(
      this.resourceName + '/' + resource.id,
      'PUT',
      JSON.stringify(resource)
    );
  },

  destroyResource(resource) {
    return this._ajax(
      this.resourceName + '/' + resource.id,
      'DELETE'
    );
  },

  _ajax(url, verb, data) {
    return $.ajax({
      url:          this.API_PATH_PREFIX + '/' + url,
      type:         verb || 'GET',
      contentType:  'application/json',
      dataType:     'json',
      processData:  false,
      data:         data
    });
  }

};
