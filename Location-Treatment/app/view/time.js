Ext.define('screenshots.view.time', {
    extend: 'Ext.Container',
    config:
    {
        items:
        [
            {
                xtype:'titlebar',
                title:'Choose a Slot',
                docked:'top'
            },
            {
                xtype:'label',
                style:'margin:10px 5px',
                html:'<b>Date : </b> 17 Feb 2014'
            },
            {
                xtype:'listtime',
                style:'height:100%;width:100%;position:relative;top:-35px'
            }
        ]
    }        
});
