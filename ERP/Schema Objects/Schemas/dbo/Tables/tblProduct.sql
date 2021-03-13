CREATE TABLE [dbo].[tblProduct]
(
	[ProductId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ProductCode] VARCHAR(50) NOT NULL, 
    [Reference] VARCHAR(50) NOT NULL, 
    [ProductDescription] VARCHAR(MAX) NOT NULL, 
    [UnitMeasureCode] VARCHAR(20) NOT NULL, 
    [QuantityUnitMeasure] FLOAT NULL, 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [Available] FLOAT NOT NULL, 
    [SubLineCode] VARCHAR(50) NOT NULL, 
    [LineCode] VARCHAR(50) NOT NULL, 
    [Provider] VARCHAR(500) NOT NULL, 
    [DutyCode] VARCHAR(10) NOT NULL, 
    [TariffDuty] FLOAT NOT NULL, 
    [Discount] FLOAT NOT NULL, 
    [Active] BIT NOT NULL,
    CONSTRAINT [FK_tblProduct_tblWarehouse_WarehouseCode] FOREIGN KEY([WarehouseCode]) REFERENCES [dbo].[tblWarehouse] ([WarehouseCode]),
    CONSTRAINT [FK_tblProduct_tblProductLines_CodLine] FOREIGN KEY([LineCode]) REFERENCES [dbo].[tblProductLines] ([LineCode]),
    CONSTRAINT [FK_tblProduct_tblProductSubLine_SubLineCode] FOREIGN KEY([SubLineCode]) REFERENCES [dbo].[tblProductSubLine] ([SubLineCode]), 
    CONSTRAINT [FK_tblProduct_TblDuty] FOREIGN KEY ([DutyCode]) REFERENCES [dbo].[TblDuty](DutyCode), 
    CONSTRAINT [FK_tblProduct_TblMeasure] FOREIGN KEY (UnitMeasureCode) REFERENCES [TblMeasure](Measurecode)

)
GO
CREATE UNIQUE INDEX [IX_tblProduct_ProductCode] ON [dbo].[tblProduct] ([ProductCode])
GO