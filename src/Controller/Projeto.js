Ext.define('App.Controller.Projeto', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projeto',
    init: function (view) {

        this.formfiltro = this.lookupReference('formfiltro');
        this.formProjeto = this.lookupReference('form');
        this.card = this.lookupReference('card');
        this.grid = this.lookupReference('grid');
        this.window = this.lookupReference('window');
        this.windowprint = this.lookupReference('windowprint');
        
    },
    novoProjeto: function () {
        var self = this;
        self.window.show();
    },
    
    showNext: function () {
        
        this.doCardNavigation(1);
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },

    doCardNavigation: function (incr) {
        
        var self = this.window;
        var me = this.window.panelProjeto;
        
        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);
        
        self.buttonPrev.setDisabled(next===0);
        self.buttonNext.setDisabled(next===2);
    }
});