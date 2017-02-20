Ext.define('App.Form.Combo.SistemasMulti', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-sistemas',
    fieldLabel: 'Sistemas',
    flex:1,
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
    multiSelect: true,
    anyMatch:true,
    name:'idsistema[]',
    displayField: 'descricao',
    valueField: 'idsistema',
    queryMode: 'local',
    filterPickList: true,
    
});
