CREATE TABLE [dbo].[tblProductSubLine](
	[SubLineId] [int] IDENTITY(1,1) NOT NULL,
	[SubLineCode] [varchar](50) NOT NULL,
	[LineCode] VARCHAR(50) NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_tblProductSubLine] PRIMARY KEY CLUSTERED ([SubLineId] ASC)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [FK_tblProductSubLine_tblProductLines_CodLine] FOREIGN KEY([LineCode]) REFERENCES [dbo].[tblProductLines] ([LineCode])
) ON [PRIMARY]
GO
CREATE UNIQUE INDEX [IX_tblProductSubLine_CodSubLine] ON [dbo].[tblProductSubLine] ([SubLineCode])
