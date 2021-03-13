CREATE TABLE [dbo].[TblDocuments]
(
	[DocumentId] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [DocumentCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(50) NOT NULL, 
    [DocumentType] VARCHAR(2) NOT NULL
)

GO

CREATE UNIQUE INDEX [IX_TblDocuments_DocumentCode] ON [dbo].[TblDocuments] (DocumentCode)
