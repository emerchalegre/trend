Ext.define('App.Grid.ProjetoRiscos', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-projetoRiscos',
    border: false,
    iconCls: 'x-fa fa-sort-amount-asc',
    title: 'Riscos de Negócio',
    initComponent: function () {

        var self = this;

        this.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
            }];
        
        this.nivelProbabilidade  = Ext.create('App.Form.Combo.NivelRisco', {name:'nivelprobabilidadecombo'});
        this.nivelImpacto        = Ext.create('App.Form.Combo.NivelRisco', {name:'nivelimpactocombo'});

        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            fields: [
                {name: 'descricao', type: 'string'},
                {name: 'nivelprobabilidade', type: 'string'},
                {name: 'nivelimpacto', type: 'string'},
                {name: 'nivelrisco', type: 'string'},
                {name: 'contramedida', type: 'string'},
            ],
            data: [
                {descricao: 'Descrição do Risco <b>Escopo</b>'},
                {descricao: 'Descrição do Risco <b>Investimento</b>'},
                {descricao: 'Descrição do Risco <b>Ganho</b>'},
                {descricao: 'Descrição do Risco <b>Prazo</b>'},
                {descricao: 'Descrição do Risco <b>Outros</b>'},
            ]
        });

        this.columns = [
            {
                text: 'Descrição',
                dataIndex: 'descricao',
                width:220,
            },
            {
                text: 'Probabilidade',
                dataIndex: 'probabilidade',
                flex: 1,
                editor: Ext.create('App.Form.Combo.NivelRisco', {name:'nivelprobabilidadecombo'}),
                /*renderer:function(val, meta, record){
                    console.log(record);
                    //var rec = self.params.fields.idtiponegocio.store.getAt(self.params.fields.idtiponegocio.store.findExact('idtiponegocio', v));
                    //return rec.data.descricao;
                }*/
            },
            {
                text: 'Impacto',
                dataIndex: 'impacto',
                flex: 1,
                editor:Ext.create('App.Form.Combo.NivelRisco', {name:'nivelimpactocombo'})
            },
            {
                text: 'Risco',
                dataIndex: 'nivelrisco',
                flex: 1,
            },
            {
                text: 'Contramedida',
                dataIndex: 'contramedida',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }

        ];

        this.callParent();

    }

});