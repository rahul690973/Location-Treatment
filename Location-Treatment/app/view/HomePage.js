
Ext.define('screenshots.view.HomePage', {
    extend: 'Ext.Container',
   
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
                xtype:'titlebar',
                title:'Search a Doc',
                docked:'top'
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
