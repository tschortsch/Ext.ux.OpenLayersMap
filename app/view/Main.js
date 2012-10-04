Ext.define('OpenLayersMapDemo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
	id: 'mainTabPanel',
	requires: ['Ext.ux.OpenLayersMap'],
	
    config: {
		tabBar: {
			docked: 'bottom'
		},
		
        items: [
            {
                title: 'OpenLayersMap',
                iconCls: 'maps',
				layout: 'fit',

                items: [
					{
						// Ext.ux.OpenLayersMap Component
						xtype: 'openlayersmap',
						id: 'openlayersmap',
						useCurrentLocation: true,
						autoMapCenter: false,
						mapOptions: {
							zoom: 15
						}
					}
				]
            }
        ]
    }
});
