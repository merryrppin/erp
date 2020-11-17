CREATE TABLE [dbo].[tblPriceList]
(
	[PriceListId] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [PriceListCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(100) NOT NULL, 
    [PriceListBaseCode] VARCHAR(10) NULL, 
    [Factor] DECIMAL(18, 8) NOT NULL, 
    [ValidityStartDate] DATE NULL, 
    [ValidityEndDate] DATE NULL, 
    [UserCode] VARCHAR(50) NULL
)

GO

CREATE UNIQUE INDEX [IX_tblPriceList_CodPriceList] ON [dbo].[tblPriceList] ([PriceListCode])
