using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Documents.Entities
{
    [Table("tblTransactionDocument", Schema = "dbo")]
    public class TransactionDocument
    {
        [Key]
        [Required]
        public string IdTrans { get; set; }
        [Required]
        [MaxLength(50)]
        public string DocumentCode { get; set; }
        [Required]
        [MaxLength(50)]
        public string SerieCode { get; set; }
        [Required]
        public long NumDocument { get; set; }
        [Required]
        public DateTime DocumentDate { get; set; }
        [Required]
        public DateTime AccountingDate { get; set; }
        [Required]
        public DateTime ExpirationDate { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
        [Required]
        [MaxLength(50)]
        public string PartnerCod { get; set; }
        [Required]
        [MaxLength(50)]
        public string IdentificationNumber { get; set; }
        [Required]
        [MaxLength(500)]
        public string ThirdName { get; set; }
        [MaxLength(500)]
        public string TradeName { get; set; }
        [Required]
        [MaxLength(50)]
        public string PriceListCod { get; set; }
        [MaxLength(50)]
        public string PopulationCod { get; set; }
        [MaxLength(250)]
        public string Address { get; set; }
        [MaxLength(50)]
        public string Telephone { get; set; }
        [Required]
        [MaxLength(50)]
        public string VendorCode { get; set; }
        [Required]
        [MaxLength(50)]
        public string PaymentConditionCode { get; set; }
        [Required]
        public int Period { get; set; }
        [Required]
        [MaxLength(50)]
        public string CurrencyCode { get; set; }
        [Required]
        public bool Draft { get; set; }
        [MaxLength(4000)]
        public string Comments { get; set; }
        [MaxLength(4000)]
        public string CommentsAccounting { get; set; }
        [MaxLength(50)]
        public string AssociatedAccount { get; set; }
        [MaxLength(50)]
        public string BranchCode { get; set; }
        [Required]
        public decimal TotalGross { get; set; }
        [Required]
        public decimal TotalDiscount { get; set; }
        [Required]
        public decimal TotalTrasDiscount { get; set; }
        [Required]
        public decimal TotalDuty{ get; set; }
        [Required]
        public decimal TotalRetention { get; set; }
        [Required]
        public decimal TotalRound { get; set; }
        [Required]
        public decimal TotalDocument { get; set; }
        [Required]
        public decimal TotalCost { get; set; }
        [Required]
        public decimal ValueTrmNegotiation { get; set; }
        [MaxLength(50)]
        public string DistributionCode { get; set; }
        [Required]
        [MaxLength(50)]
        public string StateDocument { get; set; }
        [MaxLength(50)]
        public string DocRef { get; set; }
        [MaxLength(50)]
        public string StateAuthorizationCode { get; set; }
        public int? NumberPrinting { get; set; }
        [MaxLength(50)]
        public string Prefix { get; set; }
        [MaxLength(50)]
        public string Suffix { get; set; }
        public decimal? FinancialDiscount { get; set; }
        public DateTime? FinancialDiscountDate { get; set; }
        [Required]
        public bool AffectCost { get; set; }
        [Required]
        public bool RetentionNA { get; set; }
        [MaxLength(500)]
        public string Title { get; set; }
        [MaxLength(500)]
        public string SubTitle { get; set; }
        [MaxLength(500)]
        public string Legend1 { get; set; }
        [MaxLength(500)]
        public string Legend2 { get; set; }
        [MaxLength(500)]
        public string Legend3 { get; set; }
        [MaxLength(500)]
        public string Legend4 { get; set; }
        [MaxLength(500)]
        public string Legend5 { get; set; }
        [MaxLength(500)]
        public string Legend6 { get; set; }
        [MaxLength(500)]
        public string Legend7 { get; set; }
        [MaxLength(500)]
        public string Legend8 { get; set; }
        [MaxLength(500)]
        public string Legend9 { get; set; }
        [MaxLength(500)]
        public string Legend10 { get; set; }
        [Required]
        [MaxLength(2)]
        public string OperationType { get; set; }
        [MaxLength(50)]
        public string UserCode { get; set; }
        [MaxLength(50)]
        public string IPAdrress { get; set; }
        [Required]
        public bool Sync { get; set; }
        public DateTime? SyncDate { get; set; }

    }
}
