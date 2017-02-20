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
        
        this.store = Ext.create('Ext.data.Store', {
            storeId: 'grupoStore',
            fields: [
                {name: 'risco', type: 'string'},
                {name: 'descricaorisco', type: 'string'},
                {name: 'idnivelprobabilidade', type: 'string'},
                {name: 'idnivelimpacto', type: 'string'},
                {name: 'idnivelrisco', type: 'string'},
                {name: 'contramedida', type: 'string'},
            ],
            data: [
                {
                    risco: 'Descrição do Risco <b>Escopo</b>',
                    descricaorisco:'', 
                    idnivelprobabilidade:1,
                    idnivelimpacto:1,
                    idnivelrisco:1
                },
                {
                    risco: 'Descrição do Risco <b>Investimento</b>',
                    descricaorisco:'', 
                    idnivelprobabilidade:1,
                    idnivelimpacto:1,
                    idnivelrisco:1
                },
                {
                    risco: 'Descrição do Risco <b>Ganho</b>',
                    descricaorisco:'', 
                    idnivelprobabilidade:1,
                    idnivelimpacto:1,
                    idnivelrisco:1
                },
                {
                    risco: 'Descrição do Risco <b>Prazo</b>',
                    descricaorisco:'', 
                    idnivelprobabilidade:1,
                    idnivelimpacto:1,
                    idnivelrisco:1
                },
                {
                    risco: 'Descrição do Risco <b>Outros</b>',
                    descricaorisco:'', 
                    idnivelprobabilidade:1,
                    idnivelimpacto:1,
                    idnivelrisco:1
                },
            ]
        });

        this.columns = [
            {
                text: 'Descrição do Risco',
                dataIndex: 'risco',
                width:220,
            },
            {
                text: 'Descrição',
                dataIndex: 'descricaorisco',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                text: 'Probabilidade',
                dataIndex: 'idnivelprobabilidade',
                flex: 1,
                editor: Ext.create('App.Form.Combo.NivelRisco', {name:'nivelprobabilidadecombo', value:1}),
                renderer: function (a, b, c, d, e) {
                    return this.getColumns()[e].getEditor(c, 'probabilidade').getDisplayValue();
                }
            },
            {
                text: 'Impacto',
                dataIndex: 'idnivelimpacto',
                flex: 1,
                editor:Ext.create('App.Form.Combo.NivelRisco', {name:'nivelimpactocombo', value:1}),
                renderer: function (a, b, c, d, e) {
                    return this.getColumns()[e].getEditor(c, 'impacto').getDisplayValue();
                }
            },
            {
                text: 'Risco',
                dataIndex: 'idnivelrisco',
                flex: 1,
                editor:Ext.create('App.Form.Combo.NivelRisco', {name:'nivelriscocombo', value:1, disabled:true}),
                renderer: function (a, b, c, d, e) {
                    return this.getColumns()[e].getEditor(c, 'nivelrisco').getDisplayValue();
                }
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