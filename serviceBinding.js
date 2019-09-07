function initModel() {
	var sUrl = "/ODATA_ORG/V2/(S(v45a0rikuuxg4geh5tv4irqy))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}