CREATE TABLE [dbo].[tblVendors]
(
	[VendorId] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [VendorName] VARCHAR(100) NOT NULL, 
    [WarehouseCode] VARCHAR(10) NOT NULL, 
    [VendorCode] VARCHAR(10) NOT NULL, 
    [Default] BIT NOT NULL, 
    [Active] BIT NOT NULL, 
    [UserCode] VARCHAR(50) NOT NULL
)
