Ext.define('screenshots.view.mapMain', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
        items: [
            {   
                docked: 'top',
                xtype: 'toolbar',
                title: '<div style="margin-left:30px">Hospitals Near You</div>',
                items: [{
                        xtype: 'button',
                        html:'Filter',
                        //iconCls: 'more',
						//iconMask: true,
                        handler: function() {
                            Ext.Viewport.toggleMenu('left');
                        }
                    },{
                        xtype: 'spacer'
                    },]
            },{
				html: '<div><img src="resources/images/map.png"/></div>'
			}
        ]
    }
});