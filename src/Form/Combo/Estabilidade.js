Ext.define('App.Form.Combo.Estabilidade', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-estabilidade',
    fieldLabel: 'Estabilidade do Escopo',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idestabilidade',
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idestabilidade', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'estabilidade',
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
    valueField: 'idestabilidade'
});