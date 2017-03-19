Ext.define('App.security.Firewall', {
    singleton: true,
    requires: [
        'App.security.TokenStorage'
    ],

    login: function(username, password) {
        var deferred = new Ext.Deferred();
        Ext.Ajax.request({
            url: App.Path + 'login',
            method: 'POST',
            jsonData: {
                'loginusuario': username,
                'senhausuario': password
            },

            success: function (response) {
                var data = Ext.decode(response.responseText);

                if (data.data) {
                    App.security.TokenStorage.save(data.data);
                    deferred.resolve(data, response);
                } else {
                    deferred.reject(data, response);
                }
            },

            failure: function (response) {
                var data = Ext.decode(response.responseText);

                App.security.TokenStorage.clear();

                deferred.reject(data, response);
            }
        });

        return deferred.promise;
    },

    logout: function(callback) {
        App.security.TokenStorage.clear();

        callback();
    },

    isLogged: function() {
      if(App.security.TokenStorage.retrieve()) return true;
        return false;
    }
});
