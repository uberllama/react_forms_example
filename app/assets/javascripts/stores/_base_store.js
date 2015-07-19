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

  createResource(model) {
    return this._ajax(
      this.resourceName + '/',
      'POST',
      JSON.stringify(model)
    );
  },

  updateResource(model) {
    return this._ajax(
      this.resourceName + '/' + model.id,
      'PUT',
      JSON.stringify(model)
    );
  },

  destroyResource(model) {
    return this._ajax(
      this.resourceName + '/' + model.id,
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
