Ext.define('App.Form.Combo.SituacaoProjeto', {
    extend:'Ext.form.ComboBox',
    xtype: 'combo-situacaoprojeto',
    fieldLabel: 'Situação',
    listConfig: {loadMask: true},
    anyMatch: true,
    flex:1,
    name: 'idsituacao',
    allowBlank:false,
    forceSelection: true,
    store: Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['idsituacao', 'descricao'],
        proxy: {
            type: 'ajax',
            url: App.Path + 'situacaoprojeto',
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
    valueField: 'idsituacao'
});