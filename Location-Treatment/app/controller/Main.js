Ext.define("screenshots.controller.Main",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			list:'#mainlist',
          find:'#find',
          discuss:'#discuss',
          appoint:'#appoint',
          special:'#special',
          map:'#map',
          list_menu:'#list',
          normal:'#normal',
          homePage:'homepage',
          otherView:'disease_information',
          about_back:'#about_back',
          symptoms_back:'#symptoms_back',
          treatment_back:'#treatment_back',
          discussion_back:'#discussion_back',
          map_back:'#map_back',
          register_doctor:'#register_doctor',
          clinic_back:'#clinic_back',
          clinic_back1:'#clinic_back1',
          list_back:'#list_back',
          clinicdetails_continue:'#clinicdetails_continue',
     //     homepage_menu:'#homepage_menu'
    			},


    		control:
    			   {
                    homePage: {
                showOtherViewCommand: "onShowOtherView"
            },
      			       location:
                      {
                        tap:'onTap'
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
                      treatment_back:
                      {
                        tap:'back_to_homepage'
                      },
                      symptoms_back:
                      {
                        tap:'back_to_homepage'
                      },
                      about_back:
                      {
                        tap:'back_to_homepage'
                      },
                      discussion_back:
                      {
                        tap:'back_to_disease_information'
                      },
                      map_back:
                      {
                        tap:'back_to_doctors_list'
                      },
                      homepage_menu:
                      {
                        tap:'Homepage_Menu'
                      },
                      register_doctor:
                      {
                        tap:'Register_Doctor'
                      },
                      clinic_back:
                      {
                        tap:'Clinic_Back'
                      },
                       clinic_back1:
                      {
                        tap:'Clinic_Back1'
                      },
                     
                      clinicdetails_continue:
                      {
                        tap:'ClinicDetails_Continue'
                      },
                      list_back:
                      {
                        tap:'List_Back'
                      }

                    
                	},
             
                	},
      List_Back:function()
      {
         Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Disease_Information'));
      },
      Clinic_Back:function()
      {
         Ext.Viewport.setActiveItem(Ext.create('screenshots.view.HomePage'));
      screenshots.view.sidebar.setMenu();
      },
      Clinic_Back1:function()
      {
         Ext.Viewport.setActiveItem(Ext.create('screenshots.view.ClinicDetails'));
    
      },
      ClinicDetails_Continue:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.ClinicDetails1'));    
      },
      Register_Doctor:function()
      {
         Ext.Viewport.toggleMenu('left'); 
       Ext.Viewport.setActiveItem(Ext.create('screenshots.view.ClinicDetails'));      
      },
           
      back_to_doctors_list:function()
      {
         Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Doctors_List'));    
      },

      back_to_homepage:function()
      {
          Ext.Viewport.setActiveItem(Ext.create('screenshots.view.HomePage'));   
      },

       back_to_disease_information:function()
      {
          Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Disease_Information'));   
      },

      Normal:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.HomePage'));   
      },

      Homepage_Menu:function()
      {
      Ext.Viewport.setActiveItem(Ext.create('screenshots.view.sidebarMain'));
      screenshots.view.sidebar.setMenu();
       
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
        screenshots.view.sidebar.setMenu();
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

      listItemTap:function()
      {
        Ext.Viewport.setActiveItem(Ext.create('screenshots.view.Disease_Information'));
      }


   
});