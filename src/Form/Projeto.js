Ext.define('App.Form.Projeto', {
    extend: 'Ext.form.Panel',
    xtype: 'form-projeto',
    border: false,
    fieldDefaults: {
        labelWidth: 60
    },
    initComponent: function () {

        var self = this;
        
        this.items = [
            {
                xtype: 'hidden',
                name: 'idprojeto'
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaults: {
                    margin: '0 5 0 0'
                },
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'N°',
                        labelWidth: 60,
                        name: 'numero',
                        flex: 1
                    },
                    {
                        xtype: 'datefield',
                        labelWidth: 60,
                        fieldLabel: 'Data',
                        name: 'dataprojeto',
                        value: new Date(),
                        flex: 1
                    },
                ]
            }, {
                xtype: 'fieldset',
                title: 'Informações Principais',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Título',
                                name: 'titulo',
                                allowBlank: false,
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Autor Documento (T.I)',
                                name: 'autordocumento',
                                allowBlank: false,
                                flex: 1
                            }
                        ]
                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Negócio',
                                name: 'negocio',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Solicitante',
                                name: 'solicitante',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Processo',
                                name: 'processo',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Centro de Custo',
                                name: 'centrodecusto',
                                flex: 1
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: 'Alinhamento Estratégico',
                                name: 'alinhamentoestrategico',
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Contrato Solicitante',
                                name: 'contratosolicitante',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Objetivo do Documento',
                layout: 'anchor',
                hidden:true,
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textarea',
                                emptyText: 'Objetivo',
                                name: 'objetivo',
                                value: 'Este documento tem por objetivo transformar o entendimento das necessidades do solicitante em critérios de avaliações de projetos, considerando seu tamanho, retorno financeiro e riscos.',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Entendimento da Solicitação',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textarea',
                                emptyText: 'Descreva a solicitação do projeto',
                                name: 'entendimentodasolicitacao',
                                flex: 1
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Cenário Atual',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textarea',
                                emptyText: 'Descreva o cenário atual do processo',
                                name: 'cenarioatual',
                                flex: 1,
                                allowBlank:false
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Solução Proposta',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaults: {
                            margin: '0 5 0 0'
                        },
                        items: [
                            {
                                xtype: 'textarea',
                                emptyText: 'Descreva a solução proposta para o processo.',
                                name: 'solucaoproposta',
                                flex: 1,
                                allowBlank:false
                            }
                        ]
                    }
                ]
            }
        ]

        this.callParent();

    }
});
