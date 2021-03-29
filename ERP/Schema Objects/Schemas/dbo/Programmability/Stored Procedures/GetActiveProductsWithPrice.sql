CREATE PROCEDURE [dbo].[GetActiveProductsWithPrice] 
	@WarehouseCode VARCHAR(10)
AS BEGIN
	SELECT p.ProductCode, p.ProductDescription, p.TariffDuty, pp.Price 
	FROM tblProduct AS p
	INNER JOIN tblPriceByProduct AS pp ON p.ProductCode = pp.ProductCode
	INNER JOIN tblInventory AS i ON p.ProductCode = i.ProductCode AND p.WarehouseCode = i.WarehouseCode
	WHERE p.WarehouseCode = @WarehouseCode
END