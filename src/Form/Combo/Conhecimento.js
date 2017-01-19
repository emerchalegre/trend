Ext.define('App.Form.Combo.Conhecimento', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-conhecimento',
    fieldLabel: 'Conhecimento e expertise da equipe',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idconhecimento',
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idconhecimento', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'conhecimento',
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
    valueField: 'idconhecimento'
});