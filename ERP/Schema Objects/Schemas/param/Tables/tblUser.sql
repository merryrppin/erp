CREATE TABLE [param].[tblUser]
(
	[UserId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [UserFirstName] VARCHAR(200) NOT NULL, 
    [UserLastName] VARCHAR(200) NOT NULL, 
    [UserEmail] VARCHAR(200) NOT NULL, 
    [Login] VARCHAR(250) NOT NULL, 
    [Password] VARCHAR(250) NOT NULL, 
    [Active] BIT NOT NULL DEFAULT 1
)
