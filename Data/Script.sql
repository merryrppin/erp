--[erp].[param].[tblMenu]
INSERT INTO [erp].[param].[tblMenu]([Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Ruta]) VALUES('Configuración','','',NULL,100,1,'');
INSERT INTO [erp].[param].[tblMenu]([Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Ruta]) VALUES('Usuarios','','',1,100,1,'');
INSERT INTO [erp].[param].[tblMenu]([Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Ruta]) VALUES('Listar Usuarios','','',2,100,1,'/User/usersList');
INSERT INTO [erp].[param].[tblMenu]([Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Ruta]) VALUES('Permiso Usuarios','','',3,100,1,'/User/usersPermissions');