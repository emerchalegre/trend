Ext.define('App.Chart.BurnDown', {
    requires:[
            'Ext.chart.CartesianChart',
            'App.Controller.ChartBurnDown', 
            'Ext.chart.axis.Numeric',
            'Ext.chart.axis.Category', 
            'Ext.chart.series.Line', 
            'Ext.chart.interactions.ItemHighlight', 
            'Ext.chart.interactions.PanZoom',
            'Ext.draw.sprite.Square',
            'App.Store.Browser'],
    extend: 'Ext.Panel',
    xtype: 'line-basic',
    layout:'fit',
    controller: 'line-basic',
    items: {
        xtype: 'cartesian',
        legend: {
            type: 'sprite',
            docked: 'right',
            marker: {
                type: 'square'
            }
        },
        reference: 'chart',
        interactions: {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
        animation: {
            duration: 200
        },
        store: {
            type: 'browsers'
        },
        insetPadding: 40,
        innerPadding: {
            left: 40,
            right: 40
        },
        axes: [{
            type: 'numeric',
            fields: ['data1', 'data2'],
            position: 'left',
            grid: true,
            minimum: 0,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            fields: 'month',
            position: 'bottom',
            grid: true,
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'line',
            title: 'Planejado',
            xField: 'month',
            yField: 'data1',
            colors:['#5487d1'],
            marker: {
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }, {
            type: 'line',
            title: 'Realizado',
            xField: 'month',
            yField: 'data2',
            colors:['#f14c52'],
            marker: {
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        listeners: {
            itemhighlightchange: 'onItemHighlightChange'
        }
    }

});