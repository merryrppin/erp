CREATE TABLE [dbo].[tblFormProductFeature_FormField]
(
	[FormProductFeature_FormFieldId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [FormProductFeatureId] INT NOT NULL, 
    [FormFieldId] INT NOT NULL, 
    [Order] INT NOT NULL DEFAULT 0, 
    [Active] BIT NOT NULL DEFAULT 1, 
    CONSTRAINT [FK_tblFormProductFeature_FormField_tblFormField] FOREIGN KEY ([FormFieldId]) REFERENCES [tblFormField]([FormFieldId]), 
    CONSTRAINT [FK_tblFormProductFeature_FormField_tblFormProductFeature] FOREIGN KEY ([FormProductFeatureId]) REFERENCES [tblFormProductFeature]([FormProductFeatureId])
)
