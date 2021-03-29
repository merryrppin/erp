CREATE TABLE [dbo].[tblDuty]
(
	[DutyId] INT NOT NULL PRIMARY KEY, 
    [DutyCode] VARCHAR(10) NOT NULL, 
    [Description] VARCHAR(20) NOT NULL, 
    [TariffDutty] FLOAT NOT NULL, 
    [Active] BIT NOT NULL DEFAULT 1 
)

GO

CREATE UNIQUE INDEX [IX_tblDuty_DutyCode] ON [dbo].[tblDuty] (DutyCode)
