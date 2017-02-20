Ext.define('App.Form.Combo.QuantidadeSistemasInternos', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-internos',
    fieldLabel: 'Sistemas Internos',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    value:1,
    name: 'idquantidadesistemasinternos',
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idquantidadesistema', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'sistemasinternos',
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