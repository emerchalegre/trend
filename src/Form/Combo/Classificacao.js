Ext.define('App.Form.Combo.Classificacao', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-classificacao',
    fieldLabel: 'Classificação de Demanda',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idclassificacao',
    forceSelection: true,
    allowBlank: false,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idclassificacao', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'classificacao',
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
    valueField: 'idclassificacao'
});