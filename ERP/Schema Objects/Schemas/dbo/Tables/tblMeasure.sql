CREATE TABLE [dbo].[tblMeasure]
(
	[MeasureId] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [MeasureCode] VARCHAR(20) NOT NULL, 
    [Description] VARCHAR(50) NOT NULL
)

GO

CREATE UNIQUE INDEX [IX_tblMeasure_MeasureCode] ON [dbo].[tblMeasure] (MeasureCode)
