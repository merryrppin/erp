--[erp].[param].[tblMenu]
SET IDENTITY_INSERT [erp].[param].[tblMenu] ON
INSERT INTO [erp].[param].[tblMenu]([MenuId],[Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Url],[Level]) VALUES(1,'Configuración','','flaticon2-gear',NULL,100,1,'',0);
INSERT INTO [erp].[param].[tblMenu]([MenuId],[Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Url],[Level]) VALUES(2,'Usuarios','','',1,100,1,'',1);
INSERT INTO [erp].[param].[tblMenu]([MenuId],[Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Url],[Level]) VALUES(3,'Listar Usuarios','','',2,100,1,'#!/listUsers',2);
INSERT INTO [erp].[param].[tblMenu]([MenuId],[Name],[Description],[Icon],[ParentMenuId],[Order],[Active],[Url],[Level]) VALUES(4,'Permisos Usuarios','','',2,200,1,'#!/permissionsUsers',2);
SET IDENTITY_INSERT [erp].[param].[tblMenu] OFF