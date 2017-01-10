Ext.define('App.Store.Developer', {
    extend: 'Ext.data.Store',
    alias: 'store.devs',
    model: 'App.Model.Developer',
    proxy: {
        type: 'ajax',
        useDefaultXhrHeader:false,
        url: 'http://www.gazin.com.br/admin/ProjetoScrum/getDevs',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    constructor: function (config) {

        config = config || {};

        this.callParent([config]);

    }

});