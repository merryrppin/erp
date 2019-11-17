using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Documents.Entities
{
    [Table("tblTransactionDocumentDets", Schema = "dbo")]
    public class TransactionDocumentDets
    {
        [Key]
        [Required]
        public string IdTransDets { get; set; }
        public TransactionDocument TransactionDocument { get; set; }
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
        public int Item { get; set; }
        [Required]
        [MaxLength(50)]
        public string WareHouseCode { get; set; }
        [Required]
        [MaxLength(50)]
        public string ProductCode { get; set; }
        [Required]
        [MaxLength(500)]
        public string Description { get; set; }
        [MaxLength(50)]
        public string BranchCode { get; set; }
        [Required]
        [MaxLength(50)]
        public string PriceListCod { get; set; }
        [Required]
        public DateTime MovementDate { get; set; }
        [MaxLength(4000)]
        public string Details { get; set; }
        [MaxLength(50)]
        public string OriginDocumentCode { get; set; }
        [MaxLength(50)]
        public string OriginSerieCode { get; set; }
        public long? NumDocumentOrigin { get; set; }
        public long? ItemOrigin { get; set; }
        [Required]
        [MaxLength(50)]
        public string VendorCode { get; set; }
        [MaxLength(50)]
        public string UnitMeasureCode { get; set; }
        [Required]
        public decimal ValueUnitary { get; set; }
        [Required]
        public decimal QuantityOpen { get; set; }
        [Required]
        public decimal Quantity { get; set; }
        [Required]
        public decimal ValueGross { get; set; }
        [Required]
        public decimal? Discount { get; set; }
        public decimal? DiscountPromotional { get; set; }
        public decimal? DiscountAdditional { get; set; }
        public decimal? DiscountFinal { get; set; }
        [Required]
        public decimal ValueDiscount { get; set; }
        [Required]
        public decimal ValueTrasDiscount { get; set; }
        [Required]
        public decimal ValueNetUnitary { get; set; }
        [Required]
        public string DutyCode { get; set; }
        [Required]
        public decimal TariffDuty { get; set; }
        [Required]
        public decimal ValueDutty { get; set; }
        [Required]
        public decimal ValueRetention { get; set; }
        [Required]
        public decimal ValueTotal { get; set; }
        [Required]
        public decimal CostAverangeCurrent { get; set; }
        [Required]
        public decimal CostAverange { get; set; }
        [Required]
        public bool ItemInventary { get; set; }
        [Required]
        [MaxLength(50)]
        public string StateLine { get; set; }
        [MaxLength(50)]
        public string DistributionCode { get; set; }
        [Required]
        public bool ApplyAloneDutty { get; set; }
        [Required]
        public bool Sync { get; set; }
        public DateTime? SyncDate { get; set; }
        [MaxLength(50)]
        public string UserCode { get; set; }
        [MaxLength(500)]
        public string AdrressIp { get; set; }
    }
}
