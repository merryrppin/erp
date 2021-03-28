CREATE PROCEDURE [dbo].[GetActiveProductsWithPrice] AS 
BEGIN
	SELECT p.ProductCode, p.ProductDescription, p.TariffDuty, pp.Price 
	FROM tblProduct AS p
	INNER JOIN tblPriceByProduct AS pp ON p.ProductCode = pp.ProductCode
END