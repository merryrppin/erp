CREATE PROCEDURE [dbo].[GetactivePriceList]
AS
SELECT PriceListCode,Description 
FROM tblPriceList
WHERE (ValidityEndDate > GETDATE() OR ValidityEndDate IS NULL)
