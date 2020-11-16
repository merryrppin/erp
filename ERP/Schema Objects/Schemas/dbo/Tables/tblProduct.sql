CREATE TABLE [dbo].[tblProduct]
(
	[ProductId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ProductCode] VARCHAR(50) NOT NULL, 
    [Reference] VARCHAR(50) NOT NULL, 
    [ProductDescription] VARCHAR(MAX) NOT NULL, 
    [Price] FLOAT NOT NULL, 
    [UnitMeasureCode] VARCHAR(50) NOT NULL, 
    [QuantityUnitMeasure] FLOAT NULL, 
    [WareHouseCode] VARCHAR(50) NOT NULL, 
    [Available] FLOAT NOT NULL, 
    [SubLine] VARCHAR(50) NOT NULL, 
    [Line] VARCHAR(50) NOT NULL, 
    [Provider] VARCHAR(500) NOT NULL, 
    [DuttyCode] VARCHAR(50) NOT NULL, 
    [TariffDutty] FLOAT NOT NULL, 
    [Discount] FLOAT NOT NULL
)
