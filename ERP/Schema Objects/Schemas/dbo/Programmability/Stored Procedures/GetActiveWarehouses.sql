CREATE PROCEDURE GetActiveWarehouses
AS
BEGIN
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT WarehouseCode,[Description],[Default],Inactive
	FROM tblWarehouse
END
GO
