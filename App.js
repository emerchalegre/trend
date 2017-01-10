Ext.application({
    name: 'Application',
    autoCreateViewport: 'App.view.Main',
    paths: {
        App: 'src',
        'Ext.chart': 'lib/extjs/packages/charts/src/chart',
        'Ext.draw': 'lib/extjs/packages/charts/src/draw',
        'Ext.ux': 'lib/extjs/packages/ux/classic/src'
    },
    launch: function (App) {
        app = Application.getApplication();
    }
});