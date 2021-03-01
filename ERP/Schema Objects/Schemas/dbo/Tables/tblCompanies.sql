CREATE TABLE [dbo].[tblCompanies]
(
	[CompanyId] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [CompanyName] VARCHAR(100) NOT NULL, 
    [Country] VARCHAR(50) NOT NULL
)
