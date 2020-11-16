CREATE TABLE [dbo].[tblFormProductFeature]
(
	[FormProductFeatureId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(100) NOT NULL, 
    [FormId] INT NOT NULL, 
    [Columns] INT NOT NULL, 
    CONSTRAINT [FK_tblFormProductFeature_tblForm] FOREIGN KEY ([FormId]) REFERENCES [tblForm]([FormId])
)
