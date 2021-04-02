CREATE TABLE [dbo].[tblDuty]
(
	[DutyId] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [DutyCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(20) NOT NULL, 
    [TariffDuty] FLOAT NOT NULL, 
    [Active] BIT NOT NULL DEFAULT 1 
)

GO

CREATE UNIQUE INDEX [IX_tblDuty_DutyCode] ON [dbo].[tblDuty] (DutyCode)
