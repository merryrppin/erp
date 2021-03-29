CREATE TABLE [dbo].[tblVendors]
(
	[VendorId] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [VendorName] VARCHAR(100) NOT NULL, 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [VendorCode] VARCHAR(10) NOT NULL, 
    [Default] BIT NOT NULL DEFAULT 0, 
    [Active] BIT NOT NULL DEFAULT 1, 
    [UserCode] VARCHAR(50) NOT NULL
)
