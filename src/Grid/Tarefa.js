Ext.define('App.Grid.Tarefa', {
    xtype: 'grid-tarefa',
    extend: 'Ext.grid.Panel',
    requires: ['App.Form.Combo.Developer'],
    initComponent: function () {

        var self = this;

        this.storeComboTask = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [
                {"abbr": "AL", "name": "Alabama"},
                {"abbr": "AK", "name": "Alaska"},
                {"abbr": "AZ", "name": "Arizona"}
            ]
        });

        // Create the combo box, attached to the states data store
        this.comboTask = Ext.create('Ext.form.ComboBox', {
            store: self.storeComboTask,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr'
        });

        this.store = Ext.create('Ext.data.Store', {
            field: ['datainicial', 'datafinal', 'horas', 'tarefa', 'programador', 'detalhe', 'farol', 'concluido', 'previsto', 'horainicial', 'horafinal'],
            data: [
                {
                    datainicial: '2016-09-01',
                    detalhe: 'É preciso calcular o Ganho anual previsto, em cima da agilidade ganha do volume dessas transações.',
                    tarefa: 'Tarefa 1',
                    datafinal: '2016-09-01',
                    horas: 5,
                    programador: 'Eduardo',
                    farol: 1
                }
            ]
        });

        this.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            {
                ptype: 'rowexpander',
                rowBodyTpl: new Ext.XTemplate(
                        '<p><b>Descrição</b>: {[this.breakLine(values.detalhe)]}</p>',
                        {
                            disableFormats: true,
                            breakLine: function (descricao) {
                                return '<br>' + descricao.replace(/\n/g, "<br>");
                            }
                        }
                )
            }
        ];

        this.viewConfig = {
            stripeRows: true,
            markDirty: false,
            plugins: {
                ptype: 'gridviewdragdrop',
                dragText: 'Arraste para alterar a posição da tarefa'
            }
        };

        this.tbar = {
            items: [
                {
                    cls: 'button-tool',
                    handler: 'alert',
                    icon: 'http://megaicons.net/static/img/icons_sizes/8/60/16/imagetools-expand-icon.png'
                },
                {
                    cls: 'button-tool',
                    icon: 'http://megaicons.net/static/img/icons_sizes/8/60/16/imagetools-collapse-icon.png',
                    handler:'collapseAll'
                },
                '->',
                {
                    text: 'Adicionar Tarefa',
                    icon: 'http://i.stack.imgur.com/FOWqL.png',
                    handler: 'addTask' /*function (el) {
                     
                     Ext.getCmp('grid').store.add({});
                     Ext.getCmp('grid').plugins[0].startEditByPosition({
                     row: Ext.getCmp('grid').store.count(),
                     column: 1
                     });
                     }*/
                },
                /*{
                 icon: 'http://www.iconshock.com/img_jpg/SUPERVISTA/jobs_icons/jpg/16/programmer_icon.jpg',
                 text: 'Adicionar Programadores'
                 },*/
                {
                    icon: 'http://dkmasti.wapgem.com/logo/icons/clip2.png',
                    text: 'Adicionar Anexos'
                },
                {
                    icon: 'http://icons.iconarchive.com/icons/famfamfam/silk/16/chart-line-icon.png',
                    text: 'BurnDown',
                    handler: function () {

                        Ext.create('Ext.window.Window', {
                            height: '70%',
                            width: '70%',
                            title: 'BurnDown',
                            scrollable: true,
                            constrain: true,
                            closable: true,
                            layout: 'fit',
                            items: Ext.create('App.Chart.BurnDown')
                        }).show();
                    }
                }
            ]
        };

        this.columns = [
            /*{
             text:'Sprint',
             renderer: function(){
             return 'Sprint 1'
             }
             },*/
            {
                text: 'Tarefa',
                dataIndex: 'detalhe',
                flex: 1,
                renderer: function (a, b, c, d) {
                    return 'Tarefa ' + (d + 1);
                },
                editor: {
                    xtype: 'textarea',
                    height: 300
                }
            },
            {
                text: 'Programador',
                dataIndex: 'programador',
                flex: 1,
                editor: {
                    xtype: 'combo-devs'
                },
                renderer: function (a, b, c, d, e) {
                    console.log(this.getColumns()[e].getEditor());
                    return this.getColumns()[e].getEditor(c, 'programador').getDisplayValue();
                }
            },
            {
                text: 'Concluído',
                dataIndex: 'concluido',
                flex: 1,
                renderer: function (v) {
                    if (v)
                        return v + '%'
                },
                editor: {
                    xtype: 'numberfield',
                    maxValue: 100
                }
            },
            {
                text: 'Previsto',
                dataIndex: 'previsto',
                renderer: function (v) {
                    if (v)
                        return v + '%'
                },
                flex: 1,
                editor: {
                    xtype: 'numberfield',
                    maxValue: 100
                }
            },
            {
                text: 'Data Início',
                dataIndex: 'datainicial',
                xtype: 'datecolumn', format: 'd/m/Y',
                flex: 1,
                editor: {
                    xtype: 'datefield'
                }
            },
            {
                text: 'Hora Início',
                dataIndex: 'horainicial',
                xtype: 'datecolumn', format: 'H:i',
                flex: 1,
                editor: {
                    xtype: 'timefield'
                }
            },
            {
                text: 'Horas',
                flex: 1,
                dataIndex: 'horas',
                editor: {
                    xtype: 'numberfield',
                    minValue: 1,
                    maxValue: 8
                }
            },
            {
                text: 'Data Fim',
                flex: 1,
                dataIndex: 'datafinal',
                xtype: 'datecolumn', format: 'd/m/Y',
                editor: {
                    xtype: 'datefield'
                }
            },
            {
                text: 'Hora Fim',
                dataIndex: 'horafinal',
                xtype: 'datecolumn', format: 'H:i',
                flex: 1,
                editor: {
                    xtype: 'timefield'
                }
            },
            {
                text: 'Data Início Real',
                dataIndex: 'datainicial',
                xtype: 'datecolumn', format: 'd/m/Y',
                flex: 1,
                editor: {
                    xtype: 'datefield'
                }
            },
            {
                text: 'Data Fim Real/Tendência',
                flex: 1,
                dataIndex: 'datafinal',
                xtype: 'datecolumn', format: 'd/m/Y',
                editor: {
                    xtype: 'datefield'
                }
            }, {
                flex: 1,
                text: 'Farol',
                dataIndex: 'farol',
                renderer: function (v) {
                    if (v == 1)
                        return '<div style="background-color:red;width:20px;height:20px;border-radius: 100%;"></div>';
                    else
                        return '<div style="background-color:green;width:20px;height:20px;border-radius: 100%;"></div>';
                },
                editor: {
                    xtype: 'numberfield'
                }
            },
            {
                text: 'Predecessora',
                flex: 1,
                editor: self.comboTask
            }
        ];

        this.callParent();

    }

});

