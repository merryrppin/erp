CREATE TABLE [dbo].[tblForm]
(
	[FormId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [NameForm] VARCHAR(100) NOT NULL, 
    [Description] VARCHAR(MAX) NULL
)
