Ext.define('App.Form.Combo.QuantidadeSistemasExternos', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-externos',
    fieldLabel: 'Sistemas Externos',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idquantidadesistema',
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idquantidadesistema', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'sistemasexternos',
            reader: {type: 'json'}
        }
    }),
    triggers: {
        remove: {
            cls: 'x-form-clear-trigger',
            handler: function () {
                this.setValue('');
            }
        }
    },
    queryMode: 'local',
    displayField: 'descricao',
    valueField: 'idquantidadesistema'
});