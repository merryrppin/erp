CREATE TABLE [dbo].[tblForm_FormProductFeature]
(
	[Form_FormProductFeatureId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [FormId] INT NOT NULL, 
    [FormProductFeatureId] INT NOT NULL, 
    [Order] INT NOT NULL DEFAULT 0, 
    [Active] BIT NOT NULL DEFAULT 1, 
    CONSTRAINT [FK_tblForm_FormProductFeature_tblForm] FOREIGN KEY ([FormId]) REFERENCES [tblForm]([FormId]), 
    CONSTRAINT [FK_tblForm_FormProductFeature_tblFormProductFeature] FOREIGN KEY ([FormProductFeatureId]) REFERENCES [tblFormProductFeature]([FormProductFeatureId])
)
