sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mycapapp/managepuschaseorder/test/integration/FirstJourney',
		'mycapapp/managepuschaseorder/test/integration/pages/POsList',
		'mycapapp/managepuschaseorder/test/integration/pages/POsObjectPage',
		'mycapapp/managepuschaseorder/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mycapapp/managepuschaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);