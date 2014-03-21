Ext.define("screenshots.controller.Main",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			location:'#location',
          reviews:'#reviews',
          review:'#review',
    			list:'#mainlist',
          find:'#find',
          discuss:'#discuss',
          timings:'#timings'	,
          call:'#call',
          appoint:'#appoint',
          special:'#special',
          map:'#map',
          list_menu:'#list',
          normal:'#normal',
          reviewclick:'#reviewclick'
    			},


    		control:
    			   {
      			       location:
                      {
                        tap:'onTap'
                      },
                    reviews:
                      {
                       tap:'onReviews'
                      },  
                    review:
                      {
                    tap:'onReview'
                      },
                      list:
                      {
                        itemtap:'listItemTap'
                      },
                      find:
                      {
                        tap:'Find'
                      },
                      discuss:
                      {
                        tap:'Discuss'
                      },
                      timings:
                      {
                        tap:'Timings'
                      },
                      call:
                      {
                        tap:'Call'
                      },
                      appoint:
                      {
                        tap:'Appoint'
                      },
                      special:
                      {
                        tap:'Special'
                      },
                      map:
                      {
                        tap:'Map'
                      },
                      list_menu:
                      {
                        tap:'List'
                      },
                      normal:
                      {
                        tap:'Normal'
                      },
                      reviewclick:
                      {
                        tap:'ReviewClick'
                      }

                			
                			
                	},
                	},
      Normal:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.HomePage'));   
      },

      Map:function()
      {
     Ext.Viewport.setActiveItem(Ext.create('screenshots.view.mapMain'));
    screenshots.view.map.setMenu();
      },

      List:function()
      {
      Ext.Viewport.setActiveItem(Ext.create('screenshots.view.doctorlist'));   
      },

      Special:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Special'));      
      },

      Find:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Doctors_List'));      
      },

       Appoint:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.calendar'));      
      },

      Discuss:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Discussion_Forum'));      
      },

      Timings:function()
      {
        var panel = Ext.create('Ext.Panel', {
        centered : true,
        cls:'structure',
        layout:'vbox',
   
        items:
          [
              {
              xtype:'label',
              html:'<div><span >Timings</span></div>',
              cls:'alert_timings',
              flex:2
              },
              {
              xtype:'panel',
              cls:'alert_timings_content',
              html:'<div>Mon-Fri: 9 AM to 11 PM</div><div >Sat-Sun: 11 AM to 11 PM</div>',
              flex:5
              },
              {
              xtype:'button',
              html:'Close',
              ui:'plain',
              style:'background:#006699;color:white',
              flex:2,
              handler:function(button,event)
                    { 
                       panel.hide();
                     }
               }
          ]
        });
        Ext.Viewport.add(panel);
        panel.show();
      },

      
      Call:function()
      {
        var panel = Ext.create('Ext.Panel', {
        centered : true,
        cls:'structure',
        layout:'vbox',
  
         items:
            [
                {
                xtype:'label',
                html:'<div><span class="alert_contacts_span">Contact</span></div>',
                cls:'alert_contacts',
                flex:3
                },
                {
                xtype:'panel',
                cls:'alert_contacts_content1',
                html:'+91-8870512503',
                flex:2
                },
                {
                xtype:'label',
                html:'+91-8124379096',
                cls:'alert_contacts_content2',
                flex:2
                },
                {
                xtype:'button',
                html:'Close',
                ui:'plain',
                cls:'alert_contacts_button',
                flex:3,
                style:'background:#006699',
                handler:function(button,event)
                    {
                      panel.hide();
                    }
                }
             ]
          });
        Ext.Viewport.add(panel);
        panel.show();     
      },

    	onTap:function()
      {
          new Ext.MessageBox().show({
              title: '<div ><span>Location</span></div>',
              message:'<div style="font-size:15px">Opposite Brookefields,Near Cosmos Mall, Whitefield, ITPL Main Road Satya Sai Arcad</div>',
              scope: this,
              style:'padding:0px !imp',

              
              buttons : [
                 {
                   itemId : 'yes',
                   text   : 'Ok'
                 },
                 {
                     itemId : 'no',
                     text   : 'Show Map'
                   }
                 ],
              fn: function(btn) {
                if (btn == 'yes'){
                     }
                else if(btn=='no')
                  {
             
                  }
                  
               }
            });
      },
        ReviewClic:function()
      {
          new Ext.MessageBox().show({
              title: '<div ><span>Reviews</span></div>',
              message:'<div><img src="resources/images/reve.png" style="height:40px;width:150px"/></div>',
              scope: this,
              style:'padding:0px !imp',

              
              buttons : [
                 {
                   itemId : 'yes',
                   text   : 'Submit',
                   style:'1px'
                 },
                 {
                     itemId : 'no',
                     text   : 'Submit and Share'
                   }
                 ],
              fn: function(btn) {
                if (btn == 'yes'){
                     }
                else if(btn=='no')
                  {
             
                  }
                  
               }
            });
      },
      ReviewClick:function()
      {
     var panel = Ext.create('Ext.Panel', {
    centered : true,
    style:'height:180px;width:300px',
    layout:'vbox',
   //html:"<div style='width:300px;height:200px;background:red'></div>",
   items:
   [
    {
      xtype:'label',
      html:'<span style="margin-left:40px">Review</span>',
      style:'font-weight:bold;font-size:20px;background:#005C8A;color:white;padding:10px;padding-left:60px',
      flex:2
    },
    {
      xtype:'panel',
      html:'<img src="resources/images/rev.png"/>',
      flex:4,
      style:'padding: 25px 50px'
    },
    {
      xtype:'button',
      ui:'plain',
      html:'Submit',
      style:'font-weight:bold;font-size:20px;background:#005C8A;color:white;padding:10px;',
      flex:2,
      handler:function(button,event)
      {
        panel.hide();
      }
    }
   ]
    
});

Ext.Viewport.add(panel);

panel.show({
   // type        : 'pop',
    //isComponent : true
}); },
listItemTap:function()
{
  Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Disease_Information'));
}


   
});