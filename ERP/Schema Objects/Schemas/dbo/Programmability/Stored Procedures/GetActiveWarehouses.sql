CREATE PROCEDURE GetActiveWarehouses
	@Active INT = 1
AS
BEGIN
	SELECT WarehouseCode, [Description], [Default], Active
	FROM tblWarehouse
	WHERE Active = @Active
END