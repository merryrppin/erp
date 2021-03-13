CREATE PROCEDURE [dbo].[GetActiveSeries]

AS

SELECT SerieId,SerieCode,Description,InitialNumber,CurrentNumber,FinalNumber,Prefix,Suffix,Title,SubTitle,
		Legend1,Legend2,Legend3,Legend4,Legend5,Legend6,Legend7,Legend8,Legend9,Legend10,[Default],Active 
FROM TblSeries

