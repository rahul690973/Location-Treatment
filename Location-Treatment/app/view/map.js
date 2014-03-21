Ext.define('screenshots.view.map', {
    requires: ['Ext.Menu'],
    singleton: true,
    constructor: function(config) {
        this.initConfig(config);
    },
    config: {
    },
    setMenu: function() {
		Ext.Viewport.setMenu(this.createMenu('left'), {
			side: 'left',
			reveal: true
		});

		
    },

    createMenu: function(side) {
        var items = [
            {
                xtype:'panel',
                html: '<div style="color:white" >Cost</div><div><img src="resources/images/price.png" height="40px" style="position:relative;left:-10px;margin-top:8px"/></div>',
                style:'border-bottom:2px solid grey;padding-top:20px;height:100px;width:120px',
                scope: this,
                
            },
             {
                xtype:'panel',
                html: '<div style="color:white" >Distance</div><div><img src="resources/images/price.png" height="40px" style="position:relative;left:-10px;margin-top:8px"/></div>',
                style:'border-bottom:2px solid grey;padding-top:20px;height:100px;width:120px',
                scope: this,
                
            },
             {
                xtype:'panel',
                html: '<div style="color:white" >Reviews</div><div><img src="resources/images/price.png" height="28px" width="120px" style="position:relative;left:-10px;margin-top:8px"/></div>',
                style:'border-bottom:2px solid grey;padding-top:20px;height:100px;width:120px',
                scope: this,
                
            },
          
        ];

        var className = 'Ext.Menu';

        return Ext.create(className, {
            items: items
        });
    }
});