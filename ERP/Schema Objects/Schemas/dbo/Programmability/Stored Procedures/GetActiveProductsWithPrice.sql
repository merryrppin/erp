CREATE PROCEDURE [dbo].[GetActiveProductsWithPrice] 
	@WarehouseCode VARCHAR(10),
	@PriceListCode VARCHAR(10)
AS BEGIN
	SELECT p.ProductCode, p.ProductDescription, p.TariffDuty, pp.Price, ISNULL(i.Available, 0) AS Available, @WarehouseCode AS WarehouseCode, @PriceListCode AS PriceListCode
	FROM tblProduct AS p
	INNER JOIN tblPriceByProduct AS pp ON p.ProductCode = pp.ProductCode
	LEFT JOIN tblInventory AS i ON p.ProductCode = i.ProductCode AND p.WarehouseCode = i.WarehouseCode
	WHERE p.WarehouseCode = @WarehouseCode AND pp.PriceListCode = @PriceListCode
END