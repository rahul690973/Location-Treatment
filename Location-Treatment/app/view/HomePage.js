
Ext.define('screenshots.view.HomePage', {
    extend: 'Ext.Container',
    xtype:'homepage',
    config: {
        items: 
        [
            {
                xtype:'textfield',
                placeHolder:'Search',
                cls:'homepage_search'
             
            },
            {
                xtype:'normal_disease_list',
                cls:'disease_list',
                
            },
            {   
                docked: 'top',
                xtype: 'toolbar',
                layout:'hbox',
                items:
                [
                    {
                        xtype:'button',
                        iconCls:'more',
                        flex:2,
                        style:'margin:10px 10px',
                        id:'homepage_menu',
                         handler: function() {
                            Ext.Viewport.toggleMenu('left');
                        }
                    },
                    {
                        xtype:'label',
                        html:"<div style='padding:13px 5px'>Search A Doc</div>",
                        flex:10,
                    },
                                  ]
              
            },
            {
                xtype:'panel',
                docked:'bottom',
                iconCls:'arrow_right',
                layout:'hbox',
                style:'background:#006DB9',
                items:
                [
                    {
                        xtype:'label',
                        html:'Special Disease',
                        cls:'btn_special_disease',
                        
                        ui:'action',
                        flex:4
                    },
                    {
                        xtype:'button',
                        iconCls:'arrow_right',
                        ui:'action',
                        flex:2,
                        id:'special',
                        align:'right',
                        
                    }
                ]

            }
        ]
    }
});
