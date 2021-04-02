CREATE TABLE [dbo].[tblWarehouse]
(
	[WarehouseId] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(100) NOT NULL, 
    [Default] BIT NOT NULL DEFAULT 0, 
    [Active] BIT NOT NULL DEFAULT 1, 
    [UserCode] VARCHAR(50) NULL
)

GO

CREATE UNIQUE INDEX [IX_tblWarehouse_WarehouseCode] ON [dbo].[tblWarehouse] ([WarehouseCode])
