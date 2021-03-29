CREATE TABLE [dbo].[tblSeries]
(
	[SerieId] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [SerieCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(50) NOT NULL, 
    [InitialNumber] INT NOT NULL, 
    [CurrentNumber] INT NOT NULL, 
    [FinalNumber] INT NOT NULL, 
    [Prefix] VARCHAR(10) NULL, 
    [Suffix] VARCHAR(10) NULL,
    [Title] VARCHAR(500) NULL, 
    [SubTitle] VARCHAR(500) NULL, 
    [Legend1] VARCHAR(500) NULL, 
    [Legend2] VARCHAR(500) NULL, 
    [Legend3] VARCHAR(500) NULL, 
    [Legend4] VARCHAR(500) NULL, 
    [Legend5] VARCHAR(500) NULL, 
    [Legend6] VARCHAR(500) NULL, 
    [Legend7] VARCHAR(500) NULL, 
    [Legend8] VARCHAR(500) NULL, 
    [Legend9] VARCHAR(500) NULL, 
    [Legend10] VARCHAR(500) NULL, 
    [Default] BIT NOT NULL DEFAULT 0, 
    [Active] BIT NOT NULL DEFAULT 1
)

GO

CREATE UNIQUE INDEX [IX_tblSeries_SerieCode] ON [dbo].[tblSeries] (SerieCode)
