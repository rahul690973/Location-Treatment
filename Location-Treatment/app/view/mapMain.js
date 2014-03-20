Ext.define('screenshots.view.mapMain', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
        items: [
            {   
                docked: 'top',
                xtype: 'toolbar',
                layout:'hbox',
                items:
                [
                    {
                        xtype:'button',
                        iconCls:'arrow_left',
                        flex:1,
                        style:'margin:10px 10px',
                        id:'map_back'
                    },
                    {
                        xtype:'label',
                        html:"<div style='padding:13px 5px'>Hospitals NearBy</div>",
                        flex:6,
                    },
                    {
                        xtype: 'button',
                        html:'Filter',
                        flex:2,
                       
                        handler: function() {
                            Ext.Viewport.toggleMenu('right');
                        }
                    }              ]
              
            },{
				html: '<div><img src="resources/images/map.png"/></div>'
			}
        ]
    }
});