Ext.define('App.Form.Combo.NivelRisco', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-nivel',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idnivel',
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idnivel', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'nivelrisco',
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
    valueField: 'idnivel'
});