Ext.define('App.Form.Combo.QuantidadeHoras', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-horas',
    fieldLabel: 'Horas',
    listConfig: {loadMask: true},
    anyMatch: true,
    name: 'idhora',
    flex:1,
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idhora', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'hora',
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
    valueField: 'idhora'
});