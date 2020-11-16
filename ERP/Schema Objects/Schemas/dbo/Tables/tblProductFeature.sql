CREATE TABLE [dbo].[tblProductFeature]
(
	[ProductFeatureId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ProductId] INT NOT NULL, 
    CONSTRAINT [FK_tblProductFeature_tblProduct] FOREIGN KEY ([ProductId]) REFERENCES [tblProduct]([ProductId])
)
