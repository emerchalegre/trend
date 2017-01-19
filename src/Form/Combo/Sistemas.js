Ext.define('App.Form.Combo.Sistemas', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-sistemas',
    fieldLabel: 'Sistemas',
    listConfig: {loadMask: true},
    anyMatch: true,
    name: 'idsistema',
    flex:1,
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idsistema', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'sistemas',
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
    valueField: 'idsistema'
});