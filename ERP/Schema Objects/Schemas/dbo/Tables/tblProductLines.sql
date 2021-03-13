CREATE TABLE [dbo].[tblProductLines](
	[LineId] [int] IDENTITY(1,1) NOT NULL,
	[LineCode] [varchar](50) NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_tblProductLines] PRIMARY KEY CLUSTERED 
(
	[LineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE UNIQUE INDEX [IX_tblProductLines_CodLine] ON [dbo].[tblProductLines] ([LineCode])
