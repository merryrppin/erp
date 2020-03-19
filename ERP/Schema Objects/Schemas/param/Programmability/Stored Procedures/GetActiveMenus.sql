CREATE PROCEDURE [dbo].[GetActiveMenus] AS
BEGIN
	SELECT * FROM [param].[tblMenu];
END