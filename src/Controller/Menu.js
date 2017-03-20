Ext.define('App.Controller.Menu', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu',
    onToggleConfig: function (menuitem) {
      var treelist = this.lookupReference('treelist');


      treelist.setConfig(menuitem.config, menuitem.checked);
    },
    onToggleMicro: function (button, pressed) {
      var treelist = this.lookupReference('treelist'),
            navBtn = this.lookupReference('navBtn'),
            ct = treelist.ownerCt;

        treelist.setMicro(pressed);

        if (pressed) {
            this.oldWidth = ct.width;
            ct.setWidth(44);
        } else {
            ct.setWidth(this.oldWidth);
        }

        if (Ext.isIE8) {
            this.repaintList(treelist, pressed);
        }
    },
    onToggleNav: function (button, pressed) {

      var treelist = this.lookupReference('treelist'),
          ct = this.lookupReference('treelistContainer');


      treelist.setExpanderFirst(!pressed);
      treelist.setUi(pressed ? 'nav' : null);
      treelist.setHighlightPath(pressed);
      ct[pressed ? 'addCls' : 'removeCls']('treelist-with-nav');

      if (Ext.isIE8) {
          this.repaintList(treelist);
      }
    },
    repaintList: function (treelist, microMode) {
      treelist.getStore().getRoot().cascadeBy(function(node) {
          var item, toolElement;

          item = treelist.getItem(node);

          if (item && item.isTreeListItem) {
              if (microMode) {
                  toolElement = item.getToolElement();

                  if (toolElement && toolElement.isVisible(true)) {
                      toolElement.syncRepaint();
                  }
              }
              else {
                  if (item.element.isVisible(true)) {
                      item.iconElement.syncRepaint();
                      item.expanderElement.syncRepaint();
                  }
              }
          }
      });
    }
});
