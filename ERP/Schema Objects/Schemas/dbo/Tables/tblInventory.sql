CREATE TABLE [dbo].[tblInventory]
(
	[InventoryId] INT NOT NULL PRIMARY KEY, 
    [ProductCode] VARCHAR(50) NOT NULL, 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [Requested] DECIMAL(18, 8) NOT NULL, 
    [Available] DECIMAL(18, 8) NOT NULL, 
    [Reserve] DECIMAL(18, 8) NOT NULL, 
    [Stock] DECIMAL(18, 8) NOT NULL, 
    [StockMin] DECIMAL(18, 8) NULL, 
    [StockMax] DECIMAL(18, 8) NULL, 
    [AverageCost] DECIMAL(18, 8) NULL,
    CONSTRAINT [FK_tblInventory_tblProduct_ProductCode] FOREIGN KEY([ProductCode]) REFERENCES [dbo].[tblProduct] ([ProductCode]),
    CONSTRAINT [FK_tblInventory_tblWarehouse_WarehouseCode] FOREIGN KEY([WarehouseCode]) REFERENCES [dbo].[tblWarehouse] ([WarehouseCode])
)