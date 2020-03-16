using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblProduct", Schema = "dbo")]
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [MaxLength(50)]
        public string ProductCode { get; set; }
        [MaxLength(50)]
        public string Reference { get; set; }
        [MaxLength(5000)]
        public string ProductDescription { get; set; }
        public decimal Price { get; set; }
        [MaxLength(50)]
        public string UnitMeasureCode { get; set; }
        public decimal? QuantityUnitMeasure { get; set; }
        [MaxLength(50)]
        public string WareHouseCode { get; set; }
        public decimal Available { get; set; }
        [MaxLength(50)]
        public string SubLine { get; set; }
        [MaxLength(50)]
        public string Line { get; set; }
        [MaxLength(500)]
        public string Provider { get; set; }
        [MaxLength(50)]
        public string DuttyCode { get; set; }
        public decimal TariffDutty { get; set; }
        public decimal Discount { get; set; }
    }
}
