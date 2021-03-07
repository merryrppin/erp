CREATE TABLE [dbo].[tblPriceByProduct]
(
	[PriceByProductId] INT NOT NULL PRIMARY KEY, 
    [PriceListCode] VARCHAR(10) NOT NULL, 
    [ProductCode] VARCHAR(50) NOT NULL, 
    [BasePrice] DECIMAL(18, 8) NOT NULL, 
    [Factor] DECIMAL(18, 8) NOT NULL, 
    [DiscountList] DECIMAL(18, 8) NOT NULL, 
    [Price] DECIMAL(18, 8) NOT NULL, 
    [Discount] DECIMAL(18, 8) NOT NULL, 
    [DiscountValue] DECIMAL(18, 8) NOT NULL, 
    [ValidityStartDate] DATE NULL, 
    [ValidityEndDate] DATE NULL, 
    [Inactive] BIT NOT NULL, 
    [UserCode] VARCHAR(50) NULL,
    CONSTRAINT [FK_tblPriceByProduct_tblpriceList_PriceListCod] FOREIGN KEY([PriceListCode]) REFERENCES [dbo].[tblPriceList] ([PriceListCode]),
    CONSTRAINT [FK_tblPriceByProduct_tblProdut_Productcode] FOREIGN KEY([ProductCode]) REFERENCES [dbo].[tblProduct] ([ProductCode])

)
