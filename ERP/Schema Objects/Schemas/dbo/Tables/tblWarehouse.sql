CREATE TABLE [dbo].[tblWarehouse]
(
	[WarehouseId] INT NOT NULL PRIMARY KEY, 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(100) NOT NULL, 
    [Default] BIT NOT NULL, 
    [Active] BIT NOT NULL, 
    [UserCode] VARCHAR(50) NULL
)

GO

CREATE UNIQUE INDEX [IX_tblWarehouse_WarehouseCode] ON [dbo].[tblWarehouse] ([WarehouseCode])
