Ext.define('App.Form.Combo.PerguntaPadrao', {
    extend:'Ext.form.ComboBox',
    xtype:'combo-perguntapadrao',
    store: {
        fields: ['idpergunta', 'descricao'],
            data: [
                {"idpergunta": "1", "descricao": "Sim"},
                {"idpergunta": "0", "descricao": "Não"}
            ]
    },
    fieldLabel:'Pergunta?',
    queryMode: 'local',
    displayField: 'descricao',
    valueField: 'idpergunta',
    name:'pergunta'
});