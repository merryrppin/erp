CREATE TABLE [dbo].[tblProduct]
(
	[ProductId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ProductCode] VARCHAR(50) NOT NULL, 
    [Reference] VARCHAR(50) NOT NULL, 
    [ProductDescription] VARCHAR(MAX) NOT NULL, 
    [UnitMeasureCode] VARCHAR(50) NOT NULL, 
    [QuantityUnitMeasure] FLOAT NULL, 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [Available] FLOAT NOT NULL, 
    [SubLineCode] VARCHAR(50) NOT NULL, 
    [LineCode] VARCHAR(50) NOT NULL, 
    [Provider] VARCHAR(500) NOT NULL, 
    [DuttyCode] VARCHAR(50) NOT NULL, 
    [TariffDutty] FLOAT NOT NULL, 
    [Discount] FLOAT NOT NULL, 
    [Active] BIT NOT NULL,
    CONSTRAINT [FK_tblProduct_tblWarehouse_WarehouseCode] FOREIGN KEY([WarehouseCode]) REFERENCES [dbo].[tblWarehouse] ([WarehouseCode]),
    CONSTRAINT [FK_tblProduct_tblProductLines_CodLine] FOREIGN KEY([LineCode]) REFERENCES [dbo].[tblProductLines] ([LineCode]),
    CONSTRAINT [FK_tblProduct_tblProductSubLine_SubLineCode] FOREIGN KEY([SubLineCode]) REFERENCES [dbo].[tblProductSubLine] ([SubLineCode])

)
GO
CREATE UNIQUE INDEX [IX_tblProduct_ProductCode] ON [dbo].[tblProduct] ([ProductCode])
GO