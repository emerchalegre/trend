Ext.define('App.Form.Combo.Programadores', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-programadores',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idprogramador',
    forceSelection: true,
    allowBlank: false,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idprogramador', 'nomeprogramador'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'comboprogramadores',
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
    displayField: 'nomeprogramador',
    valueField: 'idprogramador'
});