CREATE PROCEDURE [dbo].[GetActiveMenus] AS
BEGIN
	SELECT [MenuId],[Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Url],[Level] FROM [param].[tblMenu] ORDER BY [Level] DESC;
END