CREATE TABLE [dbo].[tblProductImages]
(
	[ProductImageId] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [ProductCode] VARCHAR(50) NOT NULL, 
    [Image] IMAGE NOT NULL,
    CONSTRAINT [FK_tblProductImages_tblProduct_ProductCode] FOREIGN KEY([ProductCode]) REFERENCES [dbo].[tblProduct] ([ProductCode])
)