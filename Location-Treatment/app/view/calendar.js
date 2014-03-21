Ext.define('screenshots.view.calendar', {
    extend: 'Ext.Panel',
   
    config :
     {
        items:
            [
               {
                    xtype:'titlebar',
                    layout:'hbox',
                    items:
                        [
                            {
                                xtype:'button',
                                iconCls:'arrow_left',
                                flex:1,
                                style:'margin:0px 10px',
                                id:'calendar_back'
                            },
                            {
                                xtype:'label',
                                html:'<div style="margin-left:50px">Appointment</div>',
                                flex:3
                            }
                        ]
                },
                {
                    xtype:'panel',
                    html:'<img src="resources/images/calendar.png"/>'
                }
            ]
     },
   
    /**
     * Apply Fullcalendar widget to panel div
     */
    
    
});