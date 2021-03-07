CREATE PROCEDURE [dbo].[GetActiveVendors]
AS BEGIN
	SELECT VendorId, VendorName, WarehouseCode, VendorCode 
	FROM tblVendors
END