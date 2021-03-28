CREATE PROCEDURE GetActiveWarehouses
AS
BEGIN
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT WarehouseCode,[Description],[Default],Active
	FROM tblWarehouse
END
GO
