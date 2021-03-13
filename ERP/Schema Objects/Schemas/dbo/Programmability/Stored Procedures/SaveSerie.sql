CREATE PROCEDURE SaveSerie(@Serie NVARCHAR(MAX))


AS
BEGIN

	SET NOCOUNT ON;

	SELECT * 
	INTO #tmpSerie
	FROM OPENJSON(@Serie)
	WITH (SerieId INT '$.SerieId',Description VARCHAR(20) '$.description',SerieCode VARCHAR(20) '$.SerieCode', InitialNumber FLOAT '$.InitialNumber', CurrentNumber FLOAT '$.CurrentNumber', FinalNumber FLOAT '$.FinalNumber', Prefix VARCHAR(10) '$.Prefix',
	Suffix VARCHAR(10) '$.Suffix',Title VARCHAR(500) '$.Title',SubTitle VARCHAR(500) '$.SubTitle',Legend1 VARCHAR(500) '$.Legend1',Legend2 VARCHAR(500) '$.Legend2',Legend3 VARCHAR(500) '$.Legend3',Legend4 VARCHAR(500) '$.Legend4'
	,Legend5 VARCHAR(500) '$.Legend5',Legend6 VARCHAR(500) '$.Legend6',Legend7 VARCHAR(500) '$.Legend7',Legend8 VARCHAR(500) '$.Legend8',Legend9 VARCHAR(500) '$.Legend9',Legend10 VARCHAR(500) '$.Legend10',
	[Default] BIT '$.default',Active BIT '$.Active')

	MERGE TblSeries AS ts
	USING #tmpSerie AS SOURCE
	ON ts.SerieId = SOURCE.SerieId
	WHEN MATCHED THEN
		UPDATE SET ts.InitialNumber = SOURCE.InitialNumber,
					ts.CurrentNumber = SOURCE.CurrentNumber,
					ts.FinalNumber = SOURCE.FinalNumber,
					ts.Prefix = SOURCE.Prefix,
					ts.Suffix = SOURCE.Suffix,
					ts.Title = SOURCE.Title,
					ts.SubTitle = SOURCE.SubTitle,
					ts.Legend1 = SOURCE.Legend1,
					ts.Legend2 = SOURCE.Legend2,
					ts.Legend3 = SOURCE.Legend3,
					ts.Legend4 = SOURCE.Legend4,
					ts.Legend5 = SOURCE.Legend5,
					ts.Legend6 = SOURCE.Legend6,
					ts.Legend7 = SOURCE.Legend7,
					ts.Legend8 = SOURCE.Legend8,
					ts.Legend9 = SOURCE.Legend9,
					ts.Legend10 = SOURCE.Legend10,
					ts.[Default] = SOURCE.[Default],
					ts.Active = SOURCE.Active
	WHEN NOT MATCHED THEN
		INSERT (SerieCode,Description,InitialNumber,CurrentNumber,FinalNumber,Prefix,Suffix,Title,SubTitle,Legend1,Legend2,Legend3,Legend4,Legend5,Legend6,Legend7,Legend8,Legend9,Legend10,[Default],Active)
		VALUES(SOURCE.SerieCode,SOURCE.Description,SOURCE.InitialNumber,SOURCE.CurrentNumber,SOURCE.FinalNumber,SOURCE.Prefix,SOURCE.Suffix,SOURCE.Title,SOURCE.SubTitle,SOURCE.Legend1,SOURCE.Legend2,SOURCE.Legend3,SOURCE.Legend4,SOURCE.Legend5,SOURCE.Legend6,SOURCE.Legend7,SOURCE.Legend8,SOURCE.Legend9,SOURCE.Legend10,SOURCE.[Default],SOURCE.Active);

END
GO
