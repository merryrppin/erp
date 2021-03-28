CREATE PROCEDURE [dbo].[SaveSaleInvoice]
	@SaleInvoice VARCHAR(MAX),
	@Products VARCHAR(MAX),
	@UserCreatedBy VARCHAR(100)
AS BEGIN
	
	SELECT * 
	INTO #tmpSaleInvoice
	FROM OPENJSON(@SaleInvoice)
	WITH (clientDocument VARCHAR(250) '$.clientDocument', clientName VARCHAR(250) '$.clientName', selectedVendor INT '$.selectedVendor', netTotalValue FLOAT '$.netTotalValue', IVAValue FLOAT '$.IVAValue', totalDiscountValue FLOAT '$.totalDiscountValue', totalWithoutIvaValue FLOAT '$.totalWithoutIvaValue');
	
	SELECT * 
	INTO #tmpProducts
	FROM OPENJSON(@Products)
	WITH (Amount INT '$.Amount', Discount INT '$.Discount', Price DECIMAL(18,8) '$.Price', ProductCode VARCHAR(50) '$.ProductCode', TariffDutty FLOAT '$.TariffDutty');

	IF OBJECT_ID('tempdb..#tmpSaleInvoice') IS NOT NULL BEGIN DROP TABLE #tmpSaleInvoice END;
	IF OBJECT_ID('tempdb..#tmpProducts') IS NOT NULL BEGIN DROP TABLE #tmpProducts END;
END