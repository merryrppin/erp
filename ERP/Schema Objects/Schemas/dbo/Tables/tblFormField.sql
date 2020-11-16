CREATE TABLE [dbo].[tblFormField]
(
	[FormFieldId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(100) NOT NULL, 
    [FieldValueTypeId] INT NOT NULL, 
    [Active] BIT NOT NULL DEFAULT 1, 
    CONSTRAINT [FK_tblFormField_tblFieldValueType] FOREIGN KEY ([FieldValueTypeId]) REFERENCES [param].[tblFieldValueType]([FieldValueTypeId])
)
